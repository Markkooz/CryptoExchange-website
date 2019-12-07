
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
    }).then(user => {

      //* List of JSON comment objects
      var commentsToSend = [];
      
      //* JSON object with relevant data from userList (passed via query string), 
      //* and a list of JSON comment objects in no particular order
      var profile = {
        name: user.name,
        id: req.query.id,
        btc: req.query.btc,
        eth: req.query.eth,
        ltc: req.query.ltc,
        comments: commentsToSend
      };

      //* Pull the relevant comments from the database if user is an expert
      if(user.expert) {
        Comment.findAll({
          where: {
            userId: user.id
          }
        }).then(comments => {

          //* Iterate through the comments
          comments.forEach(comment => {

            //* JSON object that holds a comment's text, the crypto prediction, and the crypto they are predicting
            var comment = {
              crypto: comment.crypto,
              text: comment.text,
              prediction: comment.prediction
            };

            //* Push JSON comment object into comment list
            commentsToSend.push(comment);
          })

          //* Return the profile
          return res.render('user', {
            profile: profile
          })
        });
      }
    });
  },
};