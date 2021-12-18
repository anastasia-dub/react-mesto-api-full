const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { URL_REGEXP } = require('../constants');

const {
  getUsers,
  getUserById,
  updateUserInformation,
  updateUserAvatar,
  me,
} = require('../controllers/users');

router.get('/', getUsers);
router.get('/me', me);
router.get('/:id', celebrate({
  // валидируем параметры
  params: Joi.object().keys({
    id: Joi.string().length(24).hex(),
  }),
}), getUserById);
router.patch('/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30),
  }),
}), updateUserInformation);
router.patch('/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required().pattern(URL_REGEXP),
  }),
}), updateUserAvatar);

module.exports = router;
