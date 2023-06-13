var express = require('express');
const blog = require('../models/blogSchema');
const catagory = require('../models/catagorySchema');
const contact = require('../models/contactSchema');
const course = require('../models/courseSchema');
const inquiry = require('../models/inquirySchema');
const newsletter = require('../models/newsletterSchema');
const review = require('../models/reviewSchema');
const PDF = require('../models/pdfSchema');
var router = express.Router();
const multer = require('multer');
const fs = require('fs');
const Certificate = require('../models/certificateSchema');

const upload = multer({ dest: 'uploads/' });

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
    var data = await blog.findById(req.params.id);
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

router.post('/add_review',async (req,res,next)=>{
  try {
      var data = await review.create(req.body);
      res.json({
        status:"Success",
        data
      });
  } catch (error) {
      res.json({error});
  }
})

router.get('/get_review',async (req,res,next)=>{
  try {
    var data = await review.find();
    res.json({
      status:"Success",
      data  
    })
  } catch (error) {
    res.json({error})
  }
})

router.post('/upload', upload.single('file'), async (req, res) => {
  const file = req.file;
  const pdfId = req.body.pdfId; // Assuming the PDF ID is sent in the request body
  
  // Check if a file and PDF ID were provided
  if (!file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  if (!pdfId) {
    return res.status(400).json({ error: 'No PDF ID provided' });
  }
  
  // Rename the uploaded file to include the .pdf extension
  const originalFilePath = file.path;
  const newFilePath = `${originalFilePath}.pdf`;
  
  fs.renameSync(originalFilePath, newFilePath);
  
  // Create a new PDF document
  const pdf = new PDF({
    pdfId,
    filePath: newFilePath,
  });
  DiffieHellmanGroup;
  // Save the PDF document to the database
  try {
    await pdf.save();
    return res.json({ message: 'File uploaded successfully', pdfId });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to upload file' });
  }
});

router.get('/download/:pdfId', async (req, res) => {
  const pdfId = req.params.pdfId;

  try {
    // Find the PDF document by PDF ID
    const pdf = await PDF.findOne({ pdfId });

    // Check if the PDF document exists
    if (!pdf) {
      return res.status(404).json({ error: 'PDF not found' });
    }

    // Get the file path from the PDF document
    const filePath = pdf.filePath;

    // Check if the file exists
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: 'File not found' });
    }

    // Set the appropriate headers for the response
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=${pdfId}.pdf`);

    // Create a read stream from the file path and pipe it to the response
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to download file' });
  }
});

router.post('/add_certificate',async (req,res,next)=>{
  try {
      var data = await Certificate.create(req.body);
      res.json({
        status:"Success",
        data
      });
  } catch (error) {
      res.json({error});
  }
})

router.get('/get_certificate/:regId',async (req,res,next)=>{
  try {
    var regId = req.params.regId;
    var data = await Certificate.find({regId});
    res.json({
      status:"Success",
      data  
    })
  } catch (error) {
    res.json({error})
  }
})

module.exports = router;
