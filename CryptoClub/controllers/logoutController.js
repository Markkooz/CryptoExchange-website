module.exports = {
  getLoggedout(req, res) {
  	delete req.session.user;
	return res.redirect("../");
  },
};