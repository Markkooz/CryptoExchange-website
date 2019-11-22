
module.exports = {
  setComment(req, res) {
    return res.render('comment', { data: 'reached /addComment index route!' });
  },
};