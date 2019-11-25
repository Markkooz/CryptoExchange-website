const { User, Wallet, Adress, Comment } = require('../models');
module.exports = {
  setComment(req, res) {
    return res.render('addComment');
  },
  postComment(req, res) {
  	var errors = [];
  	var prefillComment = "";
  	if(!req.body.predict)
  		errors.push("You need a prediction filled in!");
  	if(!req.body.comment)
  		errors.push("You need a comment filled in!");
  	else
  		prefillComment += req.body.comment;

  	if(errors.length > 0){
  		return res.render('addComment',{
	  		listOfErrors: errors,
	  		prefill: prefillComment,
	  	});
  	}
  	else{
  		//do DB processing if comment is valid!
  		//return res.render('addComment');
  		req.session.expertID = 5;
  		Comment.create({
  			text: req.body.comment,
  			prediction: req.body.predict,
  			userId: req.session.expertID,
  			crypto: "bitcoin",
  		}).then(newComment => {
  			//change to index later
  			res.redirect("/comments");
  		});
  	}

  },
};