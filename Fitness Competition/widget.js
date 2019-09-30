
const calculations = require('./calculations.js');
const endpoints = require('./endpoints.js');
const fs = require('fs');
const mydaco = require('mydaco');

const CC_AVERAGE_PER_DAY = 7673;
const OFFSET_HOURS = 24;

const STATICRELATIVE = './static/';

const widgetTemplate = fs.readFileSync(__dirname + '/static/react-widget/widget.html', 'utf8');

async function render(call) { 

  const lang = call.params.lang || 'en';

  const nonCompetitionValues = await getNonCompetitonValues();
  const competitionValues = await getCompetitonValues();

  const fullResult = { nonCompetitionValues, competitionValues };

  let translations;
  if (lang) {
    try {
      translations = require(`${STATICRELATIVE}translation_${lang}.json`);
    } catch (e) {
      translations = require(`${STATICRELATIVE}translation_default.json`);
    }
  }

  const dropdown = await mydaco.interface('KeyValueStore', 'get', { key: '_component_widget_selection' });
  const dropdownValue = dropdown.value || '';

  const html = widgetTemplate
    .replace('#RESULTJSON#', JSON.stringify(fullResult))
    .replace('#TRANSLATION#', JSON.stringify(translations))
    .replace('#DROPDOWNINIT#', dropdownValue)
    .replace('#LOCALEKEY#', lang || 'en');


  return { html, subTitle: '' };
}

async function getCompetitonValues() {
  const competitions = await endpoints.getUserCompetitions();
  return competitions;
}

async function getNonCompetitonValues() {
  const oneDay = new Date();
  oneDay.setHours(oneDay.getHours() - 24);
  const oneWeek = new Date();
  oneWeek.setHours(oneWeek.getHours() - 24 * 7);
  const oneMonth = new Date();
  oneMonth.setHours(oneMonth.getHours() - 24 * 30);

  let result;
  try {
    const { value } = await mydaco.interface('KeyValueStore', 'get', { key: '_component__mdc-selection_deviceId_value' });
    const deviceId = endpoints.getDeviceFromSelect(value);
    const promises = [
      calculations.getStepsSince(deviceId, oneDay.getTime()),
      calculations.getStepsSince(deviceId, oneWeek.getTime()),
      calculations.getStepsSince(deviceId, oneMonth.getTime())
    ];
    result = await Promise.all(promises);
  } catch (e) {
    console.log(e);
    result = [0, 0, 0];
  }

  return {
    day: result[0],
    week: result[1],
    month: result[2],
    ccDay: CC_AVERAGE_PER_DAY,
    ccWeek: CC_AVERAGE_PER_DAY * 7,
    ccMonth: CC_AVERAGE_PER_DAY * 30
  };
}

module.exports = {
  render
}