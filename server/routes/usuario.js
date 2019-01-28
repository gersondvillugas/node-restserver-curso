const express = require('express')
const app = express()

app.get('/usuario', function (req, res) {
    res.json('get Usuario Loca')
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
  module.exports=app;