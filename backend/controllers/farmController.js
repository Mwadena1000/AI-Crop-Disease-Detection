const Farm = require('../models/Farm');

// @desc    Create a new farm
// @route   POST /api/farms
// @access  Private (Farmer)
const createFarm = async (req, res) => {
    const { name, size, location } = req.body;

    const farm = new Farm({
        owner: req.user._id,
        name,
        size,
        location,
    });

    const createdFarm = await farm.save();
    res.status(201).json(createdFarm);
};

// @desc    Get user farms
// @route   GET /api/farms
// @access  Private
const getMyFarms = async (req, res) => {
    const farms = await Farm.find({ owner: req.user._id }).populate('crops');
    res.json(farms);
};

// @desc    Get farm by ID
// @route   GET /api/farms/:id
// @access  Private
const getFarmById = async (req, res) => {
    const farm = await Farm.findById(req.params.id).populate('crops');

    if (farm) {
        if (farm.owner.toString() !== req.user._id.toString() && req.user.role !== 'Admin') {
            res.status(401);
            throw new Error('Not authorized to view this farm');
        }
        res.json(farm);
    } else {
        res.status(404);
        throw new Error('Farm not found');
    }
};

module.exports = { createFarm, getMyFarms, getFarmById };
