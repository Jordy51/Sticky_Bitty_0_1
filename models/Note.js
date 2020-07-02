const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    note:{
        type: String,
        reuired: false
    },
    date:{
        type: String,
        default: Date.now
    }
})

const Note = mongoose.model('Card', NoteSchema);

module.exports = Note;