const Product = require('../models/Product');

// @desc    Create a new product listing
// @route   POST /api/products
// @access  Private
const createProduct = async (req, res) => {
    const { name, price, quantity, category, description } = req.body;

    const product = new Product({
        seller: req.user._id,
        name,
        price,
        quantity,
        category,
        description,
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
};

// @desc    Get all products
// @route   GET /api/products
// @access  Public
const getProducts = async (req, res) => {
    const products = await Product.find({}).populate('seller', 'name email');
    res.json(products);
};

// @desc    Get product by ID
// @route   GET /api/products/:id
// @access  Public
const getProductById = async (req, res) => {
    const product = await Product.findById(req.params.id).populate('seller', 'name email');

    if (product) {
        res.json(product);
    } else {
        res.status(404);
        throw new Error('Product not found');
    }
};

module.exports = { createProduct, getProducts, getProductById };
