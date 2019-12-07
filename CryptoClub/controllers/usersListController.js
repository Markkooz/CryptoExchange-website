const {User, Wallet} = require('../models');

module.exports = {
  getAllusers(req, res) {

    //* Pull all users from the DB
    User.findAll().then(users => {

      //* Empty list that will hold a JSON object with id, name, btc, eth, and ltc amounts of each user.
      var profiles = [];

      //* Iterate through Users
      users.forEach(user => {

        //* Using each userId, pull matching Wallet data from DB
        Wallet.findAll({
          where: {
            userId: user.id
          },
        }).then(wallets => {

          //* Create JSON object
          var profile = {
            name: user.name,
            id: user.id,
            btc: 0,
            eth: 0,
            ltc: 0
          };

          //* Iterate through the matching wallet data
          wallets.forEach(wallet => {

            //* Filter through wallet data and place into appropiate slots in JSON object
            if(wallet.type == "bitcoin") profile.btc = wallet.balance;
            else if(wallet.type == "ethereum") profile.eth = wallet.balance;
            else if(wallet.type == "litecoin") profile.ltc = wallet.balance;
          });

          //* Push into the list
          profiles.push(profile);
        });

        //* Return list of JSON to the hbs view
        return res.render('usersList', {
          profiles: profiles
        });
      });
    });
  },
};
