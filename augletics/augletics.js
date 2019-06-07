
const mydaco = require('mydaco');

// Api keys and urls
const key = '<PUT KEY HERE>';
const loginUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword';
const workoutUrl = 'https://us-central1-augletics-e17fe.cloudfunctions.net/myDacoAuth';
const refreshTokenUrl = 'https://securetoken.googleapis.com/v1/token'

// Exchanges the users email and password for his displayName, an access token (idToken)
// and a refresh token
async function login(email, password) {
    const body = {
        email,
        password,
        returnSecureToken: true
    };
    const request = {
        body,
        verb: 'POST',
        query: { key },
        url: loginUrl
    };

    // Use the api interface to call the AUGLETICS api
    const result = await mydaco.interface('Api', 'request', request);
    if (result.status !== 200) {

        // For simplicity it is assumed, that the only possible error are invalid credentials
        throw new Error('Credentials invalid');
    }
    const { displayName, idToken, refreshToken } = result.body;
    const value = {
        idToken,
        refreshToken,
        displayName
    };

    // Store all information in the internal database
    await mydaco.interface('KeyValueStore', 'put', { key: 'token', value });
    return displayName;
}

// Get the last training session from AUGLETICS api
async function getTrainingData() {

    // Get the tokens from database (saved on login)
    const token = await mydaco.interface('KeyValueStore', 'get', { key: 'token' });
    let { idToken, refreshToken, displayName } = token.value;
    let result;
    try {

        // Get the last Workout if this failes because the access token
        // timed out, get a new one and try again
        result = await getLastWorkout(idToken);
    } catch (e) {
        if (e.message === 'Token invalid') {
            idToken = await getNewIdToken(refreshToken, displayName);
            result = await getLastWorkout(idToken);
        } else {
            throw e;
        }
    }
    result.displayName = displayName;
    return result;
}

// Returns the last workout if a valid idToken was provided
async function getLastWorkout(idToken) {
    const request = {
        body: { code: idToken },
        verb: 'POST',
        query: { key },
        url: workoutUrl
    };
    const result = await mydaco.interface('Api', 'request', request);
    if (result.body.errors !== 'none') {
        throw Error('Token invalid');
    }
    return result.body;
}

// Gets a new access token with a valid refreshToken
async function getNewIdToken(refreshToken, displayName) {
    const querystring = require('querystring');
    const body = querystring.stringify({ grant_type: 'refresh_token', refreshToken });
    const header = { 'Content-Type': 'application/x-www-form-urlencoded' };
    const request = {
        body,
        header,
        verb: 'POST',
        query: { key },
        url: refreshTokenUrl
    };

    // Call AUGLETICS api and request new tokens
    const result = await mydaco.interface('Api', 'request', request);
    const { id_token, refresh_token } = result.body;
    const value = {
        idToken: id_token,
        refreshToken: refresh_token,
        displayName
    };

    // Store new tokens in database
    await mydaco.interface('KeyValueStore', 'put', { key: 'token', value });
    return id_token;
}

module.exports = {
    login, getTrainingData
}
