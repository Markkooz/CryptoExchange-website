
module.exports = {
  getAllComments(req, res) {
    return res.render('comment', { data: 'reached /comments index route!' });
  },
};