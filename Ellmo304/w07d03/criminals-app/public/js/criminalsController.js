angular.module('criminalsApp')
  .controller('CriminalsController', CriminalsController);


CriminalsController.$inject = ['$http'];
function CriminalsController($http) {
  const criminals = this;
  criminals.all = [];
  criminals.addCriminal = addCriminal;
  criminals.removeCriminal = removeCriminal;
  criminals.newCriminal = {};



  function getCriminals() {
    $http.get('/criminals')
    .then((res) => {
      criminals.all = res.data;
    });
  }


  function addCriminal() {
    $http.post('/criminals', criminals.newCriminal)
    .then((res) => {
      criminals.all.push(res.data);
      criminals.newCriminal = {};
    })
    .catch(() => {
      console.log('Something went wrong!');
    });
  }

  function removeCriminal(criminalId, $index) {
    $http.delete(`/criminals/${criminalId}`)
      .then(() => {
        criminals.all.splice($index, 1);
      });
  }


  getCriminals();
}
