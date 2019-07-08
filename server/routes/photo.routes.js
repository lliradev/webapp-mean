const express = require('express');
const router = express.Router();
const photo = require('../controllers/photo.controller');

router.get('/', photo.getPhotos);
router.post('/', photo.createPhoto);
router.get('/:id', photo.getPhoto);
//router.delete('/:id', photo.deletePhoto);

module.exports = router;

/*const { Router } = require('express');
const router = Router();
const Photo = require('../models/photo');
const cloudinary = require('cloudinary');
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});
const fs = require('fs-extra');

router.get('/', async (req, res) => {
    const photos = await Photo.find();
    res.send(photos);
});

router.post('/', async (req, res) => {
    const { title, description } = req.body;
    console.log(req.file);
    const result = await cloudinary.v2.uploader.upload(req.file.path);
    console.log(result);
    const photo = new Photo({
        title,
        description,
        imageURL: result.url,
        public_id: result.public_id
    });
    await photo.save();
    await fs.unlink(req.file.path);
    console.log(req.body);
    if (!req.file) {
        return console.log('Please upload a file')
    } else {
        console.log(req.file);
    }

    res.send('Chido');
});

router.get('/images/delete/:photo_id', async(req, res) => {
    const { photo_id } = req.params;
    const photo = await Photo.findByIdAndDelete(photo_id);
    const result = await cloudinary.v2.uploader.destroy(photo.public_id);
    console.log(result);
    res.redirect('/images/add');
});

module.exports = router;*/