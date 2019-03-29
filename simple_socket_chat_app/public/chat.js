//Make connection
var socket = io("http://localhost:8000");

//DOM query
var message = document.getElementById("message"),
  handle = document.getElementById("handle"),
  btn = document.getElementById("send"),
  output = document.getElementById("output"),
  feedback = document.getElementById("feedback");

//event emit
btn.addEventListener("click", e => {
  socket.emit("chat", {
    message: message.value,
    handle: handle.value
  });
});

message.addEventListener("keypress", () => {
  socket.emit("typing", handle.value);
});

//Listen for events
socket.on("chat", data => {
  feedback.innerHTML = "";
  output.innerHTML +=
    "<p><strong>" + data.handle + ": </strong>" + data.message + "</p>";
  message.value = "";
});

socket.on("typing", data => {
  feedback.innerHTML = "<p><em>" + data + " is typing a message...</em></p>";
});
