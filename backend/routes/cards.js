const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { URL_REGEXP } = require('../constants');

const {
  getCards,
  postCard,
  deleteCardById,
  putCardLikeByCardId,
  deleteCardLikeByCardId,
} = require('../controllers/cards');

router.get('/', getCards);
router.post('/', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required().pattern(URL_REGEXP),
  }),
}), postCard);
router.delete('/:id', celebrate({
  // валидируем параметры
  params: Joi.object().keys({
    id: Joi.string().length(24).hex(),
  }),
}), deleteCardById);
router.put('/:cardId/likes', celebrate({
  // валидируем параметры
  params: Joi.object().keys({
    cardId: Joi.string().length(24).hex(),
  }),
}), putCardLikeByCardId);
router.delete('/:cardId/likes', celebrate({
  // валидируем параметры
  params: Joi.object().keys({
    cardId: Joi.string().length(24).hex(),
  }),
}), deleteCardLikeByCardId);

module.exports = router;
