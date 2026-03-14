const mongoose = require('mongoose');

const cropSchema = mongoose.Schema(
    {
        farm: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Farm',
        },
        name: {
            type: String,
            required: [true, 'Please add a crop name'],
        },
        variety: {
            type: String,
        },
        plantedAt: {
            type: Date,
            default: Date.now,
        },
        expectedHarvest: {
            type: Date,
        },
        status: {
            type: String,
            enum: ['Planted', 'Growing', 'Harvested', 'Failed'],
            default: 'Planted',
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Crop', cropSchema);
