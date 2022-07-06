const express = require('express');

// Create Server
const app = express();

app.get('/', (_reqquest, response) => {
  response.status(200).json({ ok: true });
});

// Listen App
app.listen(4000, () => {
  console.log(`Server running on port: ${ 4000 }`);
});
