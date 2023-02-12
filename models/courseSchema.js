const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
     
     meta_title:{
          type: String,
          required:true
     },
     meta_description:{
          type: String,
          required:true
     },
     path_name:{
          type: String,
          required:true
     },
     thumbnail:{
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
     catagory: {
          type: String,
          required: true
     },
     description: {
          type: String,
          required: true
     },
     level: {
          type: String,
          required: true
     },
     duration: {
          type: String,
          required: true
     },
     rating: {
          type: Number,
          required: true
     }
})

var course = mongoose.model("course", courseSchema);

module.exports = course;