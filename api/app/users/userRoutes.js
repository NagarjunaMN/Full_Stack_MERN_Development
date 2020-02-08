const router = require('express').Router();
const userController = require('./userController');

router.post('/signup',userController.createUser);
router.post('/signin',userController.Login)



module.exports = router;