const { request, response } = require("express");

const userCreate = (_req = request, res = response) => {
  res.json({ ok: true, message: 'register' });
};

const loginUser = (_req = request, res = responses) => {
  res.json({ ok: true, message: 'renew' });
};

const renewToken = (_req = request, res = response) => {
  res.json({ ok: true, message: 'login' });
};

module.exports = {
  userCreate,
  loginUser,
  renewToken,
};
