const { Router } = require('express');
const {
  listEvents, createEvent, updateEvent, deleteEvent
} = require('../controllers/events');
const { check } = require('express-validator');
const inputValidation = require('../middlewares/input-validation');
const jwtValidate = require('../middlewares/jwt-validate');
const isDate = require('../helpers/isDate');

const router = Router();

// This middleware validate json web token
// and all routes underneath are private routes
router.use( jwtValidate );

router.get('/', listEvents);

router.post('/', [
  check('title', 'El título es obligatorio').not().isEmpty(),
  check('title', 'El título debe ser entre 5 y 150 caracteres').isLength({ min: 5, max: 150 }),
  check('notes', 'Las notas son obligatorias').not().isEmpty(),
  check('notes', 'Las notas deben ser mínimo de 8 caracteres').isLength({ min: 8 }),
  check('start', 'Fecha inicial es obligatoria').not().isEmpty(),
  check('end', 'Fecha final es obligatoria').not().isEmpty(),
  check('start', 'Fecha inicial no es válida').custom(isDate),
  check('end', 'Fecha final no es válida').custom(isDate),
  inputValidation,
],createEvent);

router.patch('/:id', updateEvent);

router.delete('/:id', deleteEvent);

module.exports = router;
