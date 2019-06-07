
const mydaco = require('mydaco');
const augletics = require('./augletics.js');
const lamp = require('./lamp.js');
const helper = require('./helper.js');

// Every day at 6 pm. 
const CHECK_INTERVAL = '0 18 * * *';

async function main(call) { 

    const { inter, func, params } = call;

    // Logic to trigger the correct funtion
    // Either to return html based on templates for the Service Marketplace and the Widget
    // Or to turn on a lamp, based on a cron job
    if (inter === 'ServiceMarketplace' && func === 'start') {
        return serviceStart(params.lang);
    }
    if (inter === 'ServiceMarketplace' && func === 'interact') {
        if (params.inputs.hours) {
            return await serviceInteract2(params.lang, params.inputs);
        }
        return await serviceInteract1(params.lang, params.inputs);
    }
    if (inter === 'Widget') {
        return await widget(params.lang);
    }
    if (inter === 'Cron') {
        return await cron();
    }
    return { html: '<div>Hello Augletics</div>' };
}

// Returns the first page, when the user configures the serve on the Service Marketplace
// The user is asked to fill in his Augletics credentials.
async function serviceStart(lang) {

    // Remove potential left overs from previous configuration.
    // If there was already a cron job, we want to remove it.
    await mydaco.interface('Cron', 'put', { cronPatterns: [] });

    // Get an html template in the users language and return it.
    const template = require('./templates/serviceMarketplaceStart.js')[lang];
    return { html: template }; 
}

// Returns the second configuration page.
// It checks credentials and aks the user to select a lamp in case he has one.
async function serviceInteract1(lang, inputs) {

    const { email, password } = inputs;
    let displayName;
    try {

        // Check credentials and throw error if something goes wrong
        displayName = await augletics.login(email, password);
        
    } catch (e) {
        if (e.message === 'Credentials invalid') {

            // Return a modiefied version of the first page, that asks for credentials again.
            const template = require('./templates/serviceMarketplaceStart.js')[lang + 'Wrong'];
            return { html: template };
        }
        throw e;
    }

    // Get all lamps from the users account and put them in the html template
    const lamps = await lamp.getLamps();
    const template = require('./templates/serviceMarketplaceInteract1.js')[lang](displayName, lamps);
    return { html: template };
}

// Returns the last configuration page
// And stores user input and sets up cron job
async function serviceInteract2(lang, inputs) {

    const { hours, lamps } = inputs; 

    //Check if hours is a postive number and if lamp was selected
    if (!lamps || !hours || isNaN(hours) || Number.parseInt(hours) <= 0) { 
        const template = require('./templates/serviceMarketplaceInteract2.js')[lang](null);
        return { html: template };
    }


    const value = {
        lampId: inputs.lamps,
        hours: Number.parseInt(inputs.hours)
    };

    // Save lampId and the "max length of not having rowed" in the internal database
    await mydaco.interface('KeyValueStore', 'put', { key: 'reminder', value });

    // Set up cron job, that will call this action according to the specified cron pattern.
    await mydaco.interface('Cron', 'put', { cronPatterns: [CHECK_INTERVAL] });

    const template = require('./templates/serviceMarketplaceInteract2.js')[lang](hours);
    return { html: template };
}

// Returns html for the widget which displays the last session data.
async function widget(lang) {

    try {

        // Get the last workout through the AUGLETICS api.
        const result = await augletics.getTrainingData();
        const {
            displayName,
            date,
            duration,
            distance,
            strokesPerMinute,
            avgTimePer500m,
            totalStrokes,
            avgSpeed,
            totalCal,
            avgHeartRate,
            avgCalsPerHour,
            totalRating,
            strokeLengthRating,
            constancyRating,
            rhythmRating,
            recoveryRating,
            movementRating
        } = result;

        // Setup the five attributes for the coaching score
        const trainerData = [constancyRating, rhythmRating, recoveryRating, strokeLengthRating, movementRating,];
        const template = require('./templates/widget.js')[lang](displayName, trainerData, Math.round(totalRating),
            helper.formatDate(date, lang), helper.getDays(date), helper.formatDuration(duration), Math.round(distance),
            Math.round(strokesPerMinute), avgTimePer500m, totalStrokes, avgSpeed.toFixed(2), totalCal, avgHeartRate, avgCalsPerHour);
        return { html: template };
    } catch (e) {
        return { html: 'Something went wrong' };
    }
}

// This is called by the cron job. It sets the selected lamp to red if the user hasn't exercised.
async function cron() {

    // Get lampId and "max length of not having rowed"
    const result = await mydaco.interface('KeyValueStore', 'get', { key: 'reminder' });
    const { lampId, hours } = result.value;

    // Get the last workout through the AUGLETICS api.
    const trainingData = await augletics.getTrainingData();
    const { date } = trainingData;
    const hoursSinceLastSession = helper.getHours(date);

    // Turn lamp to red if user hasn't exercised. 
    if (hoursSinceLastSession > hours) {
        await lamp.turnRed(lampId);
    }
    return {};
}

exports.main = main;
