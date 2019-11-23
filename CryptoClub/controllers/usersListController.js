
module.exports = {
  getAllusers(req, res) {
    return res.render('usersList', { data: 'reached /usersList index route!' });
  },
};