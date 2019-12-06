const {User, Wallet} = require('../models');

module.exports = {
  getAllusers(req, res) {

    User.findAll().then(users => {
      //* What I want to happen here is that I retreive:
      //*   - All Users
      //*   - All their corresponding Wallet values
      //*   - Their profile picture URL (Not currently in the database

      //* A list of keys
      var userIds = [];

      //* A map for O(1) retrieval of a User's name since wallets only carry the id of a user
      var idMap = {};

      users.forEach(user => {

        userIds.push(user.id);

        idMap[user.id] = user.name;

      });
      Wallet.findAll({
        where: {
          userId: userIds,
        }
      }).then(wallets => {

        console.log(wallets);
        
        //* holds Wallet objects with:
        //*   - Username
        //*   - Bitcoin amount that the user has
        //*   - Ethereum amount that the user has
        //*   - LiteCoin amount that the user has
        var walletToSend = [];
        
        wallets.forEach(wallet => {
          console.log(wallet.id);

          //* Create wallet object 
          //TODO I stopped engineering here at 10:45pm at the CS lab @ UTRGV
          // var walletObj = {
          //   username = idMap[wallet.userId],
          //   bitcoin = 
          //     }
          //   }),
          
        });
      });

    });
  },
    return res.render('usersList', { user: req.session.user });
};
