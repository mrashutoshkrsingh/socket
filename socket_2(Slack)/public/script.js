const socket = io("http://localhost:9000");
var nsSocket = "";
// socket.on("connect", () => {
//   console.log(socket.id);
// });

socket.on("nsList", nsData => {
  //console.log(nsData);
  let namespacesDiv = document.querySelector(".namespaces");
  namespacesDiv.innerHTML = "";
  nsData.forEach(ns => {
    namespacesDiv.innerHTML += `<div class="namespace" ns=${
      ns.endpoint
    } ><img src="${ns.img}" /></div>`;
  });

  //Adding clickListener for each namespaces

  Array.from(document.getElementsByClassName("namespace")).forEach(nm => {
    //console.log(nm);
    nm.addEventListener("click", e => {
      let nsEndpoint = nm.getAttribute("ns");
      //console.log(`${nsEndpoint} is go`);

      joinNs(nsEndpoint);
    });
  });
  joinNs("/wiki");
});
