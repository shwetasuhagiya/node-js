var express = require('express');
const { register, allproduct, productsingleData, searchproduct, limitSkipproduct, deleteproduct, updateproduct, productcategories, categories } = require('../controller/productcontroller');
var router = express.Router();


router.post('/register',register);
router.get('/',allproduct);
router.get('/single/:id',productsingleData);
router.get('/search',searchproduct);
router.get('/limit',limitSkipproduct);
router.get('/categories',productcategories);
router.get('/categories/:id',categories)
router.get('/delete/:id',deleteproduct);
router.post('/update/:id',updateproduct)

module.exports = router;
