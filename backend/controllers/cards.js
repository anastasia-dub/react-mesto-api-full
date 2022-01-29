const Card = require('../models/card');
const NotFoundError = require('../errors/not-found-error');
const InvalidDataError = require('../errors/invalid-data-error');
const ValidationError = require('../errors/validation-error');

const getCards = (req, res, next) => {
  Card.find({})
    .then((cards) => res.send(cards))
    .catch(next);
};

const postCard = (req, res, next) => {
  const { _id } = req.user;
  const { name, link } = req.body;
  Card.create({ name, link, owner: _id })
    .then((card) => res.send(card))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new ValidationError('Переданы некорректные данные'));
      }
      next(err);
    });
};

const deleteCardById = (req, res, next) => {
  Card.findById(req.params.id)
    .then((card) => {
      if (!card) {
        throw new NotFoundError('Карточка с указанным _id не найдена');
      }

      if (card.owner.equals(req.user._id)) {
        Card.findByIdAndRemove(req.params.id)
          .then((_card) => {
            if (!_card) {
              throw new NotFoundError('Карточка с указанным _id не найдена');
            }
            return res.send(_card);
          })
          .catch(next);
      } else {
        const err = new Error('Не хватает прав для совершения операции');
        err.statusCode = 403;
        throw err;
      }
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new InvalidDataError('Переданы некорректные данные'));
      }
      next(err);
    });
};

const putCardLikeByCardId = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } }, // добавить _id в массив, если его там нет
    { new: true },
  )
    .then((card) => {
      if (!card) {
        throw new NotFoundError('Карточка с указанным _id не найдена');
      }
      return res.send(card);
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new InvalidDataError('Переданы некорректные данные'));
      }
      next(err);
    });
};

const deleteCardLikeByCardId = (req, res, next) => {
  Card.findByIdAndRemove(
    req.params.cardId,
    { $pull: { likes: req.user._id } }, // убрать _id из массива
    { new: true },
  )
    .then((card) => {
      if (!card) {
        throw new NotFoundError('Карточка с указанным _id не найдена');
      }
      return res.send(card);
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new InvalidDataError('Переданы некорректные данные'));
      }
      next(err);
    });
};

module.exports = {
  getCards,
  postCard,
  deleteCardById,
  putCardLikeByCardId,
  deleteCardLikeByCardId,
};
