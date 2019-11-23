// Controller for all root / routes
const { User, Wallet, Adress, Comment } = require('../models');

module.exports = {
  getIndexData(req, res) {
    User.findAll().then(db_people=>{
			return res.render('index',{people:db_people});
		});
  },
};