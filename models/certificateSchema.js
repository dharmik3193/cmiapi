const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({
    regId: String,
    filePath: String,
  });
  
  // Create a PDF model based on the schema
  const Certificate = mongoose.model('Certificate', certificateSchema)

  module.exports = Certificate;