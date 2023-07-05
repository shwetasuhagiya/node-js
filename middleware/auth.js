var jwt = require('jsonwebtoken');

const userAuth = ( req, res, next ) => {
    jwt.verify(req.headers.authorization, 'data',next);
}

module.exports = {
    userAuth
}