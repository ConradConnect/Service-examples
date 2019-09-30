const mydaco = require('mydaco');
const calculations = require('./calculations.js');
const utils = require('./utils.js');
const messaging = require('./messaging.js');

async function interface(params) {
  const interfaceResult = await mydaco.interface(params.inter, params.func, params.parameters);
  return { interfaceResult };
}

async function getUserCompetitions() {
  const pr = [
    mydaco.interface('KeyValueStore', 'get', { key: 'myCompetitions' })
  ];
  const re = await Promise.all(pr);
  const comps = re[0];
  const defaultSettings = re[1] || {};

  const userCompetitions = comps.value ? comps.value : {};
  const promises = Object.keys(userCompetitions).map(function (id) {
    return mydaco.interface('KeyValueStore', 'getShared', { key: id });
  });
  const result = await Promise.all(promises);

  const competitions = result.map(function (c) {
    c.value.id = c.key;
    c.value.deviceId = userCompetitions[c.key].deviceId;
    c.value.personName = userCompetitions[c.key].personName;
    c.value.isAdmin = c.value.adminNames.includes(userCompetitions[c.key].personName);
    return c.value;
  });
  const inPreparation = competitions.filter(function (c) {
    return !utils.hasStarted(c.start);
  });
  const running = competitions.filter(function (c) {
    return utils.hasStarted(c.start) && !utils.hasEnded(c.end);
  });
  const finished = competitions
    .filter(function (c) {
      return utils.hasEnded(c.end) && !utils.hasEnded(c.end, utils.OFFSET_HOURS);
    })
    .map(function (c) {
      c.finishedWithOffset = false;
      return c;
    });
  const finishedPlusOffset = competitions
    .filter(function (c) {
      return utils.hasEnded(c.end, utils.OFFSET_HOURS);
    })
    .map(function (c) {
      c.finishedWithOffset = true;
      return c;
    });
  const allFinished = [...finished, ...finishedPlusOffset]
  return {
    competitions: {
      inPreparation, running, finished: allFinished
    },
  };
}

async function createCompetition(params) {
  try {
    const lang = params.lang || 'en';

    if (!params.competitionName) return { error: 'competitionname missing' };
    const { competitionName, personName, deviceId, emails, description,
      competitionRange } = params;
    const id = ('' + Math.random()).substring(2); // generate random ID
    const deviceIdSelected = getDeviceFromSelect(deviceId);
    const { start, end } = getStartAndEnd(competitionRange);

    // do not created competitions which are over already
    if (utils.hasEnded(end)) {
      return { error: 'End date needs to be in the future' };
    }

    const pr = [
      mydaco.interface('KeyValueStore', 'get', { key: 'myCompetitions' }),
    ];
    const re = await Promise.all(pr);

    const userCompetitions = re[0].value || {};
    const defaultSettings = {};
    defaultSettings.personName = personName || defaultSettings.personName;
    defaultSettings.deviceId = deviceIdSelected || defaultSettings.deviceId;
    if (!defaultSettings.personName) return { error: 'personName missing' };
    if (!defaultSettings.deviceId) return { error: 'deviceId missing' };

    userCompetitions[id] = {
      personName: defaultSettings.personName,
      deviceId: defaultSettings.deviceId,
      lang,
    };
    const publicCompetition = {
      competitionName,
      personNames: [personName],
      colors: {},
      adminNames: [personName],
      start,
      end,
      description,
      isActive: true
    };
    publicCompetition.colors[personName] = utils.getRandomColor();
    const promises = [
      mydaco.interface('KeyValueStore', 'put', { key: 'myCompetitions', value: userCompetitions }),
      mydaco.interface('KeyValueStore', 'putShared', { key: id, value: publicCompetition }),
      calculations.startCronIfNeeded()
    ];
    const invites = messaging.sendInvites(emails, id, {
      lang,
      competitionName,
      competitionAdminName: personName,
      description
    });
    await Promise.all([...promises, ...invites]);
    const result = {};
    result[id] = publicCompetition;

    // manually execute cron to display in widget
    await calculations.cron();

    return result;
  } catch (e) {
    console.log(e);
    return { error: "text" };
  }
}

