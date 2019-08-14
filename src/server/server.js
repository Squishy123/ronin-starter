const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

import RouteLoader from './modules/routeLoader';

let server = express();

// allow cross origin requests
server.use(cors());
// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
server.use(bodyParser.json());

(async function () {
    //load all routes
    let routeLoader = new RouteLoader(server, {
        dir: path.join(__dirname, '../app/routes'),
        verbose: true,
        watch: true,
        strict: false,
        binds: {
        },
    });
    await routeLoader.loadDir();

    server.listen(3000, function() {
        console.log(`${server.name} listening at http://localhost:3000`);
    });
})();