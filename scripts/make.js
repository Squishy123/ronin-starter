const templates = require('./templates/make');
const fs = require('fs');
const camelCase = require('camelcase');


module.exports = (args) => {
    //null
    if (args[0] === 'make') {
        console.log(
            `Usage: ronin make:[cmd] [args]

Supported Commands: migration, model, route
`);
    }

    //make:migration
    if (args[0].includes('migration')) {
        if (!args[1])
            console.error("Error: No Name Specified.")

        let migration = templates.MAKE_MIGRATION;

        if (args[1].lastIndexOf('/') == -1) {
            migration = migration.replace(/%MIGRATION%/g, camelCase(args[1], { pascalCase: true }));
        } else {
            migration = migration.replace(/%MIGRATION%/g, camelCase(args[1].substr(args[1].lastIndexOf('/') + 1), { pascalCase: true }));
            if (!fs.existsSync(`./src/server/migrations/${args[1]}.js`)) {
                fs.mkdirSync(`./src/server/migrations/${camelCase(args[1]).substr(0, args[1].lastIndexOf('/'))}`);
            }
        }

        fs.writeFileSync(`./src/server/migrations/${camelCase(args[1], { pascalCase: true })}.js`, migration, { flag: 'wx' });
        console.log(`Migration Successfully Created!`)
    }

    //make:model
    if (args[0].includes('model')) {
        if (!args[1])
            console.error("Error: No Name Specified.")

        let model = templates.MAKE_MODEL;

        if (args[1].lastIndexOf('/') == -1) {
            model = model.replace(/%MODEL%/g, camelCase(args[1], { pascalCase: true }));
        } else {
            model = model.replace(/%MODEL%/g, camelCase(args[1].substr(args[1].lastIndexOf('/') + 1), { pascalCase: true }));
            if (!fs.existsSync(`./src/app/models/${args[1]}.js`)) {
                fs.mkdirSync(`./src/app/models/${camelCase(args[1]).substr(0, args[1].lastIndexOf('/'))}`);
            }
        }

        fs.writeFileSync(`./src/app/models/${camelCase(args[1], { pascalCase: true })}.js`, model, { flag: 'wx' });
        console.log(`Model Successfully Created!`)
    }
}