var express = require('express');
var router = express.Router();
var auth = require('../controllers/authCtrl');

router
    .route('/registration')
    .post(auth.registration);

router
    .route('/login')
    .post(auth.login);

    module.exports = router;