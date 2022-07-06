const { Router } = require('express');
const router = Router();

router.get('/', (_request, response) => {
  response.status(200).json({ ok: true });
});

module.exports = router;