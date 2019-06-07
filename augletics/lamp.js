
const mydaco = require('mydaco');

async function getLamps() {

    // Get lamps for user
    const devices = await mydaco.interface('IotCore', 'devices', { types: ['lamp'] });

    // Only color controllable lamps are intering
    // Filter other lamps out
    const lamps = devices.filter(function (d) {

        // Each lamp has certain properties
        // Filter throuhg all and look for 'HEXRGB'
        const hexRGBContained = d.metadata.properties
        .reduce(function (old, ne) {
            return old || ne.unit === 'HexRGB';
        }, false);
        return hexRGBContained;
    }); 

    // Only the lampId and the name are interesting
    const lampsLessInfo = lamps.map(function (d) {
        return { id: d.id, name: d.name };
    });
    return lampsLessInfo;
}

async function turnRed(lamp) {

    // Turn on lamp and set its color to red.
    const colorRed = 'FF0000';
    await mydaco.interface('IotCore', 'actuate', { device: lamp, property: 'on_off', value: true });
    await mydaco.interface('IotCore', 'actuate', { device: lamp, property: 'color', value: colorRed });
}

module.exports  = {
    getLamps, turnRed
}
