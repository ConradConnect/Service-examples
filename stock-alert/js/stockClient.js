const mydaco = require('mydaco');
const Preferences = require('../utils/preferences.js');
const constants = require('../utils/constants');

const BASE_URL = 'https://www.alphavantage.co';
const API_KEY = 'LGQA45NJF2ZCB6NI';

class StockClient {

    /**
     * Performs request to API with specified key
     * @param url specific url to api
     * @param params params passed to function - e.g. market index
     * @returns {Promise<*>}
     */
    async makeRequest(url, params) {
        const preferences = new Preferences();
        const apiKey = await preferences.getPreferences(constants.API_KEY);
        if (Object.keys(apiKey).length !== 0 && apiKey.constructor === Object) {
            params['apikey'] = apiKey.value;
        } else {
            params['apikey'] = API_KEY;
        }

        const config = {
            verb: 'GET',
            url: `${BASE_URL}${url}`,
            query: params
        };

        return mydaco.interface('Api', 'request', config).then(data => data.body)
    }

    /**
     * Search stock for markets
     * @param input
     * @returns {Promise<*>}
     */
    async searchStock(input) {
        return this.makeRequest('/query', {
            'function': 'SYMBOL_SEARCH',
            keywords: input
        })
    }

    /**
     * Gets latest data for specified stock
     * @param symbol
     * @returns {Promise<*>}
     */
    async getStockQuote(symbol) {
        return this.makeRequest('/query', {
            'function': 'GLOBAL_QUOTE',
            symbol: symbol
        })
    }

    /**
     * Gets data from last week for specified stock
     * @param symbol
     * @returns {Promise<*>}
     */
    async getStockTimeseriesWeekly(symbol) {
        return this.makeRequest('/query', {
            'function': 'TIME_SERIES_WEEKLY',
            symbol: symbol
        })
    }
}

module.exports = StockClient;
