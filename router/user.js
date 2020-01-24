const express = require('express')
const User = require('../models/user')
const router = new express.Router()
const auth = require('../middleware/auth');


router.post("/upload",(req,res)=>{
    //console.log(req.body) (to print data in console)
   var myData = new User(req.body);
   myData.save();
});

//code for get
router.get('/user',function(req,res){ //without auth 
   // router.get('/user',auth,function(req,res){
    User.find().then(function(user_data){
        res.send(user_data);

    
}).catch(function(e){
    
            res.send(e)
        
    });
})
module.exports = router