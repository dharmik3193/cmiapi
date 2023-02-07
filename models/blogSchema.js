const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({

     image: {
          type: String,
          required: true
     },
     title: {
          type: String,
          required: true
     },
     date : {
          type: String,
          required:true
     },
     description : {
          type: String,
          required: true
     },
     comment : {
          type: Array
     }
})

var blog = mongoose.model("blog", blogSchema);

module.exports = blog;