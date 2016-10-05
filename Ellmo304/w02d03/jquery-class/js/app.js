$(function() {
  var instructionalTeam = [{
    firstname: "Will",
    lastname: "Cook",
    role: "TA"
  },{
    firstname: "Emily",
    lastname: "Isacke",
    role: "TA"
  },{
    firstname: "Mike",
    lastname: "Hayden",
    role: "Instructor"
  },{
    firstname: "Matt",
    lastname: "Calthrop",
    role: "Instructor"
  }];

  var $ul = $('ul');

  // console.log(instructionalTeam);
  $.each(instructionalTeam, function(i, teamMember){
    // console.log(i);
    // console.log(teamMember);
    $ul.append('<li><h3>' + teamMember.firstname + " " + teamMember.lastname +'</h3><p>' +  teamMember.role + '</p></li>');
  });
});
