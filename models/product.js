const mongoose = require('mongoose')
const product = mongoose.model('Product',{

        product_name: {
            type: String
        },
        product_type:{
            type : String
        },
        product_code:{
            type : String
        },
        price:{
            type : String
        },
        Image: { type: String, 
            required: true }
    })
    module.exports = product