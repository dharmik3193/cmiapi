const mongoose = require('mongoose');

const newsletterSchema = new mongoose.Schema({
     email: {
          type: String,
          required: true
     }
})
var newsletter = mongoose.model("newsletter", newsletterSchema);
module.exports = newsletter;