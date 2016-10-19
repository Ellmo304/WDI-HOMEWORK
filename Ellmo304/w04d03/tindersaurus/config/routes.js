const router = require("express").Router();
const tindersaurusController = require("../controllers/tindersaurus-controller");


//home
router.get("/", (req, res) => res.render("home"));



//index and create
router.route("/tinder/index")
  .get(tindersaurusController.index)
  .post(tindersaurusController.create);

//new
router.get("/tinder/new", tindersaurusController.new);

//show update and delete
router.route("/tinder/:id")
  .get(tindersaurusController.show)
  .put(tindersaurusController.update)
  .delete(tindersaurusController.delete);

  //edit
  router.get("/tinder/index/:id/edit", tindersaurusController.edit);

  module.exports = router;
