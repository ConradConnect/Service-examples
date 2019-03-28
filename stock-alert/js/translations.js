class Translations {
    /**
     * Loads proper translations depending on lang variable
     * @param lang
     * @returns {Object}
     */
    static getTranslations(lang) {
        let translations;

        if (lang === 'de') {
            translations = require('../translations/de.json');
        } else {
            translations = require('../translations/en.json');
        }

        return translations;
    }
}

module.exports = Translations;
