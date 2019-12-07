
const {User, Wallet, Comment} = require('../models');

module.exports = {
  getUser(req, res) {

    //* Validate if they are a user or a guest
  	if (!req.session.user) return res.redirect('/login');
    
    //* Pull the correct user from the database
    User.findOne({
      where: {
        id: req.query.id
      },
      include: [
        {model: Wallet, as: 'Wallets'},
        {model: Comment, as: 'Comments'}
      ] 
    }).then(user => {
      //* Return the profile
      return res.render('user', {
        user: user
      });
    });
  },
}; 