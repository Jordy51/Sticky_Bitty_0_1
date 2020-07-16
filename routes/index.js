const express = require('express');
const router = express.Router();
const { ensureAuthenticated } =  require('../config/auth');
const db = require('mongoose')

// Note Model
const Note =  require('../models/Note');

// Welcome Page
router.get('/', (req, res) => res.render('welcome'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) => {
    Note.find({ user: req.user.id }).exec((err, notes) => {
        res.render('dashboard', { notes: notes, name: req.user.name } );
    })
});

// View Notes
router.get('/notes', ensureAuthenticated,  (req, res) => res.render('notes'));

// Create Note
router.get('/createNote', ensureAuthenticated, (req, res) => res.render('createNote'))

module.exports = router; 