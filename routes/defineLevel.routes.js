const router = require('express').Router();
const passport =require('passport');
const controllers = require('../controllers/defineLevel.controllers')
const defineLevelValidate = require('../middlewares/validates/defineLevel.validates');

router.post('/create',passport.authenticate('jwt', {session: false}),defineLevelValidate.create , controllers.create);
router.get('/getAll',passport.authenticate('jwt', {session: false}) , controllers.getAll);
router.post('/delete/:id',passport.authenticate('jwt', {session: false}) , controllers.deleteById);
router.post('/update/:id',passport.authenticate('jwt', {session: false}) , controllers.updateById);
router.post('/find/:id',passport.authenticate('jwt', {session: false}) , controllers.findById);

module.exports = router;

