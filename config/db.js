const mongoose = require('mongoose') ;

async function connectDB(){
    await mongoose.connect('mongodb://127.0.0.1:27017/Ecommerce')
    .then(()=> {
        console.log(`DB CONNECTED...`) ;
    })
    .catch((err) => {
        console.log(`DB CONNECTION FAILED : ${err}`) ;
    })
}

module.exports = connectDB ; 