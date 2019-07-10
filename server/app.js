require('./config/passport.config');
const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const passport = require('passport');

// Inicializando
const app = express();
require('./database');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(passport.initialize());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename: (req, file, cb) => {
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
});
app.use(multer({ storage }).single('imageURL'));
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
    else {
        console.log(err);
    }
});
if (process.env.NODE_ENV === 'production') {
    // Serve static files from the Angular frontend app
    app.use(express.static(path.join(__dirname, '/../frontend/dist/frontend')));
    // Anything that doesn't match the above, send back index.html
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '/../frontend/dist/frontend/index.html'));
    });
}

// Routes
app.use('/api', require('./routes/user.routes'));
app.use('/api/photos/', require('./routes/photo.routes'));
app.use('/api/suppliers/', require('./routes/supplier.routes'));
app.use('/api/internal/', require('./routes/internal.routes'));
app.use('/api/menus/', require('./routes/menu.routes'));

module.exports = app;