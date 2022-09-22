$(document).ready(function () {
  $("#input2").keyup(function () {
    var pass = $("#input1").val();
    var conPass = $("#input2").val();
    $("p").text("Password Not Match").css("color", "red").hide();

    if (pass == conPass) {
      $("p").text("Password Match").css("color", "black").show();
    } else if (conPass == "") {
      $("p").text("Password Not Match").css("color", "red").hide();
    } else if (pass != conPass) {
      $("p").text("Password Not Match").css("color", "red").show();
    }
  });
  $("#input1").keyup(function () {
    var pass = $("#input1").val();
    var conPass = $("#input2").val();
    if (pass == "" || conPass == "") {
      $("p").text("Password Match").css("color", "black").hide();
    } else if (conPass != pass) {
      $("p").text("Password Not Match").css("color", "red").show();
    } else if (conPass == pass) {
      $("p").text("Password Match").css("color", "black").show();
    }
  });
});
