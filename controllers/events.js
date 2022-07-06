const { response, request } = require("express");

const listEvents = ('/', ( req = request, res = response ) => {
  res.json({
    ok: true,
    msg: 'Events List'
  });
});

const createEvent = ('/', ( req = request, res = response ) => {

  console.log(req.body);

  res.json({
    ok: true,
    msg: 'Event Created'
  });
});

const updateEvent = ('/:id', ( req = request, res = response ) => {
  res.json({
    ok: true,
    msg: 'Event Updated'
  });
});

const deleteEvent = ('/:id', ( req = request, res = response ) => {
  res.json({
    ok: true,
    msg: 'Event deleted'
  });
});

module.exports = {
  listEvents,
  createEvent,
  updateEvent,
  deleteEvent,
};
