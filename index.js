const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const Product = require('./models/add_product.js');
var app = express();
const port=3000;
app.use(express.static('public'));
app.engine('handlebars',exphbs());
app.set('view engine','handlebars');
app.get('/',(req,res)=>{
    res.render('home');
})
app.get('/seller',(req,res)=>{
    res.render('sellerform');
})
app.listen(port,()=>{
    console.log(`Listening to GroKart on http://localhost:${port}`)
})