
module.exports = {
  getCrypto(req, res) {
    return res.render('crypto', { data: 'reached /crypto index route!' });
  },
};