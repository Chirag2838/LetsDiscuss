var mongoose = require('mongoose');
var quoraUsers = mongoose.model('quoraUsers');
var express = require('express');
var app = express();
var jwt = require('jsonwebtoken');

module.exports.followModule = function(req, res){

	var token = req.param('token');
	var username = req.param('username');

	if(token)
	{

		jwt.verify(token, 'secret', function(err1, decoded){

			quoraUsers.findOne({'email' : decoded.email}, function(err2, user){

				if((err1 || err2) || (user.token != token))
				{

					res.json({success : false, message : 'Authentication failed'});
				}

				else
				{
					console.log('user', user.firstname);

					if(username)
					{

						quoraUsers.findOneAndUpdate({'username' : user.username}, {$set : {'following' : [username]}}, function(err, docs){

							if(err)
							{

								console.log(err);
							}

							console.log(docs);
						})

						quoraUsers.findOneAndUpdate({'username' : username}, {$set : {'follower' : [user.username]}}, function(err, docs){

							if(err)
							{

								console.log(err)
							}

							console.log(docs);

							res.json({success : true, message : user.firstname + ' started following ' + docs.firstname})
						})

					}

					else
					{

						res.json({success : false, message : 'Username not provided'});
					}
				}
			})
		})
	}

	else
	{

		res.json({success : false, message : 'token not provided'});
	}
}