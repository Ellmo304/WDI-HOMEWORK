const router = require("express").Router();
const guitarController = require("../controllers/guitarcontroller.js");


router.route("/guitars")
  .get(guitarController.index)
  .post(guitarController.create);

router.route("/guitars/:id")
  .get(guitarController.show)
  .put(guitarController.update)
  .delete(guitarController.delete);

module.exports = router;
