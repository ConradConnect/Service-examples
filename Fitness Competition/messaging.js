const mydaco = require('mydaco');
const fs = require('fs');
const Handlebars = require('handlebars');
const generator = require('generate-password');

const htmlTemplateInvite = {};
const textTemplateInvite = {};
const subjectTemplateInvite = {};

const htmlTemplateResult = {};
const textTemplateResult = {};
const subjectTemplateResult = {};

htmlTemplateInvite.en = Handlebars.compile(fs.readFileSync(__dirname + '/emailTemplates/invite/html_en.html', 'utf8'));
textTemplateInvite.en = Handlebars.compile(fs.readFileSync(__dirname + '/emailTemplates/invite/text_en.txt', 'utf8'));
subjectTemplateInvite.en = Handlebars.compile(fs.readFileSync(__dirname + '/emailTemplates/invite/subject_en.txt', 'utf8'));
htmlTemplateResult.en = Handlebars.compile(fs.readFileSync(__dirname + '/emailTemplates/result/html_en.html', 'utf8'));
textTemplateResult.en = Handlebars.compile(fs.readFileSync(__dirname + '/emailTemplates/result/text_en.txt', 'utf8'));
subjectTemplateResult.en = Handlebars.compile(fs.readFileSync(__dirname + '/emailTemplates/result/subject_en.txt', 'utf8'));

htmlTemplateInvite.de = Handlebars.compile(fs.readFileSync(__dirname + '/emailTemplates/invite/html_de.html', 'utf8'));
textTemplateInvite.de = Handlebars.compile(fs.readFileSync(__dirname + '/emailTemplates/invite/text_de.txt', 'utf8'));
subjectTemplateInvite.de = Handlebars.compile(fs.readFileSync(__dirname + '/emailTemplates/invite/subject_de.txt', 'utf8'));
htmlTemplateResult.de = Handlebars.compile(fs.readFileSync(__dirname + '/emailTemplates/result/html_de.html', 'utf8'));
textTemplateResult.de = Handlebars.compile(fs.readFileSync(__dirname + '/emailTemplates/result/text_de.txt', 'utf8'));
subjectTemplateResult.de = Handlebars.compile(fs.readFileSync(__dirname + '/emailTemplates/result/subject_de.txt', 'utf8'));

// staging: https://mydaco.conradconnect.de/testing/action/4c8bf2a0-be72-11e9-a649-575c9101f1f1/static/
const staticUrl = mydaco.getStaticFolderUrl();

function sendInvites(emails, key, { lang = 'en', competitionName, competitionAdminName, description }) {
    if (Array.isArray(emails)) {
        const publicKeys = emails.map(function (email) {
            return {
                id: 'invite_' + generator.generate({ length: 6, numbers: true }).toUpperCase(),
                email
            };
        });
        const promises = publicKeys.map(function (publicKey) {
            return mydaco.interface('KeyValueStore', 'putShared', {
                key: publicKey.id,
                value: {
                    email: publicKey.email,
                    key
                }
            })
        });
        const promises2 = publicKeys.map(function (publicKey) {
            const inviteKey = publicKey.id.substring('invite_'.length);
            const data = {
                competitionName,
                inviteKey,
                description,
                competitionAdminName,
                staticUrl,
            };
            return mydaco.interface('Messaging', 'sendEmailToAddresses', {
                subject: subjectTemplateInvite[lang](data),
                text: textTemplateInvite[lang](data),
                html: htmlTemplateInvite[lang](data),
                emailAddresses: [publicKey.email]
            })
        });
        return [...promises, ...promises2];
    }
    return [];
}

function sendResults(competitions) {
    const promises = competitions.map(function (comp) {
        const resultArray = [];
        
        Object.entries(comp.steps || {}).forEach(([name, value]) => {
            resultArray.push({
                name,
                steps: value.steps,
            });
        });

        resultArray.sort((a, b) => a.steps < b.steps ? 1 : -1);
        resultArray.map((obj, index) => {
            obj.place = index + 1;
        });

        const place = resultArray.findIndex(r => (r.name === comp.personName)) + 1;

        const lang = comp.lang || 'en';
        
        const data = {
            competitionName: comp.competitionName,
            personName: comp.personName,
            competitionAdminName: comp.adminNames[0],
            place,
            resultArray,
            staticUrl,
        };
        const parameters = {
            subject: subjectTemplateResult[lang](data),
            text: textTemplateResult[lang](data),
            html: htmlTemplateResult[lang](data),
        };
        
        return mydaco.interface('Messaging', 'sendEmail', parameters);
    });
    return Promise.all(promises);
}

module.exports = {
    sendInvites, sendResults
}