const express = require('express')
require('./database/mongoose')
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}))
const userrouter = require('./router/user')
const cors = require('cors')


app.use(express.json())
app.use(userrouter)
app.use(cors)
app.listen(5000);  //this is our port 