const mongoose = require('mongoose');
const add_product = new mongoose.Schema({
    storename:{
        type: String,
        required:true,
        min:2,
        max:255
    },
    email:{
        type: String,
        required:true,
        min:4,
        max:255
    },
    productName:{
        type: String,
        required:true,
        min:4,
        max:255,
    },
    productCategory:{
        type:String,
        required:true,
    },
    productMRP:{
        type: String,
        required:true,
    },
    available:{
        type:Date,
        default:Date.now
    }

})

module.export = mongoose.model('Product',add_product)