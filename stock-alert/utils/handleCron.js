const mydaco = require('mydaco');
const StockClient = require('../js/stockClient');
const Preferences = require('./preferences.js');
const constants = require('./constants');

class HandleCron {

    /**
     * Send cron patterns. This service is automatically called based on them.
     * @param cronPatterns
     * @returns {Promise<*>}
     */
    async setupCron(cronPatterns) {
        return mydaco.interface('Cron', 'put', {cronPatterns});
    }

    /**
     * It triggers every 15 minutes, download data from api and actuates device
     * @returns {Promise<void>}
     */
    async handleCron() {
        const client = new StockClient();
        const preferences = new Preferences();

        const devices = await mydaco.interface('IotCore', 'devices', {types: ['lamp']});
        const stock = await preferences.getPreferences(constants.WATCHED_STOCK_KEY);
        const data= await client.getStockQuote(stock.value);
        if(data.hasOwnProperty("Note")) {
            setTimeout(this.handleCron, 30000);
            return;
        }

        preferences.savePreferences(constants.WIDGET_DATA, data);
        preferences.savePreferences(constants.CRON_DATE, new Date());

        if(devices !== undefined && devices.length !== 0) {
            const lowerThreshold = await preferences.getPreferences(constants.THRESHOLD_KEY);
            const floatThreshold = parseFloat(lowerThreshold.value);

            const floatPrice = parseFloat(data['Global Quote']['05. price']);

            const lampId = await preferences.getPreferences(constants.LAMP_SELECTED);

            if (floatPrice < floatThreshold) {
                const properties = {
                    device: lampId.value,
                    property: 'on_off',
                    value: true
                };
                await mydaco.interface('IotCore', 'actuate', properties);

                const colorProperties = {
                    device:lampId.value,
                    property: 'color',
                    value: '#FF0000'
                };

                await mydaco.interface('IotCore', 'actuate', colorProperties);

                console.log("Below threshold");
            } else {

                const properties = {
                    device: lampId.value,
                    property: 'on_off',
                    value: false
                };
                await mydaco.interface('IotCore', 'actuate', properties);

                console.log("Above threshold");
            }
        }
        console.log("Cron executed");
    }
}

module.exports = HandleCron;
