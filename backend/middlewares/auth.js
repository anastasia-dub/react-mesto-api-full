const jwt = require('jsonwebtoken');
const { DEV_JWT_KEY } = require('../constants');
const { NODE_ENV, JWT_SECRET } = process.env;
const AuthError = require('../errors/auth-error');

const auth = (req, res, next) => {
  const { jwt: token } = req.cookies;

  if (!token) {
    throw new AuthError('Ошибка авторизации');
  }

  try {
    const payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : DEV_JWT_KEY);
    req.user = payload;

    next();
  } catch (err) {
    err.statusCode = 401;
    next(new AuthError('Ошибка авторизации'));
  }
};

module.exports = auth;
