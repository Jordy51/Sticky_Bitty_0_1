const express = require('express');
const { ensureAuthenticated } =  require('../config/auth');
const router = express.Router();

// Note Model
const Note =  require('../models/Note');

// Create Note
router.get('/createNote', ensureAuthenticated, (req, res) => res.render('createNote'));

// Note Handle
router.post('/createNote', ensureAuthenticated, (req, res) => {
    const { title, note } = req.body;
    let errors = [];

    //Check required fields
    if(!title) {
        errors.push({msg: 'Please give a title at least'});
    }

    if(title.length > 25) {
        errors.push({msg: 'Title should be less than 25 characters'})
    }

    const newNote = new Note({
        title,
        note
    });

    newNote.save()
        .then(note => {
            req.flash('success_msg', 'Your note has been saved');
            res.redirect('/dashboard');
        })
        .catch(err => console.log(err));
})

module.exports = router;