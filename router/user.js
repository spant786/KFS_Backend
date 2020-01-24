const express = require('express')
const User = require('../models/user')
const router = new express.Router()
const auth = require('../middleware/auth');


router.post("/upload",(req,res)=>{
    //console.log(req.body) (to print data in console)
   var myData = new User(req.body);
   myData.save();
});


module.exports = router