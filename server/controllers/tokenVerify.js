var mongoose = require('mongoose');
var quoraUsers = mongoose.model('quoraUsers');
var express = require('express');
var app = express();
var jwt = require('jsonwebtoken');


module.exports.verifyToken = function(req, res, next){

	var token = req.param('token');

	if(token)
	{

		jwt.verify(token, 'secret', function(err1, decoded){

			console.log(decoded);

			quoraUsers.findOne({'email' : decoded.email}, function(err2, user){

				if((err1 || err2) || (user.token != token))
				{

					res.json({success : false, message : 'Authentication failed'});
				}

				else
				{

					req.decoded = decoded;
					next();
				}
			});
		});
	}

	else
	{

		res.json({success : false, message : 'token not provided'});
	}
}