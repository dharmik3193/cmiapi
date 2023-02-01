const mongoose = require('mongoose');

const inquirySchema = new mongoose.Schema({

     name: {
          type: String,
          required: true
     },
     email: {
          type: String,
          required: true
     },
     course: {
          type: String,
          required: true
     }
})

var inquiry = mongoose.model("inquiry", inquirySchema);

module.exports = inquiry;