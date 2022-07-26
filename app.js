const path = require('path');

// dependencies
const express = require('express');
const bodyParser = require('body-parser')

const app = express();

const PORT = 3000

// imports
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// body parser
app.use(bodyParser.urlencoded({ extended: false}));
// static middleware (brings in css)
app.use(express.static(path.join(__dirname, 'public')));

// calls admin routes
app.use('/admin', adminData.routes);
// calls shop routes (must be last middleware route - contains '/' home route)
app.use(shopRoutes);
// 'error page' middleware function (serves error handling)
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'error.html'));
});

app.listen(PORT, function() {
    console.log(`Loading dummy app from PORT ${PORT}`);
});
