
module.exports = {
  getUser(req, res) {
  	if (!req.session.user)
  		return res.redirect('/login');
    return res.render('user', { data: 'reached /user index route!' });
  },
};