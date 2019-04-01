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
     * It handles inputs from config and shows error or setups cron
     * @param inputs
     * @returns {Promise<*>}
     */
    async renderConfigInteract(inputs) {
        const validation = new Validation();
        const preferences = new Preferences();
        const cron = new HandleCron();

        let error = validation.validateStockForm(inputs, this.translations);
        if (error) {
            return await this.renderServiceError(error, inputs);
        }

        let market = this.stockNames.find(market => market.title === inputs.stockName);

        preferences.savePreferences(constants.API_KEY, inputs.apiKey);
        preferences.savePreferences(constants.WATCHED_STOCK_KEY, inputs.stockName);
        preferences.savePreferences(constants.LAMP_SELECTED, inputs.device);
        preferences.savePreferences(constants.THRESHOLD_KEY, inputs.threshold);
        preferences.savePreferences(constants.COMPANY_NAME, market.name);
        await cron.setupCron(['*/15 * * * *']);
        await cron.handleCron();

        return await this.renderServiceConfigured();
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

        let apiKey = await preferences.getPreferences(constants.API_KEY);
        obj.inputs.apiKey = apiKey.value ? apiKey.value : "";

        let threshold = await preferences.getPreferences(constants.THRESHOLD_KEY);
        obj.inputs.threshold = threshold.value ? threshold.value : "";

        let stockName = await preferences.getPreferences(constants.WATCHED_STOCK_KEY);
        obj.inputs.stockName = stockName.value ? stockName.value : "";

        let device = await preferences.getPreferences(constants.LAMP_SELECTED);
        obj.inputs.device = device.value ? device.value : "";

        obj.error = {
            message: "",
            type: ""
        };

        let html = serviceTemplate(obj);
        return {html, title};
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
     * It renders widget template
     * @returns {Promise<*>}
     */
    async renderWidget() {
        let obj = {};
        const preferences = new Preferences();

        // Get data from KeyValueStore
        let company_name = await preferences.getPreferences(constants.COMPANY_NAME);
        let apiCall = await preferences.getPreferences(constants.WIDGET_DATA);
        let collectionDate = await preferences.getPreferences(constants.CRON_DATE);

        //Create title for widget
        let date = collectionDate.value ? collectionDate.value : null;
        let subTitle;
        if(date) {
            let dateObj = new Date(date);
            let formattedDate = dateObj ? dateObj.toLocaleString() : null;
            subTitle = 'Stock alert - ' + formattedDate;
        } else {
            subTitle = 'Stock Alert';
        }


        if (Object.keys(company_name).length !== 0 && company_name.constructor === Object && Object.keys(apiCall).length !== 0 && apiCall.constructor === Object) {
            let apiCallValue = apiCall.value;
            let companyNameValue = company_name.value;
            apiCallValue = apiCallValue['Global Quote'] ? apiCallValue['Global Quote'] : null;
            if(apiCallValue) {
                let body = {};
                for (let key in apiCallValue) {
                    let formattedKey = key.slice(4);
                    body[formattedKey] = apiCallValue[key];
                }

                obj.translations = this.translations;
                obj.company_name = companyNameValue;
                obj.data = body;

                let html = widgetTemplate(obj);
                return {html, subTitle};
            } else {
                let html = errorWidgetTemplate(this.translations.noData);
                return {html, subTitle};
            }
        } else {
            let html = errorWidgetTemplate(this.translations.subscribeFirst);
            return {html, subTitle};
        }
    }

    /**
     * It renders success template when service configured properly
     * @returns {{html: string, title: string}}
     */
    renderServiceConfigured() {
        let html = serviceConfiguredTemplate(this.translations);
        return {html, title};
    }
}

module.exports = RenderTemplates;
