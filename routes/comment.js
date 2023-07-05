var express = require('express');
const { register, allcomment, comsingleData, limitSkipcomment, useridcomment, deletecomment, updatecomment } = require('../controller/commentController');

var router = express.Router();

router.post('/register',register);
router.get('/',allcomment);
router.get('/single/:id',comsingleData);
router.get('/limit',limitSkipcomment);
router.get('/post/:id',useridcomment);
router.get('/delete/:id',deletecomment);
router.post('/update/:id',updatecomment);

module.exports = router;