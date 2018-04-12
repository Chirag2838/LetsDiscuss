var mongoose = require('mongoose');
var quoraUsers = mongoose.model('quoraUsers');
var express = require('express');
var app = express();
var jwt = require('jsonwebtoken');

module.exports.searchPeople = function(req, res){

	var name = req.param('name');

	if(name)
	{

		quoraUsers.find({$or : [{'firstname' : name}, {'username' : name}]}, function(err, docs){

			if(err)
			{

				console.log(err);
			}

			else
			{

				res.send(docs);
			}
		})
	}

	else
	{

		res.json({success : false, message : 'Name not provided'});
	}

}

// 	var token = req.param('token');
// 	var name = req.param('name');

// 	if(token)
// 	{

// 		jwt.verify(token, 'secret', function(err1, decoded){

// 			console.log(decoded);

// 			quoraUsers.findOne({'email' : decoded.email}, function(err2, user){

// 				if((err1 || err2) || (user.token != token))
// 				{

// 					res.json({success : false, message : 'Authentication failed'});
// 				}

// 				else
// 				{

// 					if(name)
// 					{

// 						quoraUsers.find({$or : [{'firstname' : name}, {'username' : name}]}, function(err, docs){

// 							if(err)
// 							{

// 								console.log(err);
// 							}

// 							//console.log('res', docs[0]);

// 							res.send(docs);
// 						})
// 					}

// 					else
// 					{

// 						res.json({success : false, message : 'Name is provided'});

// 					}
// 				}
// 			})
// 		})

// 	}

// 	else
// 	{

// 		res.json({success : false, message : 'token not provided'});
// 	}
// }