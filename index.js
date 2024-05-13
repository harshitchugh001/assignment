// In your index.js or main file

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();

const routes = require('./routes');


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static('public'));





app.use('/api', routes);

// Start the server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`API is running on port ${port}`);
});

module.exports = app;
