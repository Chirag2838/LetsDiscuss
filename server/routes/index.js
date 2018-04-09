var express = require('express');
var router = express.Router();
var auth = require('../controllers/authCtrl');
var search = require('../controllers/searchCtrl');

router
    .route('/registration')
    .post(auth.registration);

router
    .route('/login')
    .post(auth.login);

router
    .route('/search')
    .get(search.searchPeople);

    
module.exports = router;