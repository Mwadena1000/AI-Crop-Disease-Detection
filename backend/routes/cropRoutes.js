const express = require('express');
const { addCrop, getFarmCrops } = require('../controllers/cropController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').post(protect, addCrop);
router.route('/:farmId').get(protect, getFarmCrops);

module.exports = router;