async function joinCompetitionByKey(params) {
  try {
    const { personName, deviceId } = params;
    let { key } = params;
    if (!key) return { error: 'key missing' };
    key = key.toUpperCase();
    key = key.startsWith('invite_') ? key : 'invite_' + key;

    const publicKey = await mydaco.interface('KeyValueStore', 'getShared', { key });
    if (!publicKey.value || !publicKey.value.key) return { error: 'key not found' };

    const id = publicKey.value.key;
    const proms = [
      mydaco.interface('KeyValueStore', 'getShared', { key: id }),
      mydaco.interface('KeyValueStore', 'get', { key: 'myCompetitions' }),
    ];
    const resus = await Promise.all(proms);
    const joinCompetition = resus[0];
    if (!joinCompetition.value) {
      return { error: 'id not found' };
    }
    if (utils.hasEnded(joinCompetition.value.end)) {
      return { error: 'competition ended' };
    }
    const myCompetitions = resus[1].value ? resus[1].value : {};
    if (myCompetitions[id]) {
      return { error: 'already joined the competition' };
    }

    const defaultSettings = {};
    defaultSettings.personName = personName || defaultSettings.personName;

    const deviceIdSelected = getDeviceFromSelect(deviceId);
    defaultSettings.deviceId = deviceIdSelected || defaultSettings.deviceId;

    if (!defaultSettings.personName) return { error: 'personName missing' };
    if (!defaultSettings.deviceId) return { error: 'deviceId missing' };

    myCompetitions[id] = {
      personName: defaultSettings.personName,
      deviceId: defaultSettings.deviceId
    };
    const publicCompetition = joinCompetition.value;
    if (publicCompetition.personNames.includes(personName)) {
      return { error: 'username already in competition' };
    }
    publicCompetition.personNames.push(personName);
    const usedColors = Object.values(publicCompetition.colors);
    publicCompetition.colors[personName] = utils.getRandomColor(usedColors);
    const promises = [
      mydaco.interface('KeyValueStore', 'putShared', { key: id, value: publicCompetition }),
      mydaco.interface('KeyValueStore', 'put', { key: 'myCompetitions', value: myCompetitions }),
      calculations.startCronIfNeeded()
    ];
    await Promise.all(promises);
    const result = {};
    result[id] = publicCompetition;

    // manually execute cron to display in widget
    await calculations.cron();

    return result;
  } catch (e) {
    console.log(e);
    return { error: 'hallo' };
  }
}

async function showCompetitionById(params) {
  try {
    if (!params.id) return { error: 'id not found' };
    const { id } = params;
    const proms = [
      mydaco.interface('KeyValueStore', 'getShared', { key: id }),
      mydaco.interface('KeyValueStore', 'get', { key: 'myCompetitions' }),
    ];
    const resu = await Promise.all(proms);
    if (!resu[1].value || !resu[1].value[id]) {
      return { error: 'Competition not existing or you are not part of it' };
    }

    const result = resu[0].value;
    let status;
    if (!utils.hasStarted(result.start)) status = 'inPreparation';
    if (utils.hasStarted(result.start) && !utils.hasEnded(result.end)) status = 'running';
    if (utils.hasEnded(result.end)) status = 'finished';

    result.adminNames = resu[0].value.adminNames;
    result.isAdmin = resu[0].value.adminNames.includes(resu[1].value[id].personName);
    result.status = status;
    result.id = id;
    result.personName = resu[1].value[id].personName
    return result;
  } catch (e) {
    console.log(e);
    return { error: 'error' }
  }
}

async function changeParticipation(params) {
  if (!params.id) return { error: 'id not found' };
  const { id, deviceId } = params;
  const proms = [
    mydaco.interface('KeyValueStore', 'getShared', { key: id }),
    mydaco.interface('KeyValueStore', 'get', { key: 'myCompetitions' }),
  ];
  const resu = await Promise.all(proms);
  if (!resu[1].value || !resu[1].value[id]) {
    return { error: 'Competition not existing or you are not part of it' };
  }
  if (!resu[0].value || utils.hasStarted(resu[0].value.start)) {
    return { error: 'Competition already started' };
  }
  if (!deviceId) return { error: 'deviceId missing' };
  const myCompetitions = resu[1].value;
  myCompetitions[id].deviceId = deviceId;
  await mydaco.interface('KeyValueStore', 'put', { key: 'myCompetitions', value: myCompetitions })
  return { competition: resu[1].value };
}

