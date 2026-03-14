const express = require('express');
const { getWeather } = require('../controllers/weatherController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/:city', protect, getWeather);

module.exports = router;
