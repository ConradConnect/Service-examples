
const {style} = require('./styling.js');

exports.de =  `
${style}       
<div role="main" class="ui-content" style="background: white">

    <img src="static/Augletics_de.png" style="width: 100%" />
    <br>
    <p>Die AUGLETICS Rudergeräte zeichnen sich vor allem durch ihre Konnectivität aus. Da ist der Schritt zu Conrad
        Connect nur schlüssig. Im Dashboard siehst du deine letzten Trainingsergebnisse und wenn du magst, kannst du
        sogar deine Beleuchtung zuhause abhängig von deiner Ruderqualität ansteuern.</p>



    <h2>Augletics Login</h2>

    <p>Für den Servie benötigst du einen AUGLETICS Account und natürlich ein AUGLETICS Ruderergometer. Mehr dazu findest
        du unter <b>www.augletics.de</b></p>
    <label for="email" class="ui-hidden-accessible">Email</label>
    <br>
    <input type="text" name="email" value="" id="textinput-4" placeholder="Email" value="">
    <br>
    <label for="password" class="ui-hidden-accessible">Passwort</label>
    <br>
    <input type="password" name="password" value="" id="textinput-4" placeholder="Passwort" value="">

    <br>
    <input type="button" onclick="sendInputs()" value="Login" />
</div>
`;

exports.deWrong = `
${style}      
<div role="main" class="ui-content" style="background: white">

    <img src="static/Augletics_de.png" style="width: 100%" />
    <br>
    <p>Die AUGLETICS Rudergeräte zeichnen sich vor allem durch ihre Konnectivität aus. Da ist der Schritt zu Conrad
        Connect nur schlüssig. Im Dashboard siehst du deine letzten Trainingsergebnisse und wenn du magst, kannst du
        sogar deine Beleuchtung zuhause abhängig von deiner Ruderqualität ansteuern.</p>

    <h2>Augletics Login</h2>

    <p>Für den Servie benötigst du einen AUGLETICS Account und natürlich ein AUGLETICS Ruderergometer. Mehr dazu findest
        du unter <b>www.augletics.de</b></p>
    <p style="color:red">Die Email-Adresse oder das Passwort waren leider falsch.</p>
    <label for="email" class="ui-hidden-accessible">Email</label>
    <br>
    <input type="text" name="email" value="" id="textinput-4" placeholder="Email" value="">
    <br>
    <label for="password" class="ui-hidden-accessible">Passwort</label>
    <br>
    <input type="password" name="password" value="" id="textinput-4" placeholder="Passwort" value="">

    <br>
    <input type="button" onclick="sendInputs()" value="Login" />
</div>
`;

exports.en = `
${style}      
<div role="main" class="ui-content" style="background: white">

    <img src="static/Augletics_en.png" style="width: 100%" />
    <br>
    <p>The AUGLETICS rowing machines are characterized above all by their connectivity. The step to Conrad Connect is
        only conclusive. In the dashboard you can see your latest training results and if you like, you can even control
        your lighting at home depending on your rowing quality.</p>

    <h2>Augletics Login</h2>

    <p>For the service you need an AUGLETICS account and of course an AUGLETICS rowing ergometer. You can find out more
        at <b>www.augletics.de</b></p>
    <label for="email" class="ui-hidden-accessible">Email</label>
    <br>
    <input type="text" name="email" value="" id="textinput-4" placeholder="Email" value="">
    <br>
    <label for="password" class="ui-hidden-accessible">Password</label>
    <br>
    <input type="password" name="password" value="" id="textinput-4" placeholder="Password" value="">

    <br>
    <input type="button" onclick="sendInputs()" value="Login" />
</div>
`;

exports.enWrong = `
${style}
<div role="main" class="ui-content" style="background: white">

    <img src="static/Augletics_en.png" style="width: 100%" />
    <br>
    <p>The AUGLETICS rowing machines are characterized above all by their connectivity. The step to Conrad Connect is
        only conclusive. In the dashboard you can see your latest training results and if you like, you can even control
        your lighting at home depending on your rowing quality.</p>

    <h2>Augletics Login</h2>

    <p>For the service you need an AUGLETICS account and of course an AUGLETICS rowing ergometer. You can find out more
        at <b>www.augletics.de</b></p>
    <p style="color:red">The email address or password was wrong.</p>
    <label for="email" class="ui-hidden-accessible">Email</label>
    <br>
    <input type="text" name="email" value="" id="textinput-4" placeholder="Email" value="">
    <br>
    <label for="password" class="ui-hidden-accessible">Password</label>
    <br>
    <input type="password" name="password" value="" id="textinput-4" placeholder="Password" value="">

    <br>
    <input type="button" onclick="sendInputs()" value="Login" />
</div>

`;