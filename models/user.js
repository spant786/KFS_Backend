const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const userSchema =new  mongoose.Schema({
    // User means the model for login and register
    name: {
        type: String
    },
    email:{
        type : String
    },
    address:{
        type : String
    },
    number:{
        type : String
    },
    password:{
        type : String
    },
    user_type:
    {
        type : String
    },
  
})


    module.exports = user