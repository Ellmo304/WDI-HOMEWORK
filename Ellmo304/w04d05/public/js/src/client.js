$(function() {

  console.log("JS loaded!");

  const addGuitar = (guitar) => {
    $("#guitarCatalogue").prepend(`<li><h5>${guitar.Make}</h5> <h6>${guitar.Model}</h6> <img src="${guitar.Picture}"/></li>`);
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













});
