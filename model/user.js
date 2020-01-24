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
    tokens: [{
        token: {
        type: String,
        required: true
        }
        }]
       
})

    userSchema.statics.checkCrediantialsDb = async (name, password) =>{

        const user1 = await user.findOne({name : name, password: password})
         return user1;
        }
        userSchema.methods.generateAuthToken = async function () {
            const user = this
           const token = jwt.sign({ _id: user._id.toString() }, 'thisismynewcourse')
           
           console.log(token);
            user.tokens = user.tokens.concat({ token :token })
            await user.save()
            return token
           }
 const user = mongoose.model('user', userSchema)
    module.exports = user