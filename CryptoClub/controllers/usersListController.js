
module.exports = {
  getAllusers(req, res) {
    return res.render('users', { data: 'reached /usersList index route!' });
  },
};