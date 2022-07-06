const { response } = require("express");
const { validationResult } = require("express-validator");

const userCreate = (req, res = response) => {

  const { name, email, password } = req.body;

  // Check Errors
  const errors = validationResult( req );

  if ( !errors.isEmpty() ) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped()
    });  
  }

  // TODO: HashPassword
  // TODO: save to mongo db
  
  res.status(201).json({
    ok: true,
    user: { name, email, password },
  });

};

const loginUser = (req, res = responses) => {
  const { email, password } = req.body;

  // Check Errors
  const errors = validationResult( req );

  if ( !errors.isEmpty() ) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped()
    });  
  }

  res.json({
    ok: true,
    user: { name: 'Peter Parker', email }
  });
};

const renewToken = (_req, res = response) => {
  res.json({ ok: true, message: 'login' });
};

module.exports = {
  userCreate,
  loginUser,
  renewToken,
};
