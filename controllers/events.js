const { response, request } = require("express");
const Event = require('../models/Event');

const listEvents = ( req = request, res = response ) => {
  res.json({
    ok: true,
    msg: 'Events List'
  });
};

const createEvent = async ( req = request, res = response ) => {

  const event = new Event(req.body);

  try {

    event.user = req.uid;
    const savedEvent = await event.save();

    res.json({
      ok: true,
      event: savedEvent
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      ok: false,
      msg: 'Error de servidor, hable con el administrador'
    });

  }

};

const updateEvent = async ( req = request, res = response ) => {
  res.json({
    ok: true,
    msg: 'Event Updated'
  });
};

const deleteEvent = async ( req = request, res = response ) => {
  res.json({
    ok: true,
    msg: 'Event deleted'
  });
};

module.exports = {
  listEvents,
  createEvent,
  updateEvent,
  deleteEvent,
};
