const express = require("express");

const jwt = require("jsonwebtoken");
const router = express.Router();
const authController = require("../controllers/auth.js");
const beersController = require('../controllers/beers');
const secret = require("./tokens.js").secret;



function secureRoute(req, res, next) {
  if(!req.headers.authorization) return res.status(401).json({message: "Unauthorized!!!!"});

  let token = req.headers.authorization.replace("Bearer ", "");

  jwt.verify(token, secret, (err, payload) => {
    if(err) return res.status(401).json({message: "Unauthorized!!!!"});

    req.user = payload;
    next();
  });
}

router.route("/register")
.post(authController.register);
router.route("/login")
.post(authController.login);


router.route('/beers')
.all(secureRoute)
  .get(beersController.index)
  .post(beersController.create);

router.route('/beers/:id')
  .all(secureRoute)
  .get(beersController.show)
  .put(beersController.update)
  .delete(beersController.delete);

module.exports = router;
