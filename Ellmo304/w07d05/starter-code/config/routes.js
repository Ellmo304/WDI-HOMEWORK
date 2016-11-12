
const router = require('express').Router();
const plantsController = require('../controllers/plants');
const authController = require('../controllers/auth');

router
  .post('/login', authController.login)
  .post('/register', authController.register);

router.route('/plants')
  .get(plantsController.index)
  .post(plantsController.create);

router.route('/plants/:id')
  .get(plantsController.show)
  .put(plantsController.update)
  .delete(plantsController.delete);

module.exports = router;
