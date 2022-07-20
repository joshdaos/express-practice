const path = require('path');

// dependencies
const express = require('express');
const bodyParser = require('body-parser')

const app = express();

const PORT = 3000

// imports
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// body parser
app.use(bodyParser.urlencoded({ extended: false}));

// calls admin routes
app.use('/admin', adminRoutes);
// calls shop routes (must be last middleware route - contains '/' home route)
app.use(shopRoutes);
// error page route (serves error handling)
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'error.html'));
});

app.listen(PORT, function() {
    console.log(`Loading dummy app from PORT ${PORT}`);
});
