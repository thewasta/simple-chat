const express = require('express'),
    http = require('http'),
    socketio = require('socket.io'),
    morgan = require('morgan'),
    {PORT, DIST_DIR} = require('./config/settings'),
    {router} = require('./route/route'),
    bodyparser = require('body-parser'),
    webpack = require('webpack'),
    webpackconfig = require('../webpack.config.js'),
    webpackdevmiddleware = require('webpack-dev-middleware'),
    app = express();

const {onConnect} = require('./io/index');

const server = http.createServer(app);
const io = socketio(server);

app.use(morgan('dev'));
app.use(webpackdevmiddleware(webpack(webpackconfig)));
app.use(bodyparser.urlencoded({extended: false}));

app.use(express.static(DIST_DIR));
app.use('*', router);

server.listen(PORT, () => console.log(`server on port ${PORT}`));

io.on('connection', onConnect);
