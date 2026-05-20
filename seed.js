const mongoose = require('mongoose') ; 
const Product = require('./models/Product') ; 

let sampleData = [
    {
        name : 'I Phone 17 Pro', 
        img : 'https://th.bing.com/th/id/OIP.TCdwWPVIHbuoNidTsimPGQHaHa?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
        price : 134900 , 
        desc : 'Buy Apple iPhone 17 Pro online at best price with offers in India. Apple iPhone 17 Pro (Deep Blue, 512 GB) features and specifications include 512 GB ROM, 48 MP Camera'
    } , 
    {
        name : 'Macbook Pro 2026' ,
        img : `https://m.media-amazon.com/images/I/61h78UMEXjL._SL1500_.jpg`, 
        price : 274990 , 
        desc : `Apple 2026 MacBook Pro Laptop with M5 Pro chip with 18‑core CPU and 20‑core GPU: Built for AI, 41.05 cm (16.2″) Liquid Retina XDR Display, 24GB Unified Memory, 1TB SSD Storage; Space Black`
    }, 
    {
        name : `Samsung S24 Ultra` , 
        img :  'https://m.media-amazon.com/images/I/21nGAfj+EmL._QL70_FMwebp_.jpg' ,
        price : 59780 ,
        desc : 'Samsung Galaxy S24 Snapdragon 5G (Onyx Black, 256 GB) (8 GB RAM)'
    }
]

async function seedDB()
{
    await Product.insertMany(sampleData) ; 
    console.log(`Data Added Succesfully...`) ;
}

module.exports = seedDB ; 