require('dotenv').config();
const strapi = require('@strapi/strapi');
dev = true
if (dev === true)
    strapi({"autoReload": { "enabled": true }}).start();
else
    strapi().start();