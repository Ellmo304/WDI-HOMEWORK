const router = require("express").Router();
const usersController = require("../controllers/userscontroller.js");

router.route("/users")
  .get(usersController.index)
  .post(usersController.create);

router.route("/users/:id")
  .get(usersController.show)
  .put(usersController.update)
  .delete(usersController.delete);





module.exports = router;
