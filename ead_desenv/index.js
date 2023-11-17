const { createServer } = require('http');
// const express = require('express');

const dotenv = require('dotenv');
// const bodyParser = require('body-parser');

dotenv.config();

const app = require('./config/router-factory');
// const app = express();

const http = createServer(app);

process.on('SIGINT', () => http.close((error) => {
  if (error) {
    console.error(`${error.name}: ${error.message}`);
  }

  process.exit(error ? 1 : 0);
}));

http.listen(8989, () => console.log('Listening on *:8989'));