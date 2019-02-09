
const express = require('express');
const app = express();
const imageRoutes = express.Router();

let Image = require('../models/image');

imageRoutes.route('/add').post(function (req, res) {
    let image = new Image(req.body);
    image.save()
        .then(image => {
            res.status(200).json({ 'image': 'image added successfully' });
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

imageRoutes.route('/').get(function (req, res) {
    Image.find(function (err, images) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(images);
        }
    });
});

module.exports = imageRoutes;