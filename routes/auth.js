const { Router } = require('express');
const { userCreate, loginUser, renewToken } = require('../controllers/auth');
const { check } = require('express-validator');

const router = Router();

router.post('/new', [
  check('name', 'El nombre es obligatorio').not().isEmpty(),
  check('name', 'El nombre debe ser entre 3 y 100 caracteres').isLength({ min: 3, max: 100 }),
  check('email', 'El correo electrónico es obligatorio').not().isEmpty(),
  check('email', 'Formato de email es incorrecto').isEmail(),
  check('password', 'La contraseña es obligatoria').not().isEmpty(),
  check('password', 'La contraseña debe ser de 8 caracteres mínimo').isLength({ min: 8 }),
], userCreate);

router.post('/', [
  check('email', 'El correo electrónico es obligatorio').not().isEmpty(),
  check('email', 'Formato de email es incorrecto').isEmail(),
  check('password', 'La contraseña es obligatoria').not().isEmpty(),
  check('password', 'La contraseña debe ser de 8 caracteres mínimo').isLength({ min: 8 }),
], loginUser);

router.post('/renew', renewToken);

module.exports = router;
