const express = require('express');

const router = express.Router();

// Route handling middleware
router.get('/', (req, res, next) => {
    // console.log('In another middleware');
    res.send('<h1>Hello World!</h1>');
});

module.exports = router