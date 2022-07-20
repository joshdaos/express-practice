const path = require('path');

const express = require('express');

const router = express.Router();

// Route handling middleware
router.get('/', (req, res, next) => {
    // console.log('In another middleware');
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

module.exports = router