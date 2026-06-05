const path = require('path') ;

const express = require('express') ; 
const app = express() ;

const connectDB = require('./config/db') ;
const seedDB = require('./seed'); 
const productRoutes = require('./routes/product') ; 

connectDB() ; // connect DB
// seedDB() ; // Seeding db

app.set('view engine', 'ejs') ;  // set view engine to ejs
app.set('views', path.join(__dirname, 'views')) ;  // views folder
app.use(express.static(path.join(__dirname , 'public'))) // public folder

app.use(productRoutes) ;

const PORT = 5050 ; 
app.listen((PORT), ()=> {
    console.log(`Server Listening at Port : ${PORT}...`) ;
})