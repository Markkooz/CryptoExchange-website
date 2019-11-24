// Controller for all root / routes
const { User, Wallet, Adress, Comment } = require('../models');
const bcrypt = require('bcryptjs');

module.exports = {
  getLogin(req, res) {
  	res.render("login");
  },
  postLogin(req, res) {
  	var errors = []; //error messages are pushed as user hits more error states!
	var userPrefill = req.body.name;

	var hashToCompare;
		User.findOne({where: {name : req.body.name}}).then(function(fetchedUser){
			if (fetchedUser){
				hashToCompare = fetchedUser.pw;	
				bcrypt.compare(req.body.password, hashToCompare, (err, match) => {
					if (match){
						req.session.user = fetchedUser;
						//res.render('index', {user: req.session.user});
						res.redirect('/');
						return;
					}
					else{
						errors.push("Wrong Username or Password");
						res.render("login", {
							listOfErrors : errors,
							username: userPrefill
						});
						return;
					}
				});
			}
			else{
				errors.push("Wrong Username or Password");
				res.render("login", {
					listOfErrors : errors,
					username: userPrefill
				});
				return;
			}
		});
  },
};