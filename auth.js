const auth = require('basic-auth');

module.exports = (req, res, next) => {
  var user = auth(req);

  if (typeof user === 'undefined' || user.name !== 'admin' || user.pass !== 'admin') {
    res.header('WWW-Authenticate', 'Basic realm="Access to the API"');
    return res.status(401).send({ error: 'Unauthorized' });
  }

  next();
};
