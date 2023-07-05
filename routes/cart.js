var express = require('express');
const { cartRegister, cartsingleData, allcart, usercart, deletecart, updatecart } = require('../controller/cartController');
var router = express.Router();

router.post('/register',cartRegister);
router.get('/',allcart)
router.get('/single/:id',cartsingleData);
router.get('/user/:id',usercart);
router.get('/delete/:id',deletecart);
router.post('/update/:id',updatecart);

module.exports = router;