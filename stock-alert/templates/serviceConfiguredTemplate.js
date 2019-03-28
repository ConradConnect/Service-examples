const {styles} = require('../css/styles.js');
const {mui} = require('../css/mui.js');
exports.serviceConfiguredTemplate = function serviceConfiguredTemplate(translations) {
    return `
<div class="main-wrapper image-wrapper">
        <p class="serviceConfiguredText">${translations.serviceConfigured}</p>
        <div class="success-image"></div>
        <input type="button" class="send-button mui--align-bottom" onclick="closeWindow()" 
            value="${translations.close}"></input>
</div>
${styles}
${mui}
`;
}
