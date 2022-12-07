$(() => {});
function addingClothes() {
  let clothName = prompt("Cloth Name");
  if (clothName == "") {
    alert("Add the data");
  } else {
    $("#clothes").append(
      "<li><a href='#'>" +
        clothName +
        "</a><button onclick='addingMoreClothes()'>+</button></li>"
    );
  }
}
function addingMoreClothes(){
   let clothName = prompt("Cloth Name");
  if (clothName == "") {
    alert("Add the data");
  } else {
    $("#clothes").append(
      "<ul><li><a href='#'>" +
        clothName +
        "</li>"
    );
  }
}
function addingElectronics() {
  let electronicName = prompt("Electronic Name");
  if (electronicName == "") {
    alert("Add the data");
  } else {
    $("#electronics").append(
      "<li><a href='#'>" +
        electronicName +
        "</a><button onclick='addingMoreElectronics()'>+</button></li>"
    );
  }
}
function addingMoreElectronics(){
   let electronicName = prompt("electronic Name");
  if (electronicName == "") {
    alert("Add the data");
  } else {
    $("#electronics").append(
      "<ul><li><a href='#'>" +
        electronicName +
        "</li>"
    );
  }
}