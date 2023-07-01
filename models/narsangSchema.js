const mongoose = require('mongoose');

const narsangSchema = new mongoose.Schema({

     name: {
          type: String,
          required: true
     },
     email: {
          type: String,
          required: true
     },
     mobile: {
          type: String,
          required: true
     },
     subject: {
          type: String,
          required: true
     },
     message: {
          type: String,
          required: true
     }
})

var narsang = mongoose.model("Narsang", narsangSchema);

module.exports = narsang;