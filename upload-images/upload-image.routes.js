const express = require('express');
const multer = require('../helper/multer');
const uploadImagesConstants = require('./upload-image.constans');
const uploadImagesService = require('./upload-image.service');
const router = new express.Router();

router.post('/single', multer(uploadImagesConstants.EXTENSIONS)
.single('image'), async (req, res) => {
    const url = await uploadImagesService.uploadSingleImage({ file: req.file, ...req.body });

    res.status(200).send({ url });
});

module.exports = router;