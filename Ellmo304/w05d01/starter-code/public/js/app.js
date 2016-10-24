"use strict";

// BONUS BONUS: Add restul routes

$(function () {

  var googleMap = googleMap || {};

  googleMap.getRestaurants = function () {
    $.get("http://localhost:3000/api/restaurants").done(this.loopThroughRestaurants);
  };

  googleMap.addInfoWindow = function (restaurant, marker) {
    var _this = this;

    google.maps.event.addListener(marker, "click", function () {
      if (_this.infowindow) {
        _this.infowindow.close();
      }
      _this.infowindow = new google.maps.InfoWindow({
        content: "<h1>" + restaurant.name + "</h1>\n        <img src=\"" + restaurant.image + "\"/>\n        <p>" + restaurant.description + "</p>"
      });
      _this.infowindow.open(_this.map, marker);
    });
  };

  googleMap.mapSetup = function () {
    var canvas = document.getElementById("map-canvas");

    var mapOptions = {
      zoom: 14,
      center: new google.maps.LatLng(51.522, -0.089),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(canvas, mapOptions);
    this.getRestaurants();
  };

  googleMap.createMarkerForRestaurant = function (restaurant) {
    var latLng = new google.maps.LatLng(restaurant.lat, restaurant.lng);
    var marker = new google.maps.Marker({
      position: latLng,
      map: googleMap.map,
      icon: "/images/marker.png"
    });
    googleMap.addInfoWindow(restaurant, marker);
  };

  googleMap.loopThroughRestaurants = function (data) {
    $.each(data.restaurants, function (index, restaurant) {
      googleMap.createMarkerForRestaurant(restaurant);
    });
  };

  $(googleMap.mapSetup.bind(googleMap));

  document.getElementById("locationButton").addEventListener("click", function () {
    navigator.geolocation.getCurrentPosition(function (position) {
      var latLng = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      googleMap.map.panTo(latLng);
      googleMap.map.setZoom(14);
      var marker = new google.maps.Marker({
        position: latLng,
        animation: google.maps.Animation.DROP,
        draggable: true,
        map: googleMap.map
      });
    });
  });
});