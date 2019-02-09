const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Image = new Schema({
  image_id: {
    type: String
  },
},{
    collection: 'image'
});

module.exports = mongoose.model('Image', Image);