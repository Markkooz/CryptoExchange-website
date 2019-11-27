
module.exports = {
  getCrypto(req, res) {

  	if(req.session.user)
  	{
  		Wallet.findOne({where: {type : req.query.c,
  								userId : req.session.user.id}}).then(data=>{
  			    	return res.render('crypto', { data: data.balance });
  		});

  	}else
  	{
  		//redirects to API thingy
  	}
  	
  },
};