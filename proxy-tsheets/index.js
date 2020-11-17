require('dotenv').config();
const http = require('http');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const { PORT = 5000, HOST = 'localhost', BASE_URL = '/' } = process.env;

app.use(morgan('dev'));
app.use(cors());

app.use(BASE_URL, require('./controllers')());

app.use((req, res) => {
  res.end('Resource not found');
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).end('Server error');
});

app.set('port', PORT);

/**
 * Create HTTP server
 */
const server = http.createServer(app);

server.listen(PORT);
server.on('error', (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  // const bind = typeof PORT === 'string' ? `Pipe ${PORT}` : `Port ${PORT}`;
  const bind = `Port ${PORT}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
});
server.on('listening', () => {
  const addr = server.address();
  const message =
    typeof addr === 'string'
      ? `Listening on pipe ${addr}`
      : `Listening on port ${addr.port}, http://localhost:${addr.port}`;
  console.info(message);
});
