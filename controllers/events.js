const { response, request } = require("express");
const Event = require('../models/Event');

const listEvents = async ( req = request, res = response ) => {

  const events = await Event.find()
    .select('-createdAt -updatedAt')
    .populate('user', 'name');
  
  res.json({
    ok: true,
    events
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

  const eventId = req.params.id;
  const uid = req.uid;

  try {

    const event = await Event.findById(eventId);

    if ( !event ) {
      return res.status(404).json({
        ok: false,
        msg: `El evento no existe por el ID: ${ eventId }`
      });
    }

    if ( event.user.toString() !== uid ) {
      return res.status(401).json({
        ok: false,
        msg: `No tienes suficientes privilegios para realizar esta acción`
      });
    }

    const newEvent = {
      ...req.body,
      user: uid
    };

    const updatedEvent = await Event.findByIdAndUpdate( eventId, newEvent, { new: true } );

    res.json({
      ok: true,
      event: updatedEvent
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      ok: false,
      msg: 'Error de servidor, hable con el administrador'
    });

  }

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
