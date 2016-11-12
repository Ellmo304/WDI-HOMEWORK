angular.module('plantsApp')
  .controller('PlantsIndexController', PlantsIndexController)
  .controller('PlantsNewController', PlantsNewController)
  .controller('PlantsShowController', PlantsShowController)
  .controller('PlantsEditController', PlantsEditController);


PlantsIndexController.$inject = ['Plant'];
function PlantsIndexController(Plant) {
  const plantsIndex = this;

  plantsIndex.all= Plant.query();
}


PlantsNewController.$inject = ['Plant', '$state'];
function PlantsNewController(Plant, $state) {
  const plantsNew = this;

  plantsNew.plant = {};

  function plantsCreate() {
    Plant.save(plantsNew.plant, () => {
      $state.go('plantsIndex');
    });
  }
  this.plantsCreate = plantsCreate;
}


PlantsShowController.$inject = ['Plant', '$state'];
function PlantsShowController(Plant, $state) {
  const plantsShow = this;

  plantsShow.plant = Plant.get($state.params);

  function plantsDelete() {
    Plant.remove($state.params, () => {
      $state.go('plantsIndex');
    });
  }
  this.plantsDelete = plantsDelete;
}


PlantsEditController.$inject = ['Plant', '$state'];
function PlantsEditController(Plant, $state) {
  const plantsEdit = this;

  plantsEdit.plant = Plant.get($state.params);

  function plantsUpdate() {
    Plant.update(plantsEdit.plant, () => {
      $state.go('plantsShow', $state.params);
    });
  }
  this.plantsUpdate = plantsUpdate;
}
