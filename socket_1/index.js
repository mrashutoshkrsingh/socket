const express = require("express");
const app = express();
const socketio = require("socket.io");

app.use(express.static(__dirname + "/public"));

const expressServer = app.listen(9000);

const io = socketio(expressServer);

io.on("connection", socket => {
  socket.emit("messageFromServer", { data: "This is the message from server" });

  socket.on("dataToServer", dataFromClient => {
    console.log(dataFromClient);
  });

  socket.on("newMessageToServer", newMessageFromClient => {
    //console.log(newMessageFromClient);
    io.emit("messageToClients", { text: newMessageFromClient.text });
  });
});
