window.onload = function () {
  menuFunction();
};

var xmlDoc;
function menuFunction() {
  loadXML();
  xml = xmlDoc.getElementsByTagName("link");

  const menu = document.getElementById("menu");

  for (i = 0; i < xml.length; i++) {
    menu.innerHTML +=
      '<a href="' +
      xml[i].getAttribute("id") +
      '">' + '<span class="' + xml[i].getAttribute("class") + '">' + '</span>' + 
      xml[i].firstChild.nodeValue +
      "</a>";
  }
}

function loadXML() {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", "./xml/menu.xml", false);
  xmlHttp.send(null);
  xmlDoc = xmlHttp.responseXML;
}
