module.exports = {
  getLoggedout(req, res) {
  	delete req.session.user;
	res.redirect('/login');
  },
};