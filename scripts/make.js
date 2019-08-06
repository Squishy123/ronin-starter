const templates = require('./templates/make');
const fs = require('fs');
const camelCase = require('camelcase');


module.exports = (args) => {
    if (args[0] === 'make') {
        console.log(
            `Usage: ronin make:[cmd] [args]

Supported Commands: migration, model, route
`);
    }
    if (args[0].includes('migration')) {
        if (!args[1])
            console.error("Error: No Name Specified.")
    }

    let migration = templates.MAKE_MIGRATION;

    if (args[1].lastIndexOf('/') == -1) {
        migration = migration.replace(/%MIGRATION%/g, camelCase(args[1], { pascalCase: true }));
    } else {
        migration = migration.replace(/%MIGRATION%/g, camelCase(args[1].substr(args[1].lastIndexOf('/') + 1), { pascalCase: true }));
        if (!fs.existsSync(`./src/server/migrations/${args[1]}.js`)) {
            fs.mkdirSync(`./src/server/migrations/${camelCase(args[1]).substr(0, args[1].lastIndexOf('/'))}`);
        }
    }

    console.log(`Making Migration ${args[1]}`);
    fs.writeFileSync(`./src/server/migrations/${args[1]}.js`, migration, { flag: 'wx' });
    console.log(`Migration Successfully Created!`)
}