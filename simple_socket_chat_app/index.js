var express = require("express");
var app = express();
var socket = require("socket.io");
//Static files
app.use(express.static("public"));

//listening to server
socketServer = app.listen(8000, () => {
  console.log("Express Server started at port 8000");
});

//Socket Setup
var io = socket(socketServer);

io.on("connection", function(socket) {
  console.log("Made Socket Connection", socket.id);

  socket.on("chat", data => {
    io.sockets.emit("chat", data);
  });

  socket.on("typing", data => {
    socket.broadcast.emit("typing", data);
  });
});
