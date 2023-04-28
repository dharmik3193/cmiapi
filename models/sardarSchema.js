const mongoose = require('mongoose');

const sardarSchema = new mongoose.Schema({

     email: {
          type: String,
          required: true
     },
     date: {
          type: String,
          required: true
     }
})

var sardar = mongoose.model("sardar", sardarSchema);

module.exports = sardar;