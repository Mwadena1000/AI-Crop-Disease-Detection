const express = require('express');
const { createFarm, getMyFarms, getFarmById } = require('../controllers/farmController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').post(protect, createFarm).get(protect, getMyFarms);
router.route('/:id').get(protect, getFarmById);

module.exports = router;
