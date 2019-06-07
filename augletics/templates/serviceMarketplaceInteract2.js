exports.de = function(hours) {
    let html = '';
    if (hours) {
        html += `
<p>Dein Service ist jetzt konfiguriert.</p>
<p>Du wirst nach ${hours} Stunden an Dein Training errinnert werden.</p>
        `;
    } else  {
        html += `
<p>Augrund von Fehlangaben, wurde der Service nicht konfiguriert.</p>
        `;
    }
    html += `
<input type="button" onclick="closeWindow()" value="Schliessen" />
`;
    return html;
};

exports.en = function(hours) {
    let html = '';
    if (hours) {
        html += `
<p>Your service is configured now.</p>
<p>You will get a reminder after ${hours} hours of not training.</p>
        `;
    } else  {
        html += `
<p>Some input was wrong. Please start the configuration process again.</p>
        `;
    }
    html += `
<input type="button" onclick="closeWindow()" value="Close" />
`;
    return html;
};