const Joi = require('joi');

class Validation {

    /**
     * Validates threshold provided by user
     * @param threshold threshold provided by user in form
     * @returns {*}
     */
    validateThreshold(threshold) {
        const schema = Joi.number().positive();
        return Joi.validate(threshold, schema);
    }

    /**
     * Validate if all inputs in form are filled
     * @param inputs inputs from form
     * @param translations
     * @returns {Object}
     */
    validateStockForm(inputs, translations) {
        let error = {};

        if(inputs === undefined || (inputs.threshold !== undefined && inputs.threshold !== null && inputs.threshold === '') || !inputs.stockName || !inputs.apiKey) {
            error.type = 'empty';
            error.message = translations.inputsError;
            return error;
        } else if (inputs.threshold) {
            const output = this.validateThreshold(inputs.threshold);
            if (output.error) {
                error.type = 'threshold';
                error.message = translations.thresholdError;
                return error;
            }
        }
        return;
    }
}

module.exports = Validation;
