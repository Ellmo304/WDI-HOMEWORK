
const router = require('express').Router();
const plantsController = require('../controllers/plants');
const authController = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');
const oauthController = require('../controllers/oauth');


router
  .post('/login', authController.login)
  .post('/register', authController.register)
  .post('/auth/facebook', oauthController.facebook);


router.route('/plants')
  .get(plantsController.index)
  .post(secureRoute, plantsController.create);

router.route('/plants/:id')
  .get(plantsController.show)
  .put(secureRoute, plantsController.update)
  .delete(secureRoute, plantsController.delete);

module.exports = router;
