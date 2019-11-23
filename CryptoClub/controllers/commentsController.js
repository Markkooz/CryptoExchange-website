
module.exports = {
  getAllComments(req, res) {
    return res.render('comments', { data: 'reached /comments index route!' });
  },
};