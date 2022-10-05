var category;
$(document).ready(function(){
   C_Ul1 = () => {
    category = prompt("Enter The Category");
    if (category != "") {
      $("#subul1").append(
        "<li><a href='#'>" +
          category +
          "</a><input type='button' value='+' class='button1' onclick='C_Ul1()'></li>"
      );
    }
    else {
      alert("Add atleast one item");
    }
  }
  Tshirt_l1 = () => {
    category = prompt("Enter The Sub Category");
    if (category != "") {
      $("#l1").append(
        "<ul><li><a href='#'>" +
          category +
          "</a><input type='button' value='+' onclick='Tshirt_l1()'></li></ul>"
      );
    } else {
      alert("Add atleast one item");
    }
  }
   Trouser_l2 = () => {
    category = prompt("Enter The Sub Category");
    if (category != "") {
      $("#l2").append(
        "<ul><li><a href='#'>" +
          category +
          "</a><input type='button' value='+' onclick='Trouser_l2()'></li></ul>"
      );
    } else {
      alert("Add atleast one item");
    }
  }
  Elec_Ul2 = () => {
    category = prompt("Enter The Category");
    if (category != "") {
      $("#subul2").append(
        "<li><a href='#'>" +
          category +
          "</a><input type='button' value='+' onclick='Elec_Ul2()'></li>"
      );
    } else {
      alert("Add atleast one item");
    }
  }
  Mob_l3 = () => {
    category = prompt("Enter The Sub Category");
    if (category != "") {
      $("#l3").append(
        "<ul><li><a href='#'>" +
          category +
          "</a><input type='button' value='+' onclick='Mob_l3()'></li></ul>"
      );
    } else {
      alert("Add atleast one item");
    }
  }
   Tabs_l4 = () => {
    category = prompt("Enter The Sub Category");
    if (category != "") {
      $("#l4").append(
        "<ul><li><a href='#'>" +
          category +
          "</a><input type='button' value='+' onclick='Tabs_l4()'></li></ul>"
      );
    } else {
      alert("Add atleast one item");
    }
  }
});
