$(document).ready(function(){
    $("#addRow").click(function(){
        var clas = $("#class").val();
        var board = $("#board").val();
        var marks = $("#marks").val();
        var division = $("#div").val();
        var table = "<tr><td><input type='checkbox' name='record'></td><td>" + name + "</td><td>" + email + "</td></tr>";
        $("table tbody").append(markup);
    });