const {styles} = require('../css/styles.js');
const {mui} = require('../css/mui.js');
exports.serviceTemplate = function serviceTemplate(obj) {
    return `
<div class="main-wrapper">
    <div class="userInputs mui-col-xs-12 mui-col-md-5">
        <p class="welcomeText">${obj.translations.welcomeText}</p>
        <form class="mui-form stock-form">
            <p class="form-title">${obj.translations.apiKeyTitle}</p>
            <div class="mui-textfield ${obj.error.type === 'empty' ? 'form-error' : ''} custom">
                <input name="apiKey" type="text" value="${obj.inputs && obj.inputs.apiKey ? obj.inputs.apiKey : ''}" placeholder="${obj.translations.apiKey}">
                <a class="api-key" href="https://www.alphavantage.co/support/#api-key" target="_blank">${obj.translations.apiKeyLink}</a>
            </div>
            <p class="form-title custom-margin">${obj.translations.companyIndexTitle}</p>
            <div class="mui-select custom ${obj.error.type === 'empty' ? 'form-error' : ''}">
                <select name="stockName" class="label">
                    <option value="" selected disabled>${obj.translations.companyIndex}</option>
                    ${obj.stockNames.map(item => `<option ${obj.inputs && obj.inputs.stockName === item.title ? 'selected' : ''} value="${item.title}">${item.selectKey}</option>`).join('')}
                </select>
            </div>
            ${obj.devices !== undefined && obj.devices.length !== 0  ? 
                `<div>
                    <p class="form-title">${obj.translations.amountTitle}</p>
                    <div class="mui-textfield custom ${obj.error.type === 'empty' || obj.error.type === 'threshold' ? 'form-error' : ''}">
                        <input name="threshold" type="text" placeholder="${obj.translations.amount}" value="${obj.inputs && obj.inputs.threshold ? obj.inputs.threshold : ''}">
                    </div>
                    <p class="form-title">${obj.translations.devicesTitle}</p>
                    <div class="mui-select custom ${obj.error.type === 'empty' ? 'form-error' : ''}">
                        <select name="device" class="label">
                        <option value="" disabled selected>${obj.translations.device}</option>
                        ${obj.devices && obj.devices.map(item => `<option ${obj.inputs && obj.inputs.device === item.id ? 'selected' : ''} value="${item.id}">${item.name}</option>`).join('')}
                        </select>
                    </div>
                </div>`
                :
                `<p class="form-title">You have no supported devices. You can preview stock data on the widget in dashboard</p>`
            }
                    
        </form>
    </div>
    <div class="preview mui-col-xs-12 mui-col-md-6 mui-col-md-offset-1">
        <div class="mui-row">
            <div class="mui-col-xs-12">
                <p class="preview-summary">${obj.translations.summary}</p>
            </div>
        </div>
        <div class="mui-row">
            <div class="mui-col-xs-12">
                <p class="error">${obj.error.message}</p>
            </div>
        </div>
        <input type="button" class="send-button mui--align-bottom" onclick="sendInputs()" 
        value="${obj.translations.subscribe}"></input>
    </div>
    <div class="clear-float"></div>
</div>
${styles}
${mui}
`;
}
