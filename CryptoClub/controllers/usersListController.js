const {User, Wallet} = require('../models');

module.exports = {
  getAllusers(req, res) {

    //* Pull all users from the DB
    User.findAll({
      //* Connect User with hi/her corresponding wallet data
      include: [{model: Wallet, as: 'Wallets'}]

    }).then(users => {
      //* Return list of JSON to the hbs view
      return res.render('usersList', {
        users: users
      });
    });
  },
};