if(!process.env.NODE_EXTRA_CA_CERTS) return;

const https = require('https');
const tls = require('tls');
const fs = require('fs');

// Diviser la chaîne des chemins de certificats en tableau, lire chaque certificat
const list = (process.env.NODE_EXTRA_CA_CERTS || '').split(',');
const additionalCerts = list.map(extraCert => fs.readFileSync(extraCert, 'utf8'));

// Étendre les certificats racines par défaut avec les certificats supplémentaires
https.globalAgent.options.ca = [
    ...tls.rootCertificates,
    ...additionalCerts
];