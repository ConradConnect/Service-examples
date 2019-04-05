const mydaco = require('mydaco');
const appConfig = require('../config');

const BASE_URL = 'https://cloud.iexapis.com/beta';
const API_KEY = appConfig.API_KEY;

class StockClient {
    /**
     * Performs request to API with specified key
     * @param url specific url to api
     * @param params params passed to function - e.g. market index
     * @returns {Promise<*>}
     */
    async makeRequest(url, params) {
        const config = {
            verb: 'GET',
            url: `${BASE_URL}${url}`,
            query: params
        };

        return mydaco.interface('Api', 'request', config).then(data => data.body).catch(err => err.response.status)
    }

    /**
     * Calls request function to get data for specified market
     * @param symbol symbol market for which we want get data
     * @returns {Promise<*>}
     */
    async getStockData(symbol) {
        return this.makeRequest(`/stock/${symbol}/quote`, {
            displayPercent: true,
            token: API_KEY
        })
    }

}

module.exports = StockClient;
