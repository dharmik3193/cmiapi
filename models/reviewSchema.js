const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    review: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
})

var review = mongoose.model("review", reviewSchema);

module.exports = review;