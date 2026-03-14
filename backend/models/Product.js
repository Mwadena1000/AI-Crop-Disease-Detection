const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        seller: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        name: {
            type: String,
            required: [true, 'Please add a product name'],
        },
        price: {
            type: Number,
            required: [true, 'Please add a price'],
        },
        quantity: {
            type: Number,
            required: [true, 'Please add a quantity'],
        },
        category: {
            type: String,
            enum: ['Seeds', 'Fertilizers', 'Tools', 'Produce', 'Machinery'],
            required: true,
        },
        description: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Product', productSchema);
