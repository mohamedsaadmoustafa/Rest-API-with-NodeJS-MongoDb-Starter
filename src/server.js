const express = require('express');
const morgan = require('morgan');
const serverless = require('serverless-http');
// local modules
const connectDB = require('./db/connect.db');
const errorHandler = require('./lib/error.handler');
const logger = require('./lib/logger');
const routes = require('./routes/routes');
const limiter = require('./utils/rateLimit')

const app = express();
const httpReqLogFormat = ':method :url :status :res[content-length] - :response-time ms';
const httpReqLogger = morgan(httpReqLogFormat, { stream: logger.stream });

// connect to database
//connectDB();

// middleware
app.use(limiter)
app.use(express.json());
app.use(httpReqLogger);

// error handling
app.use(errorHandler);

// routes
app.use('/', routes);

app.use((req, res, next) => {
  res.status(404).json({ message: 'Path not found!' });
});

// export app
module.exports = app;
module.exports.handler = serverless(app);