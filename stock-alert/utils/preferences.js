const mydaco = require('mydaco');

class Preferences {
    /**
     * It saves preference in KeyValueStore
     * @param key
     * @param value
     * @returns {Promise<*>}
     */
    async savePreferences(key, value) {
        return mydaco.interface('KeyValueStore', 'put', {key, value});
    }

    /**
     * It gets preference for specified key from KeyValueStore
     * @param key
     * @returns {Promise<*>}
     */
    async getPreferences(key) {
        return mydaco.interface('KeyValueStore', 'get', {key});
    }
}

module.exports = Preferences;
