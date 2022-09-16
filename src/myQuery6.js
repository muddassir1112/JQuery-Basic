$(document).ready(function(){
  $('#ev').click(function(){
    $('table tr:even').css('background-color','LightGrey');
  })
  $('#od').click(function(){
    $('table tr:odd').css('background-color','DodgerBlue');
  })
});