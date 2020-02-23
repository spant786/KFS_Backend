const express = require('express')
require('./database/mongoose')
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}))
const userrouter = require('./router/user')
const productrouter = require('./router/product')
const cartrouter = require('./router/cart')
const cors = require('cors')

app.use(express.json())
app.use((req,res,next)=>{
    next();
})
//app.use("/public", express.static(__dirname + '/public/'))


app.use(express.json())
app.use(userrouter)
app.use(productrouter)
app.use(cartrouter)
app.use(cors)
app.listen(5000);  //this is our port we use