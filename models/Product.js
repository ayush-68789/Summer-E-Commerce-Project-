const mongoose = require('mongoose') ; 

const productSchema = new mongoose.Schema({
    name : {
        type: String ,
        trim : true ,
        required : true
    } , 
    img : {
        type : String, 
        trim : true
    }, 
    price : {
        type : Number,
        required : true 
    } ,
    desc : {
        type: String ,
        trim : true
    }
})

const Product = mongoose.model('Product', productSchema) ;

module.exports = Product ;