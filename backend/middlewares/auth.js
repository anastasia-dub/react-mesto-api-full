const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../constants');
const AuthError = require('../errors/auth-error');

const auth = (req, res, next) => {
  const { jwt: token } = req.cookies;

  if (!token) {
    throw new AuthError('Ошибка авторизации');
  }

  try {
    const payload = jwt.verify(token, SECRET_KEY);
    req.user = payload;

    next();
  } catch (err) {
    err.statusCode = 401;
    next(err);
  }
};

module.exports = auth;
