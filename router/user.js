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
//router.get('/user',function(req,res){ //without auth 
    router.get('/user',auth,function(req,res){
    User.find().then(function(user_data){
        res.send(user_data);

    
}).catch(function(e){
    
            res.send(e)
        
    });
})
// this is for the admin
router.get('/admin_dashboard',auth,function(req,res){
    user_type = req.user_type
    if(user_type=="admin"){
        res.send("hello admin")
    }
    else{
    res.status(401).send({ error: 'Please authenticate.' })
    }
    
    })
    // this is for the user
router.get('/user_dashboard',auth,function(req,res){
    user_type = req.user_type
    if(user_type=="user"){
        res.send("hello user")
    }
    else{
    res.status(401).send({ error: 'Please authenticate.' })
    }
    
    })

    router.get("/admin_dashboard" , auth, function(){


    })


//benith code is for delete user 
router.delete('/del/:id',function(req,res){
    User.findByIdAndDelete(req.params.id).then(function(){

    }).catch(function(){
        res.send(e)
    })

    
});
//code is for update
router.put('/update/:id',function(req,res){
    User.findOneAndUpdate({_id :req.params.id},req.body).then(function(){
        res.send("updated")
    }).catch(function(e){
        res.send(e)
  
       
    })
})
//login method
router.post("/login", async function (req, res) {
    try {
        const user = await User.checkCrediantialsDb(req.body.email, req.body.password)
        const token =await user.generateAuthToken();
        if(user !=null){
                res.json({
                    message: "login success",
                    status: "true",
                    user_type:user.user_type,
                    newtoken:token
                })
            
        }else{            
            res.json({
                message: "not login success",
                status: "false"
            })
        }
       
    } catch (error) {
        res.json(error)
    }

})

//for single user
router.get('/user/single/:id',function(req,res){ //without auth (middleware)
    // router.get('/user',auth,function(req,res){
     User.findOne({_id : req.params.id}).then(function(user_data){
         res.send(user_data);
 
     
 }).catch(function(e){
     
             res.send(e)
 
});
})


module.exports = router