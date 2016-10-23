"use strict";

$(function () {

  //function to append guitar objects to html page
  var addGuitar = function addGuitar(guitar) {
    $("#guitarCatalogue").prepend("<li><h3>" + guitar.Make + "</h3> <h4>" + guitar.Model + "</h4> <img src=\"" + guitar.Picture + "\"/> <h5>Frets: " + guitar.Frets + "</h5> <h5>Colour: " + guitar.Colour + "</h5> <h5>Price: " + guitar.Price + "</h5><button class=\"update\" id=\"" + guitar._id + "\">Update</button><button class=\"delete\" id=\"" + guitar._id + "\">Delete</button></li>");
  };

  //index function to fetch all guitar objects
  var getGuitars = function getGuitars() {
    $.ajax({
      method: "GET",
      url: "http://localhost:8000/guitars"
    }).done(function (data) {
      console.log(data);
      $.each(data, function (index, guitar) {
        addGuitar(guitar);
      });
    });
  };

  getGuitars();

  //post function to add new guitars from form
  var createGuitar = function createGuitar(e) {
    e.preventDefault();
    $.ajax({
      method: "POST",
      url: "http://localhost:8000/guitars",
      data: $("form").serialize()
    }).done(function (data) {
      addGuitar(data);
    });
  };
  $("form").on("submit", createGuitar);

  //delete and remove function
  $('ul').on('click', ".delete", function () {
    var _this = this;

    $.ajax({
      method: "DELETE",
      url: "http://localhost:8000/guitars/" + this.id
    }).done(function (data) {
      console.log(data + " deleted");
      $(_this).parent().remove();
    });
  });

  //function to update/edit guitars
  $('ul').on('click', ".update", function () {
    var _this2 = this;

    $.ajax({
      method: "PUT",
      url: "http://localhost:8000/guitars/" + this.id,
      data: $("form").serialize()
    }).done(function (data) {
      $(_this2).parent().remove();
      addGuitar(data);
    });
  });
});