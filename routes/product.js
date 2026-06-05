const express = require('express') ;
const Products = require('../models/Product') ; 
const Router = express.Router() ; // mini instance

Router.get('/products', async (req ,res)=> {
    let data = await Products.find({}) ; 
    res.render('products/index' , {data});   
})

module.exports = Router ;   