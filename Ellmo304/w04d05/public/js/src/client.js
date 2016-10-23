$(function() {

  console.log("JS loaded!");




  const addGuitar = (guitar) => {
    $("#guitarCatalogue").prepend(`<li><h3>${guitar.Make}</h3> <h4>${guitar.Model}</h4> <img src="${guitar.Picture}"/> <h5>Frets: ${guitar.Frets}</h5> <h5>Colour: ${guitar.Colour}</h5> <h5>Price: ${guitar.Price}</h5></li>`);
  };




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






});
