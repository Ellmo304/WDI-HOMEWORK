"use strict";

$(function () {

  console.log("JS loaded!");

  var addGuitar = function addGuitar(guitar) {
    $("#guitarCatalogue").prepend("<li><h3>" + guitar.Make + "</h3> <h4>" + guitar.Model + "</h4> <img src=\"" + guitar.Picture + "\"/> <h5>Frets: " + guitar.Frets + "</h5> <h5>Colour: " + guitar.Colour + "</h5> <h5>Price: " + guitar.Price + "</h5></li>");
  };

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
});