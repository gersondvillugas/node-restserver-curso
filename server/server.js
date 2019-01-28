const express = require('express')
const app = express()
require('./config/config')
const bodyParser=require('body-parser')
const mongoose=require('mongoose');
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(require('./routes/usuario'));
// respond with "hello world" when a GET request is made to the homepage

   mongoose.connect('mongodb://localhost:27017/cafe',(err,res)=>{
       if(err) throw err;
       console.log('base de datos online');
   });
app.listen(process.env.PORT,()=> {
console.log('escuchando puerto:',process.env.PORT);
});