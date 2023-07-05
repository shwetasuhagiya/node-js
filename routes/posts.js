var express = require('express');
const { register, allpost, postsingleData, limitSkippost, userIdpost, deletepost, updatepost, userIdcomment } = require('../controller/postController');
const { searchData } = require('../controller/userControl');
var router = express.Router();

router.post('/register',register);
router.get('/',allpost);
router.get('/single/:id',postsingleData);
router.get('/search',searchData);
router.get('/limit',limitSkippost);
router.get('/user/:id',userIdpost);
router.get('/:id/comment',userIdcomment)
router.get('/delete/:id',deletepost);
router.post('/update/:id',updatepost)

module.exports = router;
