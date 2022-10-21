const express = require('express');

//Import MongoDB connection which is initialized in ./config/connection
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
// const routes = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(routes)

//Open/connect/sync with MongoDB databae and then run server
db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });
  