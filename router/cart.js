const express = require('express')
const Cart = require('../models/cart')
const router = new express.Router()

router.post("/cartAdd",(req,res)=>{
    //console.log(req.body) (to print data in console)
   var myData = new Cart(req.body);
   myData.save();
});

//code for get
router.get('/getCart',function(req,res){ 
    Cart.find().then(function(user_data){
        res.send(user_data);
        
    });
    router.delete('/delCart/:id',function(req,res){
        Cart.findByIdAndDelete(req.params.id).then(function(){
    
        }).catch(function(){
            res.send(e)
        })
    
        
    });
});

router.put('/updateCart/:id',function(req,res){
    Cart.findOneAndUpdate({_id :req.params.id},req.body).then(function(){
        res.send("updated")
    }).catch(function(e){
        res.send(e)
    })
})

    module.exports = router