const path = require('path'),
    dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT;
const DIST_DIR = path.join(__dirname, '..', '..', 'public');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

module.exports.PORT = PORT;
module.exports.DIST_DIR = DIST_DIR;
module.exports.HTML_FILE = HTML_FILE;