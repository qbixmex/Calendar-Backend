const { response } = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const generateJWT = require("../helpers/jwt");

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

    // Generate Token
    const token = await generateJWT( user.id, user.name );

    res.status(201).json({
      ok: true,
      uid: user.id,
      name: user.name,
      token,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Error de servidor, hable con el administrador'
    });
  }

};

const loginUser = async (req, res = responses) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if ( !user ) {
      return res.status(400).json({
        ok: false,
        msg: `User does not exist`,
      });
    }

    // Confirm Passwords
    const validPassword = bcrypt.compareSync( password, user.password );

    if ( !validPassword ) {
      return res.status(400).json({
        ok: false,
        msg: `Incorrect password`,
      });
    }

    // Generate Token
    const token = await generateJWT( user.id, user.name );

    res.json({
      ok: true,
      uid: user.id,
      name: user.name,
      token,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Error de servidor, hable con el administrador'
    });
  }
};

const renewToken = (_req, res = response) => {
  res.json({ ok: true, message: 'login' });
};

module.exports = {
  userCreate,
  loginUser,
  renewToken,
};
