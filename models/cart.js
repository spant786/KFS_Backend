const mongoose = require('mongoose')
const cart = mongoose.model('cart',{


    product_name: {
        type: String
    },
    quantity:{
        type : String
    }
    })

    module.exports = cart