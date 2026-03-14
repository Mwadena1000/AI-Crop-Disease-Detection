const Crop = require('../models/Crop');
const Farm = require('../models/Farm');

// @desc    Add a crop to a farm
// @route   POST /api/crops
// @access  Private
const addCrop = async (req, res) => {
    const { farmId, name, variety, plantedAt, expectedHarvest } = req.body;

    const farm = await Farm.findById(farmId);

    if (!farm) {
        res.status(404);
        throw new Error('Farm not found');
    }

    if (farm.owner.toString() !== req.user._id.toString()) {
        res.status(401);
        throw new Error('Not authorized to add crops to this farm');
    }

    const crop = new Crop({
        farm: farmId,
        name,
        variety,
        plantedAt,
        expectedHarvest,
    });

    const createdCrop = await crop.save();

    // Add crop to farm's crops array
    farm.crops.push(createdCrop._id);
    await farm.save();

    res.status(201).json(createdCrop);
};

// @desc    Get crops for a specific farm
// @route   GET /api/crops/:farmId
// @access  Private
const getFarmCrops = async (req, res) => {
    const farm = await Farm.findById(req.params.farmId);

    if (!farm) {
        res.status(404);
        throw new Error('Farm not found');
    }

    if (farm.owner.toString() !== req.user._id.toString() && req.user.role !== 'Admin') {
        res.status(401);
        throw new Error('Not authorized to view crops for this farm');
    }

    const crops = await Crop.find({ farm: req.params.farmId });
    res.json(crops);
};

module.exports = { addCrop, getFarmCrops };
