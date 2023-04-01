const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({

     meta_title: {
          type: String,
          required: true
     },
     meta_description: {
          type: String,
          required: true
     },
     path_name: {
          type: String,
          required: true
     },
     thumbnail: {
          type: String,
          required: true
     },
     image: {
          type: String,
          required: true
     },
     title: {
          type: String,
          required: true
     },
     date: {
          type: String,
          required: true
     },
     description: {
          type: Array,
          required: true
     },
     comment: {
          type: Array
     },
     catagory: {
          type: String,
          required: true
     },
})

var blog = mongoose.model("blog", blogSchema);

module.exports = blog;