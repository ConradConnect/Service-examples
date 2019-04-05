const {styles} = require('../css/styles.js');
const {mui} = require('../css/mui.js');
exports.widgetTemplate = function widgetTemplate(obj) {
    return `
<div class="widget-padding">
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
            <p class="preview-value">$ ${obj.data['latestPrice']}</p>
        </div>
        <div class="mui-col-xs-4 stock-grid">
            <p class="preview-title">${obj.translations.change}</p>
            <p class="preview-value ${obj.data['change'] < 0 ? 'color-red' : 'color-green'}">$ ${obj.data['change']}</p>
        </div>
        <div class="mui-col-xs-4 stock-grid">
            <p class="preview-title">${obj.translations.changePercent}</p>
            <p class="preview-value ${obj.data['changePercent'] < 0 ? 'color-red' : 'color-green'}">${obj.data['changePercent']}%</p>
        </div>
        <div class="mui-col-xs-4 stock-grid">
            <p class="preview-title">${obj.translations.volume}</p>
            <p class="preview-value">${obj.data['latestVolume'] ? obj.data['latestVolume'] : obj.data['iexVolume']}</p>
        </div>
        <div class="mui-col-xs-4 stock-grid">
            <p class="preview-title">${obj.translations.open}</p>
            <p class="preview-value">$ ${obj.data['open'] ? obj.data['open'] : obj.data['previousClose']}</p>
        </div>
        <div class="mui-col-xs-4 stock-grid">
            <p class="preview-title">${obj.translations.previousClose}</p>
            <p class="preview-value">$ ${obj.data['close'] ? obj.data['close'] : obj.data['previousClose']}</p>
        </div>
        <div class="mui-col-xs-4 stock-grid">
            <p class="preview-title">${obj.translations.high}</p>
            <p class="preview-value">$ ${obj.data['high'] ? obj.data['high'] : obj.data['latestPrice']}</p>
        </div>
        <div class="mui-col-xs-4 stock-grid">
            <p class="preview-title">${obj.translations.low}</p>
            <p class="preview-value">$ ${obj.data['low'] ? obj.data['low'] : obj.data['latestPrice']}</p>
        </div>
        <div class="mui-col-xs-4 stock-grid">
            <p class="preview-title">${obj.translations.latestTradingDay}</p>
            <p class="preview-value">${obj['latestTradingDay']}</p>
        </div>
    </div>
</div>
${styles}
${mui}
`;
}
