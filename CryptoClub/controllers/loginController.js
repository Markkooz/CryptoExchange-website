
module.exports = {
  getLogin(req, res) {
    return res.render('login', { data: 'reached /login index route!' });
  },
};