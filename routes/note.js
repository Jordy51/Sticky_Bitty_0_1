const express = require('express');
const router = express.Router();

// Create Note
router.get('/createNote', (req, res) => res.render('createNote'));

// Note Handle

module.exports = router;