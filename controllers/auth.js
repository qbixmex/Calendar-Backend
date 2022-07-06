const { response } = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const userCreate = async (req, res = response) => {

  const { name, email, password } = req.body;

  try {

    let user = await User.findOne({ email });

    if ( user ) {
      return res.status(400).json({
        ok: false,
        msg: `User exists with (${ email }) email`,
      });
    }

    user = new User({ name, email, password });

    // Encrypt Password
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync( password, salt );

    await user.save();

    res.status(201).json({
      ok: true,
      uid: user.id,
      name: user.name
    });

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
