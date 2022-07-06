const { Router } = require('express');
const { userCreate, loginUser, renewToken } = require('../controllers/auth');

const router = Router();

router.post('/new', userCreate);
router.post('/', loginUser);
router.post('/renew', renewToken);

module.exports = router;
