const express = require('express');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const routes = require('./routes/index.js');
const server = express();

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use(cors({
  origin: ['http://localhost:3000', 'https://henry-music.vercel.app'],
  credentials: true,
  methods: ['GET', 'POST', 'PATCH','OPTIONS', 'PUT', 'DELETE'],
}));

server.use('/', routes);

server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
  });

module.exports = server;