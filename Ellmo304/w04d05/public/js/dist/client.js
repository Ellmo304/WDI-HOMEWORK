"use strict";

$(function () {

  console.log("JS loaded!");

  var addGuitar = function addGuitar(guitar) {
    $("#guitarCatalogue").prepend("<li><h5>" + guitar.Make + "</h5> <h6>" + guitar.Model + "</h6> <img src=\"" + guitar.Picture + "\"/></li>");
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