const express = require('express');
const router = express.Router();
const { ensureAuthenticated } =  require('../config/auth');

// Welcome Page
router.get('/', (req, res) => res.render('welcome'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) => res.render('dashboard', { name: req.user.name }));

// View Notes
router.get('/notes', ensureAuthenticated,  (req, res) => res.render('notes'));

// Create Note
router.get('/createNote', ensureAuthenticated, (req, res) => res.render('createNote'))

module.exports = router; 