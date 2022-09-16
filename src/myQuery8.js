$(document).ready(function () {
  $("#sub").click(function () {
    var a = $("#first").val();
    var b = $("#last").val();
    if (a == "" && b == "") {
      $("#first").css("background-color", "Red");
      $("#last").css("background-color", "Red");
      alert("Field Can Not Be Empty");
    } else if (a == "") {
      $("#first").css("background-color", "Red");
      alert("Field Can Not Be Empty");
    } else if (b == "") {
      $("#last").css("background-color", "Red");
      alert("Field Can Not Be Empty");
    }
  });
});
