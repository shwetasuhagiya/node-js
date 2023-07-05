var express = require('express');
const { register, alltodo, todosingleData, randomtodo, limitSkiptodo, deletetodo, updatetodo } = require('../controller/todoController');
var router = express.Router();

router.post('/register',register);
router.get('/',alltodo);
router.get('/single/:id',todosingleData);
router.get('/random',randomtodo);
router.get('/limit',limitSkiptodo);
router.get('/delete/:id',deletetodo);
router.post('/update/:id',updatetodo);

module.exports = router;