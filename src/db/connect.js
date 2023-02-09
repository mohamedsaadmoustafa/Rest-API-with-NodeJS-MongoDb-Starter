const mongoose = require('mongoose');
const logger = require("../lib/logger");
const {MONGODB_URI} = require("../config/database.config.js")

module.exports = () => {
  mongoose.set('strictQuery', true);
  mongoose.connect(MONGODB_URI, () => {
    logger.info('Connected to MongoDB!!');
  });
};
