var express = require('express');
var router = express.Router();
var auth = require('../controllers/authCtrl');
var search = require('../controllers/searchCtrl');
var follow = require('../controllers/followCtrl');

router
    .route('/registration')
    .post(auth.registration);

router
    .route('/login')
    .post(auth.login);

router
    .route('/search')
    .get(search.searchPeople);

router
    .route('/follow')
    .get(follow.followModule);

    
module.exports = router;