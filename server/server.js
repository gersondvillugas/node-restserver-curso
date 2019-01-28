const express = require('express')
const app = express()
require('./config/config')
const bodyParser=require('body-parser')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
// respond with "hello world" when a GET request is made to the homepage
app.get('/usuario', function (req, res) {
    res.json('get Usuario')
  });

  app.post('/usuario', function (req, res) {
      let body=req.body;
    res.json({
      persona:body
    });
  });
  app.put('/usuario/:id', function (req, res) {
   let id=req.param.id;
    res.json({
       id
    });
  });
  
  app.delete('/usuario', function (req, res) {
    res.json('delete Usuario')
  });
  
   
app.listen(process.env.PORT,()=> {
console.log('escuchando puerto:',process.env.PORT);
});