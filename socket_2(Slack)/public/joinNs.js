function joinNs(endpoint) {
  nsSocket = io(`http://localhost:9000${endpoint}`);
  nsSocket.on("nsRoomLoad", nsRooms => {
    //console.log("ns", nsRooms);
    let roomList = document.querySelector(".room-list");
    roomList.innerHTML = "";
    nsRooms.forEach(room => {
      let glyph;
      if (room.privateRoom) glyph = "lock";
      else glyph = "globe";
      roomList.innerHTML += `<li class="room"><span class="glyphicon-${glyph}"></span>${
        room.roomTitle
      }</li>`;
    });
    joinRoom(document.querySelector(".room").innerText);
    Array.from(document.getElementsByClassName("room")).forEach(elm => {
      elm.addEventListener("click", e => {
        //console.log("Someoneclicked");
        //console.log(elm.innerText);
        joinRoom(elm.innerText);
      });
    });
  });
}
