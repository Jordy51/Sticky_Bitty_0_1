const mongoose = require('mongoose');
const User = require('./User');

const NoteSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId, ref:"User"
    },
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

const Note = mongoose.model('Note', NoteSchema);

module.exports = Note;