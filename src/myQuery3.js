$(document).ready(function () {
  $("#addRow").click(function () {
    $("table").append( // To add a new row in a table
      ' <tr id = "del"><td><input type="text"  placeholder="Enter Class"> <input type="text"  placeholder="Enter Board"> <input type="text" placeholder="Enter Marks"> <input type="text"  placeholder="Enter Division"> <input type="button" value="+" id="addRow"> <input type="button" value="-" id="deleteRow"></td></tr>'
    );
  });
  $("#deleteRow").click(function () { // To delete the newly added row
    $("#del").remove();
  });
});
