var express = require('express');
var router = express.Router();
var auth = require('../controllers/authCtrl');
var search = require('../controllers/searchCtrl');
var follow = require('../controllers/followCtrl');
var token = require('../controllers/tokenVerify')

router
    .route('/registration')
    .post(auth.registration);

router
    .route('/login')
    .post(auth.login);

router
    .use(token.verifyToken);

router
    .route('/search')
    .get(search.searchPeople);

router
    .route('/logout')
    .get(auth.logout);


module.exports = router;
