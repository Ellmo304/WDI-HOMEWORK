$(function() {

//function to append guitar objects to html page
  const addGuitar = (guitar) => {
    $("#guitarCatalogue").prepend(`<li><h3>${guitar.Make}</h3> <h4>${guitar.Model}</h4> <img src="${guitar.Picture}"/> <h5>Frets: ${guitar.Frets}</h5> <h5>Colour: ${guitar.Colour}</h5> <h5>Price: ${guitar.Price}</h5><button class="update" id="${guitar._id}">Update</button><button class="delete" id="${guitar._id}">Delete</button></li>`);
  };


//index function to fetch all guitar objects
  const getGuitars = () => {
    $.ajax({
      method: "GET",
      url: "http://localhost:8000/guitars"
    })
    .done((data) => {
      console.log(data);
      $.each(data, (index, guitar) => {
        addGuitar(guitar);
      });
    });
  };

getGuitars();


//post function to add new guitars from form
const createGuitar = (e) => {
  e.preventDefault();
  $.ajax({
    method: "POST",
    url: "http://localhost:8000/guitars",
    data: $("form").serialize()
  }).done((data) => {
    addGuitar(data);
  });
};
  $("form").on("submit", createGuitar);


//delete and remove function
$('ul').on('click', ".delete", function() {
  $.ajax({
    method: "DELETE",
    url: `http://localhost:8000/guitars/${this.id}`,
  }).done((data) => {
    console.log(data + " deleted");
    $(this).parent().remove();
  });
});

//function to update/edit guitars
$('ul').on('click', ".update", function() {
  $.ajax({
    method: "PUT",
    url: `http://localhost:8000/guitars/${this.id}`,
    data: $("form").serialize()
  }).done((data) => {
    $(this).parent().remove();
    addGuitar(data);
  });
});






});