async function changeCompetition(params) {
  if (!params.id) return { error: 'id not found' };
  const { id, start, end, description } = params;
  const proms = [
    mydaco.interface('KeyValueStore', 'getShared', { key: id }),
    mydaco.interface('KeyValueStore', 'get', { key: 'myCompetitions' }),
  ];
  const resu = await Promise.all(proms);
  if (!resu[1].value || !resu[1].value[id]) {
    return { error: 'Competition not existing or you are not part of it' };
  }
  if (!resu[0].value.adminNames.includes(resu[1].value[id].personName)) {
    return { error: 'You are not admin' };
  }
  const competition = resu[0].value;
  if (utils.hasStarted(competition.start)) {
    return { error: 'Competition already started' };
  }
  competition.start = utils.formatToDate(start) || competition.start;
  competition.end = utils.formatToDate(end) || competition.end;
  competition.description = description || competition.description;
  await mydaco.interface('KeyValueStore', 'putShared', { key: id, value: competition })
  return { competition };
}

async function leaveCompetition(params) {
  if (!params.id) return { error: 'id missing' };
  const { id } = params;
  const proms = [
    mydaco.interface('KeyValueStore', 'getShared', { key: id }),
    mydaco.interface('KeyValueStore', 'get', { key: 'myCompetitions' }),
  ];
  const resus = await Promise.all(proms);
  const myCompetitions = resus[1].value ? resus[1].value : {};
  if (!myCompetitions[id]) {
    return { error: 'you are not part competition' };
  }
  const leaveCompetition = resus[0];
  if (!leaveCompetition.value) {
    return { error: 'id not found' };
  }
  if (leaveCompetition.value.adminNames.includes(myCompetitions.personName)) {
    return { error: 'admins can not leave' };
  }
  const publicCompetition = leaveCompetition.value;
  publicCompetition.personNames = publicCompetition.personNames.filter(function (element) {
    return element !== myCompetitions[id].personName;
  });
  delete myCompetitions[id];
  const promises = [
    mydaco.interface('KeyValueStore', 'putShared', { key: id, value: publicCompetition }),
    mydaco.interface('KeyValueStore', 'put', { key: 'myCompetitions', value: myCompetitions })
  ];
  await Promise.all(promises);
  const result = {};
  result[id] = publicCompetition;
  return result;
}

async function inviteUser(params) {
  const lang = params.lang || 'en';

  if (!params.id) return { error: 'id missing' };
  const { id, emails } = params;
  const proms = [
    mydaco.interface('KeyValueStore', 'getShared', { key: id }),
    mydaco.interface('KeyValueStore', 'get', { key: 'myCompetitions' }),
  ];
  const resu = await Promise.all(proms);
  if (!resu[1].value || !resu[1].value[id]) {
    return { error: 'Competition not existing or you are not part of it' };
  }
  if (!resu[0].value.adminNames.includes(resu[1].value[id].personName)) {
    return { error: 'You are not admin' };
  }
  const competition = resu[0].value;
  if (competition.started) {
    return { error: 'Competition already started' };
  }
  await messaging.sendInvites(emails, id, {
    competitionName: competition.competitionName,
    competitionAdminName: resu[1].value[id].personName,
    lang,
    description: resu[1].value[id].description,
  });
  return { emails };
}

async function deleteCompetition(params) {
  const { id } = params;
  try {
    if (!id) return { error: 'id missing' };
    const proms = [
      mydaco.interface('KeyValueStore', 'getShared', { key: id }),
      mydaco.interface('KeyValueStore', 'get', { key: 'myCompetitions' }),
    ];
    const resu = await Promise.all(proms);
    const competition = resu[0].value;
    const myCompetitions = resu[1].value;
    if (!competition.adminNames.includes(myCompetitions[id].personName)) {
      return { error: 'only admins can delete competitions' };
    }
    delete myCompetitions[id];
    competition.isActive = false;
    const promises = [
      mydaco.interface('KeyValueStore', 'putShared', { key: id, value: competition }),
      mydaco.interface('KeyValueStore', 'put', { key: 'myCompetitions', value: myCompetitions })
    ];
    await Promise.all(promises);
    return { competition };
  } catch (e) {
    console.log(e);
    return { error: 'text' };
  }
}

function getDeviceFromSelect(select) {
  return Object.keys(select).reduce(function (all, key) {
    return select[key] ? key : all;
  }, null);
}

function getStartAndEnd(competitionRange) {
  if (competitionRange) {
    return competitionRange;
  }
  return { start: null, end: null }
}

module.exports = {
  interface,
  getUserCompetitions,
  createCompetition,
  joinCompetitionByKey,
  showCompetitionById,
  changeParticipation,
  changeCompetition,
  leaveCompetition,
  deleteCompetition,
  inviteUser,
  interface,
  getDeviceFromSelect
}
