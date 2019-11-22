
module.exports = {
  getUser(req, res) {
    return res.render('user', { data: 'reached /user index route!' });
  },
};