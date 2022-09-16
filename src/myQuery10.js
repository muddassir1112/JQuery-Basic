$(document).ready(function () {
  $("#sel").click(function () {
    var a = $("#sel").val();
    if (a == 0) {
      $("#price1").text(1000);
    } else if (a == 1) {
      $("#price1").text(2000);
    } else if (a == 2) {
      var b = $("#price1").val();

      $("#price1").text(3000);
    }
  });
  $("#sel1").click(function () {
    var c = $("#sel1").val();
    if (c == 3) {
      $("#price2").text(1550);
    } else if (c == 4) {
      $("#price2").text(1800);
    } else if (c == 5) {
      $("#price2").text(2200);
    }
  });
  $('table tr:odd').css("background-color","LightGrey");
});
