const { User, Wallet, Adress, Comment } = require('../models');

module.exports = {
  getCrypto(req, res) {

  	if(req.session.user)
  	{
  		Wallet.findOne({where: {type : req.query.c,
  								userId : req.session.user.id}}).then(data=>{
  			    	return res.render('crypto', { data: data.balance, user: req.session.user });
  		});

  	}else
  	{
  		//redirects to API thingy
  	}
  	
  },
};