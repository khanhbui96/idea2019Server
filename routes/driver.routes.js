const router = require('express').Router();
const passport =require('passport');
const controllers = require('../controllers/driver.controllers')
const driverValidates = require('../middlewares/validates/driver.validates')

router.post('/create' , passport.authenticate('jwt', {session: false}),driverValidates.create , controllers.create);
router.get('/getAll',passport.authenticate('jwt', {session: false}) , controllers.getAll);
router.post('/delete/:id',passport.authenticate('jwt', {session: false}) , controllers.deleteById);
router.post('/update/:id',passport.authenticate('jwt', {session: false}) , controllers.updateById);
router.post('/find/:id',passport.authenticate('jwt', {session: false}) , controllers.findById);

module.exports = router;

