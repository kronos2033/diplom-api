const { celebrate, Joi } = require('celebrate');
const { validateUrl } = require('../errors/CelebrateUrlError');

const validatePatchUser = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    email: Joi.string().email(),
  }),
});

const validatiSignUpUser = celebrate({
  body: Joi.object()
    .keys({
      email: Joi.string().required().email(),
      password: Joi.string().required(),
      name: Joi.string().required().min(2).max(30),
    })
    .unknown(true),
});

const validatiSignInUser = celebrate({
  body: Joi.object()
    .keys({
      email: Joi.string().required().email(),
      password: Joi.string().required(),
    })
    .unknown(true),
});

const validateCreateMovie = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required().min(2).max(50),
    director: Joi.string().required().min(2).max(50),
    duration: Joi.number().required(),
    year: Joi.string().required().min(4).max(4),
    description: Joi.string().required().min(2).max(3000),
    image: Joi.string().required().custom(validateUrl),
    trailer: Joi.string().required().custom(validateUrl),
    thumbnail: Joi.string().required().custom(validateUrl),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required().min(2).max(100),
    nameEN: Joi.string().required().min(2).max(100),
  }),
});

const validateDeleteMovie = celebrate({
  body: Joi.object().keys({
    _id: Joi.string().hex().length(24),
  }),
});
module.exports = {
  validatePatchUser,
  validateCreateMovie,
  validatiSignInUser,
  validatiSignUpUser,
  validateDeleteMovie,
};
