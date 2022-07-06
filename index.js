const express = require('express');
const dbConnection = require('./database/config');
const cors = require('cors');
require('dotenv').config();

// Create Server
const app = express();

// Database
dbConnection();

// CORS
app.use(cors());

// Body parser
app.use( express.json() );

// Public Directory
app.use( express.static('public') );

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

// Listen App
app.listen(process.env.PORT, () => {
  console.log(`Server running on port: ${ process.env.PORT }`);
});
