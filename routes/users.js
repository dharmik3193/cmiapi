var express = require('express');
const sardar = require('../models/sardarSchema');
const narsang = require('../models/narsangSchema');
const nodemailer = require('nodemailer');
const pwd = "Dharmik#8814"
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/add-inquiry-si', async (req, res) => {
  try {
    var data = await sardar.create(req.body);
    res.json({
      status: "Success",
      data
    })
  } catch (error) {
    res.json({ error })
  }
})

router.get('/get-inquiry-si', async (req, res, next) => {
  try {
    var data = await sardar.find();
    res.json({
      status: "Success",
      data
    })
  } catch (error) {
    res.json({ error })
  }
})

router.post('/add-inquiry-narsang', async (req, res) => {
  try {
  var data = await narsang.create(req.body);

  const { name, email, message, subject, mobile } = req.body;

  const transporter = nodemailer.createTransport({
    host: "mail.codesignmultimedia.com",
    port: 465,
    secure: true, // use TLS
    auth: {
      user: "others@codesignmultimedia.com",
      pass: pwd,
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false,
    },
  });

  let from = `Narsang Overseas Inquiry <others@codesignmultimedia.com>`

  const mailOptions = {
    from: from,
    to: "narsangoverseas01@gmail.com",
    subject: `${subject}`,
    text: `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nSubject: ${subject}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error:', error);
      res.status(500).json({ error: 'Failed to send email' });
    } else {
      console.log('Email sent:', info.response);
      res.json({ message: 'Email sent successfully' });
    }
  });
      // res.json({
      //   status:"Success",
      //   data
      // })
  } catch (error) {
      res.json({error})
  }
})


module.exports = router;
