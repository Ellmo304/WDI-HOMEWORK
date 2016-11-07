
// BONUS BONUS: Add restul routes

$(() => {

  var googleMap = googleMap || {};


  googleMap.getRestaurants = function () {
    $.get("http://localhost:3000/api/restaurants")
    .done(this.loopThroughRestaurants);
  };



  googleMap.addInfoWindow = function (restaurant, marker) {
    google.maps.event.addListener(marker, "click", () => {
      if (this.infowindow) {
        this.infowindow.close();
      }
      this.infowindow = new google.maps.InfoWindow({
        content: `<h1>${restaurant.name}</h1>
        <img src="${restaurant.image}"/>
        <p>${restaurant.description}</p>`
      });
      this.infowindow.open(this.map, marker);
    });
  };


  googleMap.mapSetup = function() {
    let canvas = document.getElementById("map-canvas");

    let mapOptions = {
      zoom:14,
      center: new google.maps.LatLng(51.522, -0.089),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(canvas, mapOptions);
    this.getRestaurants();

  };


  googleMap.createMarkerForRestaurant = (restaurant) => {
    let latLng = new google.maps.LatLng(restaurant.lat, restaurant.lng);
    let marker = new google.maps.Marker({
      position: latLng,
      map: googleMap.map,
      icon: "/images/marker.png"
    });
    googleMap.addInfoWindow(restaurant, marker);
  };


  googleMap.loopThroughRestaurants = (data) => {
    $.each(data.restaurants, (index, restaurant) => {
      googleMap.createMarkerForRestaurant(restaurant);
    });
  };


  $(googleMap.mapSetup.bind(googleMap));




  document.getElementById("locationButton").addEventListener("click", function(){
    navigator.geolocation.getCurrentPosition((position) => {
      let personsPosition = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      people.push(personsPosition);
      console.log(people);
      addMarker(personsPosition);
      setMapBounds(people);
    });
    showFriendForm();
  });






  });
