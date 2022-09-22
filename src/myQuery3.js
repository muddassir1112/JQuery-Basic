$(document).ready(function() {
  $(".table").click(function(event){
    let str =
      "<br> <div><input type='text' placeholder='Enter Class'> <input type='text' placeholder='Enter Board'> <input type='text' placeholder='Enter Marks'>  <input type='text' placeholder='Enter Division'> <button class='add'>+</button>  <button class='rmvRow'>-</button> </div>";
    if (event.target.className == "add") {
      $(event.target.parentNode).after(str);
    }
    if (event.target.className == "rmvRow") {
      $(event.target.parentElement).hide();
    }
  });
});
