// eslint-disable-next-line no-unused-vars
const errors = (err, req, res, next) => {
  const { statusCode = 500, message } = err;
  console.log(err);
  return res
    .status(statusCode)
    .send({
      // проверяем статус и выставляем сообщение в зависимости от него
      message: statusCode === 500
        ? 'На сервере произошла ошибка'
        : message,
    });
};

module.exports = errors;
