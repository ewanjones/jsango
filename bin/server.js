/*
 *  Run development server,
 *
 *  This module handles running a node express dev server.
 *
 */

const path = require('path')
const express = require('express');
const enrouten = require('express-enrouten');
const session = require('express-session')
const morgan = require('morgan')
const MongoStore = require('connect-mongo')(session);
const bodyParser = require('body-parser')


async function runDevServer(rootDir, config) {
    console.log('Running server..')

    const app = express();
    app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

    if (config.SESSION) {
        app.use(session({
            secret: config.SESSION.SECRET,
            name: config.SESSION.NAME || 'session',
            cookie: {
                // default to never expire
                expires: config.SESSION.EXPIRES || new Date(253402300000000),
                secure: false
            },
            store: new MongoStore({ url: config.SESSION.STORE_URL }),
        }))
    }

    app.use(bodyParser());
    app.use(express.static(config.STATIC_DIR));

    const routesPath = path.join(rootDir, config.ROUTES_DIR)
    app.use(enrouten({directory: routesPath}));

    app.listen(config.DEV_SERVER.PORT, () => {
        console.log(`Listening on port ${config.DEV_SERVER.PORT}!`)
    });
}


module.exports = {runDevServer}
