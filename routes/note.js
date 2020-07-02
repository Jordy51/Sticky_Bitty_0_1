const express = require('express');
const router = express.Router();
const { ensureAuthenticated } =  require('../config/auth');

// Create Card
router.get('createNote', ensureAuthenticated, (req, res) => res.render('createNote'))

// Cards View
router.get('/notes', ensureAuthenticated,  (req, res) => res.render('notes'));

module.exports = router; 