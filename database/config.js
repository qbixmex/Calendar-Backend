const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Database Online');
  } catch (error) {
    console.log(error);
    throw new Error('Connection to database failed')
  }
};

module.exports = dbConnection;
