// Controller for all root / routes
const { User, Wallet, Adress, Comment } = require('../models');

module.exports = {
  getIndexData(req, res) {
	return res.render('index',{user: req.session.user});
  },
};