const RenderTemplates = require('./js/renderTemplates');
const HandleCron = require('./utils/handleCron.js');

exports.main = async function main(params) {
    const { lang = 'en' } = params.params;
    const templates = new RenderTemplates(lang);
    const cron = new HandleCron();

    if (params.inter === 'Cron') {
        return await cron.handleCron();
    }

    if (params.inter === 'ServiceMarketplace' && params.func === 'start') {
        return await templates.renderService();
    }

    if (params.inter === 'ServiceMarketplace' && params.func === 'interact') {
        const { inputs } = params.params;
        return await templates.renderConfigInteract(inputs);
    }

    if (params.inter === 'Widget') {
        return await templates.renderWidget();
    }
};
