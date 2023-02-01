const mongoose = require('mongoose');

const catagorySchema = new mongoose.Schema({

     catagory: {
          type: String,
          required: true
     }
})

var catagory = mongoose.model("catagory", catagorySchema);

module.exports = catagory;