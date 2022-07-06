const { Schema, model } = require('mongoose');

const EventSchema = Schema({
  title: {
    type: String,
    required: [true, 'El título es obligatorio'],
  },
  notes: {
    type: String,
    required: [true, 'Las notas son obligatorias'],
  },
  start: {
    type: Date,
    required: [true, 'La fecha inicial es obligatoria'],
  },
  end: {
    type: Date,
    required: [true, 'La fecha final es obligatoria'],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true,
  versionKey: false,
});

module.exports = model( 'Event', EventSchema );
