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
    ref: 'User',
    required: [true, 'El usuario es obligatorio'],
  }
}, {
  timestamps: true,
  versionKey: false,
});

EventSchema.method('toJSON', function() {
  const { _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = model( 'Event', EventSchema );
