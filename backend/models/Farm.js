const mongoose = require('mongoose');

const farmSchema = mongoose.Schema(
    {
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        name: {
            type: String,
            required: [true, 'Please add a farm name'],
        },
        size: {
            type: Number, // in acres
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        crops: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Crop',
            },
        ],
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Farm', farmSchema);
