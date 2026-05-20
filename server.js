const express = require('express') ; 
const connectDB = require('./config/db') ; 
const seedDB = require('./seed') ;

const app = express() ;

connectDB() ; 
// seedDB() ;

const PORT = 5050 ; 
app.listen(PORT , () => {
    console.log(`Listening at PORT : ${PORT}`) ;    
})