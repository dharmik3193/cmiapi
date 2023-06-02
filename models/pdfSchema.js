const mongoose = require('mongoose');

const pdfSchema = new mongoose.Schema({
    pdfId: String,
    filePath: String,
  });
  
  // Create a PDF model based on the schema
  const PDF = mongoose.model('PDF', pdfSchema)

  module.exports = PDF;
