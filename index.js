const express = require('express');
require('dotenv').config();

// Create Server
const app = express();

// Body parser
app.use( express.json() );

// Public Directory
app.use( express.static('public') );

// Routes
app.use('/api/auth', require('./routes/auth'));

// Listen App
app.listen(process.env.PORT, () => {
  console.log(`Server running on port: ${ process.env.PORT }`);
});
