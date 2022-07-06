const express = require('express');
require('dotenv').config();

// Create Server
const app = express();

// Public Directory
app.use( express.static('public') );

// Routes
app.get('/', (_reqquest, response) => {
  response.status(200).json({ ok: true });
});

// Listen App
app.listen(process.env.PORT, () => {
  console.log(`Server running on port: ${ process.env.PORT }`);
});
