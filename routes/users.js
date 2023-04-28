var express = require('express');
const sardar = require('../models/sardarSchema');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/add-inquiry-si',async (req,res) => {
  try {
    var data = await sardar.create(req.body);
    res.json({
      status:"Success",
      data
    })
} catch (error) {
    res.json({error})
}
})

router.get('/get-inquiry-si',async (req,res,next)=>{
  try {
    var data = await sardar.find();
    res.json({
      status:"Success",
      data  
    })
  } catch (error) {
    res.json({error})
  }
})

module.exports = router;
