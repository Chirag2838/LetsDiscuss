var mongoose = require('mongoose');

var quoraUsers = new mongoose.Schema({

	firstname : String,
	lastname : String,
	email : String,
	username : String,
	password : String,
	favorites : [String],
	questions : [String],
	followers : [String],
	following : [String],
	token : String
});

module.exports = mongoose.model('quoraUsers', quoraUsers);