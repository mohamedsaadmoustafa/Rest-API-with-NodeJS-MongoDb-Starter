const express = require('express');
const itemRoutes = require('./item.routes');

const router = express.Router();

router.use('/api/item', itemRoutes);

module.exports = router;