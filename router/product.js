const express = require('express')
const Product = require('../models/product')
const router = new express.Router()
const path = require('path');
const multer = require('multer');
const app = express();


//app.use(express.static(path.join(__dirname , "images")))

const storage = multer.diskStorage({
  destination:"images",
  filename: function(req, file, cb) {
    const ext = path.extname(file.originalname)
    cb(null, Date.now() + "hello" + ext);
  
  }
});


const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});


router.post("/product",upload.single('Image'),(req,res)=>{
    //console.log(req.body)
   var myData = new Product(req.body);
   myData.save();
});

router.get('/getProduct',function(req,res){
    Product.find().then(function(user_data){
        res.send(user_data);

    
}).catch(function(e){
    
            res.send(e)
        
    });

    
})
router.get('/viewproduct',function(req,res){
  Product.findById(req.body.productid).then(function(user_data){
      res.send(user_data);

  
}).catch(function(e){
  
          res.send(e)
      
  });

  
})


router.delete('/delProduct/:id',function(req,res){
    Product.findByIdAndDelete(req.params.id).then(function(){

    }).catch(function(){
        res.send(e)
    })

    
});

router.put('/updateProduct/:id',function(req,res){
    Product.findOneAndUpdate({_id :req.params.id},req.body).then(function(){
        res.send("updated")
    }).catch(function(e){
        res.send(e)
    })
})

module.exports = router