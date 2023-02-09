const express = require('express');
const router = express.Router();
const validateObjectId = require('../middleware/validations');
const controller = require("../controllers/items.controller.js")

router
  .route('/')
  .get(controller.get_items)
  .post(controller.post_item)

router
  .route('/random')
  .get(controller.get_random_item)

router
  .route('/:id')
  .get(validateObjectId, controller.get_item)
  .patch(validateObjectId, controller.update_item)
  .delete(validateObjectId, controller.delete_item)

module.exports = router;