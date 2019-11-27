const { User, Wallet, Adress, Comment } = require('../models');

module.exports = {
  getCrypto(req, res) {

  	if(req.session.user)
  	{
  		Wallet.findOrCreate({
        where: {
          type : req.query.c,
  				userId : req.session.user.id
        },
        defaults: {
          type : req.query.c,
          userId : req.session.user.id,
          balance : 3342,
        }
      }).then(data=>{
              console.log(data);
  			    	return res.render('crypto', { data: data[0].balance, user: req.session.user, type: data[0].type });
  		});

  	}else
  	{
  		//redirects to API thingy
      return res.render('crypto', {  type: req.query.c });
      //res.redirect('/');
  	}
  	
  },
};