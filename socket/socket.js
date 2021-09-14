let io;

module.exports = {
    init: httpServer => {
        io = require('socket.io')(httpServer,{
          pingTimeout: 60000,
          cors: {
            //origin: "http://localhost:8080",
            methods: ["GET", "POST"],
            origin: '*',
            origins: '*:*',
          }
        });
        return io;
    },
    getIO: () => {
        if (!io) {
            throw new Error('Socket.io not initialized!')
        }
        return io;
    }
};
