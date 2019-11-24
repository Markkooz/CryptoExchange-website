// Controller for all root / routes
const { User, Wallet, Adress, Comment } = require('../models');
const bcrypt = require('bcryptjs');

module.exports = {
  getReg(req, res) {
  	res.render("register");
  },
  postReg(req, res) {
  		var errors = [];
  		var userPrefill = req.body.name;
  	  	//check that username isn't blank
		if (req.body.name.trim().length == 0){
			errors.push("Hey you! You gotta identify yourself! :(");
		}

		//check that passworld is at least 4 chars long
		if( req.body.password.trim().length < 4 ){
			errors.push("You need to make a better password! (at least 4 characters!)");
		}

		//check that username isn't in the database
		//since I didn't use bcryptSync... there is 2 async nested calls
		//1st User.count query => bcryptHash => User.create
		User.count({ where: {name: req.body.name.trim()} }).then(function(count){
		        if (count != 0) {
		          	errors.push("HEY THAT USER ALREADY EXISTS DUMMY");
		        } 
		        //if any error
				//back to LR page
				if (errors.length > 0){
					
					res.render("register", {
						listOfErrors : errors,
						username: userPrefill
					});
					return;
				}
				else{
					//everything checks out, register the user and go to home!
					bcrypt.hash(req.body.password.trim(), 10, (err,hash) => {
						User.create({
							pw: hash,
							name: req.body.name.trim(),
							balance: 0,
							expert: 0,
						}).then(newUser => {
							req.session.user = newUser;
							//Everything passed! hooray! :D
							// res.render('index', {
							// 	user: newUser
							// });
							res.redirect('/');
						});
					});					
				}
		    });
  },
};