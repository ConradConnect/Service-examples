const {styles} = require('../css/styles.js');
const {mui} = require('../css/mui.js');
exports.errorWidgetTemplate = function errorWidgetTemplate(text) {
    return `
<div class="widgetError widget-padding">
    <div class="mui-col-xs-12">
        <p class="subscribe-first">${text}</p>
    </div>
</div>
${styles}
${mui}
`;
}
