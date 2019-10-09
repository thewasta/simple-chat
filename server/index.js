const express = require('express'),
    http = require('http'),
    socketio = require('socket.io'),
    morgan = require('morgan'),
    bodyparser = require('body-parser'),
    webpack = require('webpack'),
    webpackdevmiddleware = require('webpack-dev-middleware'),
    app = express(),
    webpackconfig = require('../webpack.config.js'),
    {PORT, DIST_DIR} = require('./config/settings'),
    {router} = require('./route/route'),
    server = http.createServer(app),
    io = socketio(server),
    {onConnect} = require('./io/index');

app.use(morgan('dev'));
app.use(webpackdevmiddleware(webpack(webpackconfig)));
app.use(bodyparser.urlencoded({extended: false}));

app.use(express.static(DIST_DIR));
app.use('*', router);

server.listen(PORT, () => console.log(`server on port ${PORT}`));

io.on('connection', onConnect);
