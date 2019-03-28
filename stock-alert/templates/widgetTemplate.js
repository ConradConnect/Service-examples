const {styles} = require('../css/styles.js');
const {mui} = require('../css/mui.js');
exports.widgetTemplate = function widgetTemplate(obj) {
    return `
<div>
    <div class="mui-col-xs-12">
        <div class="mui-row">
            <div class="mui-col-xs-12">
                <p class="company-name">${obj.company_name ? obj.company_name : obj.translations.companyName}</p>
            </div>
            <div class="mui-col-xs-12">
                <p class="company-index">${obj.data['symbol']}</p>
            </div>
        </div>
        <div class="mui-col-xs-4 stock-grid">
            <p class="preview-title">${obj.translations.price}</p>
            <p class="preview-value">$ ${obj.data['price']}</p>
        </div>
        <div class="mui-col-xs-4 stock-grid">
            <p class="preview-title">${obj.translations.change}</p>
            <p class="preview-value ${obj.data['change'].charAt(0) === '-' ? 'color-red' : 'color-green'}">$ ${obj.data['change']}</p>
        </div>
        <div class="mui-col-xs-4 stock-grid">
            <p class="preview-title">${obj.translations.changePercent}</p>
            <p class="preview-value ${obj.data['change percent'].charAt(0) === '-' ? 'color-red' : 'color-green'}">${obj.data['change percent']}</p>
        </div>
        <div class="mui-col-xs-4 stock-grid">
            <p class="preview-title">${obj.translations.volume}</p>
            <p class="preview-value">${obj.data['volume']}</p>
        </div>
        <div class="mui-col-xs-4 stock-grid">
            <p class="preview-title">${obj.translations.open}</p>
            <p class="preview-value">$ ${obj.data['open']}</p>
        </div>
        <div class="mui-col-xs-4 stock-grid">
            <p class="preview-title">${obj.translations.previousClose}</p>
            <p class="preview-value">$ ${obj.data['previous close']}</p>
        </div>
        <div class="mui-col-xs-4 stock-grid">
            <p class="preview-title">${obj.translations.high}</p>
            <p class="preview-value">$ ${obj.data['high']}</p>
        </div>
        <div class="mui-col-xs-4 stock-grid">
            <p class="preview-title">${obj.translations.low}</p>
            <p class="preview-value">$ ${obj.data['low']}</p>
        </div>
        <div class="mui-col-xs-4 stock-grid">
            <p class="preview-title">${obj.translations.latestTradingDay}</p>
            <p class="preview-value">${obj.data['latest trading day']}</p>
        </div>
    </div>
</div>
${styles}
${mui}
`;
}
