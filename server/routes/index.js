var express = require('express');
var router = express.Router();
var register = require('../controllers/quoraCtrl');

router
    .route('/registration')
    .post(register.registration);

    module.exports = router;