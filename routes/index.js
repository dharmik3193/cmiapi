var express = require('express');
const blog = require('../models/blogSchema');
const catagory = require('../models/catagorySchema');
const contact = require('../models/contactSchema');
const course = require('../models/courseSchema');
const inquiry = require('../models/inquirySchema');
const newsletter = require('../models/newsletterSchema');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({
    data:"Success"
  })
});


router.post('/add_course', async function (req, res, next) {
  try {
    var data = await course.create(req.body);
    res.json({
      status: "Success",
      data
    });
  } catch (error) {
    res.json({ error })
  }
})

router.get('/getall_courses', async (req, res, next) => {
  try {
    var data = await course.find();
    res.json({
      status: "Success",
      data
    })
  } catch (error) {
    res.json({ error })
  }
})

router.get('/course/:id', async (req, res, next) => {
  try {
    var data = await course.findById(req.params.id)
    res.json({
      status: "Success",
      data
    })
  } catch (error) {
    res.json({ error })
  }
})

router.post('/add_catagory', async (req, res, next) => {
  try {
    var data = await catagory.create(req.body);
    res.json({
      status: "Success",
      data
    })
  } catch (error) {
    res.json({ error })
  }
})

router.get('/get_catagory', async (req, res, next) => {
  try {
    var data = await catagory.find();
    res.json({
      status: "Success",
      data
    })
  } catch (error) {
    res.json({ error })
  }
})

router.get('/catagory/:id', async (req, res, next) => {
  try {
    var data = await catagory.findById(req.params.id)
    res.json({
      status: "Success",
      data
    })
  } catch (error) {
    res.json({ error })
  }
})

router.post('/add_inquiry', async (req, res, next) => {
  try {
    try {
      var data = await inquiry.create(req.body);
      res.json({
        status: "Success",
        data
      })
    } catch (error) {
      res.json({ error })
    }
  } catch (error) {

  }
})

router.get('/get_inquiry', async (req, res, next) => {
  try {
    var data = await inquiry.find();
    res.json({
      status: "Success",
      data
    })
  } catch (error) {
    res.json({ error })
  }
})

router.get('/inquiry/:id', async (req, res, next) => {
  try {
    var data = await inquiry.findById(req.params.id)
    res.json({
      status: "Success",
      data
    })
  } catch (error) {
    res.json({ error })
  }
})

router.post('/add_newsletter', async (req, res, next) => {
  try {
    var data = await newsletter.create(req.body);
    res.json({
      status: "Success",
      data
    })
  } catch (error) {
    res.json({ error })
  }
})

router.get('/newsletter', async (req, res, next) => {
  try {
    var data = await newsletter.find();
    res.json({
      status: "Success",
      data
    })
  } catch (error) {
    res.json({ error })
  }
})

router.post('/add_blog',async (req,res,next)=>{
  try {
    var data = await blog.create(req.body);
    res.json({
      status:"Success",
      data
    })
  } catch (error) {
    res.json({error})
  }
})

router.get('/get_blog',async (req,res,next)=>{
  try {
    var data = await blog.find();
    res.json({
      status:"Success",
      data
    })
  } catch (error) {
    res.json({error})
  }
})

router.get('/blog/:id',async (req,res,next)=>{
  try {
    var data = await blog.findById(req.params);
    res.json({
      status:"Success",
      data
    })
  } catch (error) {
    res.json({error})
  }
})

router.post('/contact',async (req,res,next)=>{
  try {
      var data = await contact.create(req.body);
      res.json({
        status:"Success",
        data
      })
  } catch (error) {
      res.json({error})
  }
})

router.get('/get_contact',async (req,res,next)=>{
  try {
    var data = await contact.find();
    res.json({
      status:"Success",
      data  
    })
  } catch (error) {
    res.json({error})
  }
})

module.exports = router;
