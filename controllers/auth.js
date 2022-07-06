const { response } = require("express");

const userCreate = (req, res = response) => {

  const { name, email, password } = req.body;

  // Middleware -> JOI
  // Middleware -> Express Validator

  // Validations
  if ( !name ) {
    return res.json({
      ok: false,
      msg: 'El nombre es obligatorio.'
    });
  }

  if ( name.length < 3 ) {
    return res.status(400).json({
      ok: false,
      msg: 'El nombre debe ser por lo menos de 3 caracteres.'
    });
  }

  if ( !email ) {
    return res.status(400).json({
      ok: false,
      msg: 'El email es obligatorio.'
    });
  }

  if ( !password ) {
    return res.status(400).json({
      ok: false,
      msg: 'La contraseña es obligatoria.'
    });
  }

  if ( password.length < 8 ) {
    return res.status(400).json({
      ok: false,
      msg: 'La contraseña debe ser por lo menos de 8 caracteres.'
    });
  }

  // TODO: HashPassword
  // TODO: save to mongo db
  
  res.json({
    ok: true,
    user: {
      name,
      email,
      password,
    },
  });

};

const loginUser = (_req, res = responses) => {
  res.json({ ok: true, message: 'renew' });
};

const renewToken = (_req, res = response) => {
  res.json({ ok: true, message: 'login' });
};

module.exports = {
  userCreate,
  loginUser,
  renewToken,
};
