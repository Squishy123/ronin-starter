const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');


let server = express();

// allow cross origin requests
server.use(require('cors'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
server.use(bodyParser.json());


(async function() {
    //load all routes
    let routeLoader = new RouteLoader(server, {
        dir: path.join(__dirname, '../app/routes'),
        verbose: true,
        strict: false,
        binds: {
        },
    });
    await routeLoader.loadDir();

});