const router = require('express').Router();
const userRouter = require('./user');
const movieRouter = require('./movie');
const auth = require('../middlewares/auth');

const { createUser, login } = require('../controllers/user');
const { validatiSignUpUser, validatiSignInUser } = require('../middlewares/validation');
const PageNotFoundError = require('../errors/PageNotFoundError');

router.post('/signup', validatiSignUpUser, createUser);
router.post('/signin', validatiSignInUser, login);
router.use(auth);
router.use('/users', userRouter);
router.use('/movies', movieRouter);
router.use((req, res, next) => {
  next(new PageNotFoundError('Страница не найдена'));
});

module.exports = router;
