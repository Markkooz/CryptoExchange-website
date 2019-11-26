const { User, Wallet, Adress, Comment } = require('../models');
module.exports = {
  setComment(req, res) {
    return res.render('addComment');
  },
  postComment(req, res) {
  	//if errors is empty then user has filled in all fields
  	var errors = [];
  	//just in case user forgets to add prediction keep the current
  	//comment for QoL
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
  		//make a new Comment and push to DB at the same time!
  		Comment.create({
  			text: req.body.comment,
  			prediction: req.body.predict,
  			userId: req.session.expertID,
  			//(TODO: Alvaro) crypto should not be hardcoded
  			//should have context from req.body or req.query
  			//for which type of crypto expert is posting a comment about
  			crypto: "bitcoin",
  		}).then(newComment => {
  			//change to index later
  			res.redirect("/comments");
  		});
  	}

  },
};