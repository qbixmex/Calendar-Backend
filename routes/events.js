const { Router } = require('express');
const {
  listEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require('../controllers/events');
const jwtValidate = require('../middlewares/jwt-validate');

const router = Router();

// This middleware validate json web token
// and all routes underneath are private routes
router.use( jwtValidate );

router.get('/', listEvents);

router.post('/', createEvent);

router.patch('/:id', updateEvent);

router.delete('/:id', deleteEvent);

module.exports = router;
