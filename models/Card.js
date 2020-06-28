const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
    title:{
        type: String,
        required: false
    },
    date:{
        type: String,
        default: Date.now
    }
})

const Card = mongoose.model('Card', CardSchema);

module.exports = Card;