const express = require('express');
const { createProduct, getProducts, getProductById } = require('../controllers/productController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').get(getProducts).post(protect, createProduct);
router.route('/:id').get(getProductById);

module.exports = router;
