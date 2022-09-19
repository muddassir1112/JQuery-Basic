$(document).ready(function () {
  $("#input2").keyup(function () {
    var pass = $("#input1").val();
    var conPass = $("#input2").val();
    if (pass == conPass) {
      $("p").text("Password Match");
    } else {
      $("p").text("Password Not Match");
    }
  });
});
