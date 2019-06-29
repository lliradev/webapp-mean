if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const { mongoose } = require('./database');
/* IMAGES */
const multer = require('multer');
const path = require('path');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename: (req, file, cb) => {
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
});
app.use(multer({ storage }).single('image'));

// Routes
app.use('/api/photos/', require('./routes/photo.routes'));

// Start the server
app.listen(app.get('port'), () => {
    console.log('Server on port: ', app.get('port'));
    console.log('Enviroment: ', process.env.NODE_ENV);
});