var express = require('express');
const { enterData, userLogin, allUsers, singleData, searchData, limitSkipUser, userIdCart, deleteuser, updateuser, userIdtodo } = require('../controller/userControl');
const { userAuth } = require('../middleware/auth');
const { userIdpost } = require('../controller/postController');
var router = express.Router();

/* GET home page. */
router.post('/register', enterData);
router.get('/',userLogin);
router.get('/users',userAuth, allUsers);
router.get('/users/:id',singleData);
router.get('/user/search',searchData);
router.get('/user',limitSkipUser);
router.get('/user/:id/carts',userIdCart);
router.get('/user/:id/posts',userIdpost);
router.get('/user/:id/todos',userIdtodo)
router.get('/delete/:id',deleteuser);
router.post('/update/:id',updateuser);

module.exports = router;
