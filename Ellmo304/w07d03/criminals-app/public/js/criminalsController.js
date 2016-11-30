angular.module('foodApp')
  .controller('FoodsController', FoodsController);


FoodsController.$inject = ['Food', '$state', '$auth'];
function FoodsController(Food, $state, $auth) {
  const foods = this;
  foods.all = Food.query();
  foods.addFood = addFood;
  foods.removeFood = removeFood;
  foods.newFood = {};



  function getFoods() {
    $http.get('/foods')
    .then((res) => {
      foods.all = res.data;
    });
  }


  function addFood() {
    $http.post('/foods', foods.newFood)
    .then((res) => {
      foods.all.push(res.data);
      foods.newFood = {};
    })
    .catch(() => {
      console.log('Something went wrong!');
    });
  }

  function removeFood(foodId, $index) {
    $http.delete(`/foods/${foodId}`)
      .then(() => {
        foods.all.splice($index, 1);
      });
  }


  getFoods();
}
