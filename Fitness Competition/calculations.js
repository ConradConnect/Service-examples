const mydaco = require('mydaco');
const utils = require('./utils.js');
const messaging = require('./messaging.js');

const OFFSET_HOURS_EMAIL = 12;

async function startCronIfNeeded() {
  const pat = '*/15 * * * *';
  const pattern = await mydaco.Cron.get({});
  if (!pattern.includes(pat)) {
    await mydaco.Cron.put({ cronPatterns: [pat] });
  }
}

async function cron() {
  const { competitions, myCompetitions } = await getUserCompetitionsOld();
  const inPreparation = getInPreparation(competitions);
  const running = getRunning(competitions);
  const emailCompetiton = getReadyForEmailSend(competitions);
  await messaging.sendResults(emailCompetiton);

  emailCompetiton.forEach((comp) => {
    myCompetitions[comp.id].resultEmailSend = true;
  });

  const keyParams = {
    key: 'myCompetitions',
    value: myCompetitions,
  };
  await mydaco.interface('KeyValueStore', 'put', keyParams);

  if (inPreparation.length === 0 && running.length === 0) {
    await stopCrons();
    return {};
  }

  const stepPromises = running.map(comp => {
    const untilDate = new Date(comp.end);
    return getStepsSince(comp.deviceId, new Date(comp.start).getTime(), untilDate.getTime())
  });


  const steps = await Promise.all(stepPromises);

  const promises4 = [];
  for (let i = 0; i < running.length; i++) {
    promises4.push(new Promise((async (resolve, reject) => {
      let done = false;
      while (!done) {
        const untilDate = new Date();
        done = await updateStepsInKeyValueStore(running[i], steps[i], untilDate);
      }
      resolve();
    })));
  }
  await Promise.all(promises4);
}

async function updateStepsInKeyValueStore(competition, steps, untilDate) {
  const comp2 = await mydaco.interface('KeyValueStore', 'getShared', { key: competition.id });
  const compOjb = comp2.value;
  compOjb.steps = compOjb.steps || {};
  compOjb.steps[competition.personName] = {
    time: untilDate.toISOString(),
    steps,
  };
  const cond = {
    key: competition.id,
    value: compOjb,
    version: comp2.version,
  };
  const comp = await mydaco.interface('KeyValueStore', 'putShared', cond);
  return typeof comp.version === 'number'; // update worked
}

function getStepsPerDayForCompetitions(competitions, untilDate) {
  const until = untilDate.getTime();
  const promises = competitions.map((competition) => {
    const params = {
      device: competition.deviceId,
      property: 'steps',
      aggregate: 'max',
      grouping: 'hour',
      from: new Date(competition.start).getTime(),
      until,
    };
    return mydaco.interface('IotCore', 'data', params);
  });
  return promises;
}

function getInPreparation(competitions) {
  return Object.values(competitions).filter(c => !utils.hasStarted(c.start));
}

function getRunning(competitions) {
  return Object.values(competitions).filter(c => utils.hasStarted(c.start) && !utils.hasEnded(c.end, utils.OFFSET_HOURS));
}

function getReadyForEmailSend(competitions) {
  // email delay can be deactivated here
  return Object.values(competitions).filter(c => utils.hasEnded(c.end, OFFSET_HOURS_EMAIL) && !c.resultEmailSend);
  // return Object.values(competitions).filter(c => utils.hasEnded(c.end, 0) && !c.resultEmailSend);
}

function stopCrons() {
  return mydaco.interface('Cron', 'put', { cronPatterns: [] });
}

async function getUserCompetitionsOld() {
  const comps = await mydaco.interface('KeyValueStore', 'get', { key: 'myCompetitions' });
  const myCompetitions = comps.value ? comps.value : {};
  const promises = Object.keys(myCompetitions).map(id => mydaco.interface('KeyValueStore', 'getShared', { key: id }));
  const result = await Promise.all(promises);
  const competitions = result.reduce((all, c) => {
    c.value.id = c.key;
    c.value.deviceId = myCompetitions[c.key].deviceId;
    c.value.personName = myCompetitions[c.key].personName;
    c.value.lang = myCompetitions[c.key].lang;
    c.value.resultEmailSend = myCompetitions[c.key].resultEmailSend || false;
    all[c.key] = c.value;
    return all;
  }, {});
  return { competitions, myCompetitions };
}

// remove 5 minutes, to avoid requesting non existing data due to small server time differences
async function getStepsSince(deviceId, from, until = (new Date()).getTime() - 5 * 60 * 1000) {
  const MAX_DATA_POINTS = 2000;
  const INTERVAL = MAX_DATA_POINTS * 60 * 60 * 1000;

  const promises = [];

  //request one extra hour and extract it as offset later
  let temp = from - 60 * 60 * 1000;
  while (temp < until) {
    const upper = temp + INTERVAL < until ? temp + INTERVAL : until;
    const params = {
      device: deviceId,
      property: 'steps',
      aggregate: 'max',
      grouping: 'hour',
      from: temp,
      until: upper,
    };
    promises.push(mydaco.interface('IotCore', 'data', params));
    temp = upper;
  }

  const result = await Promise.all(promises);

  const datapoints = result.reduce((all, n) => [...all, ...n], []);

  if (datapoints.length < 2) return 0;

  let sum = 0;
  const firstPoint = datapoints[0];
  // only remove potential offset 
  if (from - firstPoint.timestamp > 0) {
    const offset = firstPoint.value;
    // remove offset, except if the reset happened exactly between the two datapoints
    sum = offset > datapoints[1].value ? 0 : - offset;
    // remove first additional datapoint
    datapoints.shift();
  }

  let lastValue = 0;
  datapoints.forEach((n) => {
    if (n.value === null) return;
    if (lastValue > n.value) {
      sum += lastValue;
    }
    lastValue = n.value;
  });
  sum += lastValue;

  return sum;
}

module.exports = {
  cron,
  startCronIfNeeded,
  getStepsSince,
};
