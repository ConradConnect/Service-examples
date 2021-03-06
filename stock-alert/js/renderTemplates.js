const mydaco = require('mydaco');
const {serviceTemplate} = require('../templates/simpleServiceTemplate.js');
const {widgetTemplate} = require('../templates/widgetTemplate.js');
const {serviceConfiguredTemplate} = require('../templates/serviceConfiguredTemplate.js');
const {errorWidgetTemplate} = require('../templates/errorWidgetTemplate.js');
const {titleTemplate} = require('../templates/titleTemplate.js');
const Translations = require('./translations');
const Validation = require('./validation');
const Preferences = require('../utils/preferences.js');
const HandleCron = require('../utils/handleCron.js');
const STOCK_MARKETS = require('../utils/stockMarkets.json');
const title = titleTemplate();
const constants = require('../utils/constants');
const moment = require('moment');

class RenderTemplates {
    /**
     *  It loads translations and stock names
     * @param lang language forwarded from main func
     */
    constructor(lang) {
        this.translations = Translations.getTranslations(lang);
        this.stockNames = STOCK_MARKETS;
    }

    /**
     * It renders service configuration template
     * @returns {Promise<{html: string, title: string}>}
     */
    async renderService() {
        const preferences = new Preferences();
        let obj = {};
        obj.translations = this.translations;
        obj.stockNames = this.stockNames;
        obj.devices = await mydaco.interface('IotCore', 'devices', {types: ['lamp']});
        obj.inputs = {};

        let threshold = await preferences.getPreferences(constants.THRESHOLD_KEY);
        obj.inputs.threshold = threshold.value ? threshold.value : "";

        let stockName = await preferences.getPreferences(constants.WATCHED_STOCK_KEY);
        obj.inputs.stockName = stockName.value ? stockName.value : "";

        let device = await preferences.getPreferences(constants.LAMP_SELECTED);
        obj.inputs.selectedLamp = device.value ? device.value : "";

        obj.error = {
            message: "",
            type: ""
        };

        let html = serviceTemplate(obj);
        return {html, title};
    }

    /**
     * It handles inputs from config and shows error or setups cron
     * @param inputs
     * @returns {Promise<*>}
     */
    async renderServiceInteract(inputs) {
        const validation = new Validation();
        const preferences = new Preferences();
        const cron = new HandleCron();

        let error = validation.validateStockForm(inputs, this.translations);
        if (error) {
            return await this.renderServiceError(error, inputs);
        }

        let market = this.stockNames.find(market => market.title === inputs.stockName);

        preferences.savePreferences(constants.WATCHED_STOCK_KEY, inputs.stockName);
        preferences.savePreferences(constants.LAMP_SELECTED, inputs.selectedLamp);
        preferences.savePreferences(constants.THRESHOLD_KEY, inputs.threshold);
        preferences.savePreferences(constants.COMPANY_NAME, market.name);

        await cron.setupCron(['*/15 * * * *']);
        await cron.handleCron();

        return await this.renderServiceConfigured();
    }

    /**
     * It renders service configuration template when interact method returns error
     * @param error
     * @param inputs
     * @returns {Promise<{html: string, title: string}>}
     */
    async renderServiceError(error, inputs) {
        let obj = {};
        obj.translations = this.translations;
        obj.stockNames = this.stockNames;
        obj.devices = await mydaco.interface('IotCore', 'devices', {types: ['lamp']});
        obj.error = error;
        obj.inputs = inputs;

        let html = serviceTemplate(obj);
        return {html, title};
    }

    /**
     * It renders success template when service configured properly
     * @returns {{html: string, title: string}}
     */
    renderServiceConfigured() {
        let html = serviceConfiguredTemplate(this.translations);
        return {html, title};
    }

    /**
     * It renders widget template
     * @returns {Promise<*>}
     */
    async renderWidget() {
        const preferences = new Preferences();

        // Get data from KeyValueStore
        let company_name = await preferences.getPreferences(constants.COMPANY_NAME);
        let data = await preferences.getPreferences(constants.WIDGET_DATA);
        let collectionDate = await preferences.getPreferences(constants.CRON_DATE);

        //Create title for widget
        let date = collectionDate.value ? collectionDate.value : null;
        let subTitle;
        if(date) {
            subTitle = 'Stock alert - ' + moment.unix(date).format('YYYY-MM-DD');
        } else {
            subTitle = 'Stock Alert';
        }

        if (company_name.value && data.value) {
            let obj = {};
            obj.translations = this.translations;
            obj.company_name = company_name.value;
            obj.data = data.value;
            let dateString = '' + data.value['latestUpdate'];
            obj.latestTradingDay = moment.unix(dateString.substring(0, dateString.length - 3)).utc().format('YYYY-MM-DD');

            let html = widgetTemplate(obj);
            return {html, subTitle};
        } else {
            let html = errorWidgetTemplate(this.translations.noData);
            return {html, subTitle};
        }
    }
}

module.exports = RenderTemplates;
