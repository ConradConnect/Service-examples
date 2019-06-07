
const {style} = require('./styling.js');

exports.de = function (displayName, lamps) {
    let html = `
        ${style}

<br>
<h1>Hallo ${displayName}</h1>
<br>
<p>Dein AUGLETICS Account ist jetzt verknüpft.</p>
`;
    if (lamps.length > 0) {
html += `
<p>Möchtest Du eine Lampe hinzufügen, welche dich an dein Training errinnert?
Liegt das letzte Training mehr als die von dir gesetzte Stundenanzahl zurück, fängt die Lampe um 18 Uhr an rot zu leuchten.
</p>
<h2>Lampen</h2>
<br>
`;
        lamps.forEach((l) => {
            html += `
<input type="radio" name="lamps" value="${l.id}" required> ${l.name}<br>
            `;
        });
        html += `
<br>
<p>Nach wie wie vielen Stunden möchtest du eine Errinerung bekommen?</p>
<input type="text" name="hours" placeholder="Stunden" value="">
<br>
<input type="button" onclick="sendInputs()" value="Weiter"/>
        `;
    } else {
        html += `
<p>Du kannst den Service durch Verknüpfung einer smarten Lampe erweitern. Sie wird dich ans Trainieren errinnern.</p>
<input type="button" onclick="closeWindow()" value="Schließen" />
`;
    }
    return html;
};

exports.en = function (displayName, lamps) {
    let html = `
 ${style}

<br>
<h1>Hello ${displayName}</h1> 
<br>
<p>Your AUGLETICS account is connected now.</p>
`;
    if (lamps.length > 0) {
html += `
<p>Do you want to add a lamp, that reminds you to exercise?
The light will turn on and red every day at 6 pm, if you haven't exercises for the amount of hours you insert here.
</p>
<h2>Lamps</h2>
<br>
`;
        lamps.forEach((l) => {
            html += `
<input type="radio" name="lamps" value="${l.id}" required> ${l.name}<br>
            `;
        });
        html += `
<br>
<p>After how many hours do you want to get a reminder?</p>
<input type="text" name="hours" placeholder="Hours" value="">
<br>
<input type="button" onclick="sendInputs()" value="Continue"/>
        `;
    } else {
        html += `
<p>You can extend this service by adding a smart light to your account. It will remind you to exercise.</p>
<input type="button" onclick="closeWindow()" value="Close" />
`;
    }
    return html;
};