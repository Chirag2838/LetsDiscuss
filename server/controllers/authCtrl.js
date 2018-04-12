var mongoose = require('mongoose');
var quoraUsers = mongoose.model('quoraUsers');
var express = require('express');
var app = express();
var jwt = require('jsonwebtoken');

module.exports.registration = function(req, res){

	if(req.body.pass1 == req.body.pass2)
	{
		quoraUsers.findOne({$or:[{'email' : req.body.email}, {'username' : req.body.username}]}, function(err, user){

			if(!user)
			{

				var user = new quoraUsers({

					'firstname' : req.body.firstname,
					'lastname' : req.body.lastname,
					'email' : req.body.email,
					'username' : req.body.username,
					'password' : req.body.pass1
				});

				user.save(function(err, data){

					if(err)
					{

						console.log(err);
					}
					else
					{
						console.log('data', data);

						var token = jwt.sign(data.toJSON(), 'secret', {expiresIn : 86400});

						quoraUsers.findOneAndUpdate({'email' : data.email}, {$set : {'token' : token}}, {new : true}, function(err, doc){

					         if(err)
					            {

						            console.log('something went wrong');
					            }
				        });

				        res.json({success : true, message : 'Registration successful', token : token});
					}
				})
			}
			else
			{

				res.json({success : false, message : 'User already exist'});


			}
		})

	}
	else
	{

		res.json({success : false, message : 'Password did not match. Try again'});
	}
}


module.exports.login = function(req, res){

	quoraUsers.findOne({'email' : req.body.email}, function(err, user){

		if(err)
		{

			console.log(err);
		}

		if(!user)
		{
			res.json({success : false, message : 'Authentication failed. user not found'});

		}
		else
		{

			if(user.password != req.body.password)
			{
				res.json({success : false, message : 'Authentication failed. password did not match'});

			}

			else
			{

				var token = jwt.sign(user.toJSON(), 'secret', {expiresIn : 86400});

				quoraUsers.findOneAndUpdate({'email' : user.email}, {$set : {'token' : token}}, {new : true}, function(err, doc){

					if(err)
						console.log(err);

				});

				res.json({success : true, message : 'you are logged in', token : token});
			}
		}
	})
}

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

module.exports.logout = function(req, res){


	quoraUsers.findOneAndUpdate({'email' : req.decoded.email}, {$unset : {'token' : 1}}, {new : true}, function(err, doc){

		if(err)
		{

			console.log(err);
		}
	});

	res.json({success : true, message : 'Successfully logged out'});
}