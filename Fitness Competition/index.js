const endpoints = require('./endpoints.js');
const calculations = require('./calculations.js');
const widget = require('./widget.js');
 
exports.main = async function (call) {
  try { 
    if (call.func === 'endpoint') {
      call.params.params.lang = call.params.lang;
      return endpoints[call.params.endpoint](call.params.params || {});
    }
    if (call.func === 'cron') {
      await calculations.cron();
      return {};
    }
    if (call.inter === 'Widget') {
        return widget.render(call);
    }
  } catch (e) {
    console.log('error');
    console.log(e);
  }
  return {};
}
