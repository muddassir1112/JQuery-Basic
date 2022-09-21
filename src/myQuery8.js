$(document).ready(function () {
  $("#sub").click(function () {
    var a = $("#first").val();
    var b = $("#last").val();
    if (a == "" && b == "") {
      $("#first").css("background-color", "Red");
      $('#first').focus(); // Focus method used 
      $("#first").keydown(function(){ // Keydown method is used to change the color of the field
        $("#first").css("background-color", "white");
      });
      $("#last").css("background-color", "Red");
       $("#last").keydown(function(){
        $("#last").css("background-color", "white");
       });
      
      alert("Field Can Not Be Empty");
    } else if (a == "") {
      $("#first").css("background-color", "Red");
      $("#first").keydown(function(){
        $("input").css("background-color", "white");
      });
      $('#first').focus();
      alert("Field Can Not Be Empty");
    } else if (b == "") {
      $("#last").css("background-color", "Red");
      $("#last").keydown(function(){
        $("#last").css("background-color", "white");
      });
      $('#last').focus();
      alert("Field Can Not Be Empty");
    }
  });
});
