const { response } = require("express");
const User = require("../models/User");

const userCreate = async (req, res = response) => {

  const { name, email, password } = req.body;

  // TODO: HashPassword
  // TODO: save to mongo db

  try {
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json({ ok: true, user });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Error de servidor, hable con el administrador'
    });
  }

};

const loginUser = (req, res = responses) => {
  const { email, password } = req.body;

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
