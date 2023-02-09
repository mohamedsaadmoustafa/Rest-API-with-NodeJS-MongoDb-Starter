const logger = require('./logger')

module.exports = (error, req, res, next) => {
    logger.error(error.message || error);
    res.status(error.status || 500).json({
        message: error.message || 'Unexpected Server Error',
    });
};