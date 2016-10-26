const router = require("express").Router();
const jwt = require("jsonwebtoken");
const secret = require('./tokens').secret;

const authController = require("../controllers/auth");
const usersController = require("../controllers/users");
const weaponsController = require("../controllers/weapons");

function secureRoute(req, res, next) {
  if(!req.headers.authorization) return res.status(401).json({ message: "Unauthorized"});
  let token = req.headers.authorization.replace("Bearer ", "");
  jwt.verify(token, secret, (err, payload) => {
    if(err) return res.status(401).json({message: "Unauthorized"});
    req.user = payload;
    next();
  });
}

//
//


router.route("/register")
  .post(authController.register);
router.route("/login")
  .post(authController.login);

router.route('/users')
  .all(secureRoute)
  .get(usersController.index);
router.route('/users/:id')
  .all(secureRoute)
  .get(usersController.show)
  .put(usersController.update)
  .delete(usersController.delete);


  router.route('/weapons')
    .all(secureRoute)
    .get(weaponsController.index)
    .post(weaponsController.create);

  router.route('/weapons/:id')
    .all(secureRoute)
    .get(weaponsController.show)
    .put(weaponsController.update)
    .delete(weaponsController.delete);

module.exports = router;
