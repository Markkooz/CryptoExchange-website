
module.exports = {
  setComment(req, res) {
    return res.render('addComment', { data: 'reached /addComment index route!' });
  },
};