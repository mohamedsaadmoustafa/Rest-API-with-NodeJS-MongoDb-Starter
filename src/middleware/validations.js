const mongoose = require('mongoose');
const { BadRequestError } = require('../lib/errors.js');

module.exports = (req, res, next) => {
  const ObjectId = mongoose.Types.ObjectId;
  if (!ObjectId.isValid(req.params.id)) {
    //console.log(`!ObjectId.isValid(${req.params.id})`);
    throw new BadRequestError('Invalid ObjectId in request params');
  }
  next();
};