"use strict";
$(document).ready(function () {
  var category;

  $("#button1").click(function () {
    category = prompt("Enter The Category");
    if (category != "") {
      $("#subul1").append(
        "<li><a href='#'>" +
          category +
          "</a><input type='button' value='+'></li>"
      );
    } else {
      alert("Add atleast one item");
    }
  });
  $("#button2").click(function () {
    category = prompt("Enter The Sub Category");
    if (category != "") {
      $("#l1").append(
        "<ul><li><a href='#'>" +
          category +
          "</a><input type='button' value='+'></li></ul>"
      );
    } else {
      alert("Add atleast one item");
    }
  });

  $("#button3").click(function () {
    category = prompt("Enter The Sub Category");
    if (category != "") {
      $("#l2").append(
        "<ul><li><a href='#'>" +
          category +
          "</a><input type='button' value='+'></li></ul>"
      );
    } else {
      alert("Add atleast one item");
    }
  });
  $("#button4").click(function () {
    category = prompt("Enter The Category");
    if (category != "") {
      $("#subul2").append(
        "<li><a href='#'>" +
          category +
          "</a><input type='button' value='+'></li>"
      );
    } else {
      alert("Add atleast one item");
    }
  });
  $("#button5").click(function () {
    category = prompt("Enter The Sub Category");
    if (category != "") {
      $("#l3").append(
        "<ul><li><a href='#'>" +
          category +
          "</a><input type='button' value='+'></li></ul>"
      );
    } else {
      alert("Add atleast one item");
    }
  });

  $("#button6").click(function () {
    category = prompt("Enter The Sub Category");
    if (category != "") {
      $("#l4").append(
        "<ul><li><a href='#'>" +
          category +
          "</a><input type='button' value='+'></li></ul>"
      );
    } else {
      alert("Add atleast one item");
    }
  });
});
