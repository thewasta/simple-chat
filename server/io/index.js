function onConnect(socket) {
    console.log(`new connection from ${socket.id}`);
}

module.exports.onConnect = onConnect;