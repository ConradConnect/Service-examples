const {styles} = require('../css/styles.js');
const {mui} = require('../css/mui.js');
exports.unsubscribedWidgetTemplate = function unsubscribedWidgetTemplate(translations) {
    return `
    <div class="mui-col-xs-12">
        <p class="subscribe-first">${translations.subscribeFirst}</p>
    </div>
${styles}
${mui}
`;
}
