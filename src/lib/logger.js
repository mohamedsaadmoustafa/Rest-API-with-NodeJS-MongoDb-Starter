const path = require('path');
const winston = require('winston');

const { timestamp, label, combine, json } = winston.format;

const logDirectory = path.resolve('./')+'/logs/logs.log';

const logger = winston.createLogger({
  format: combine(label({ label: 'Store' }), timestamp(), json()),
  transports: [
    new winston.transports.Console({ handleExceptions: true }),
    new winston.transports.File({ filename: logDirectory}),
  ],
});

logger.stream = {
  write: (message, encoding) => {
    logger.info(message);
  },
};

module.exports = logger;