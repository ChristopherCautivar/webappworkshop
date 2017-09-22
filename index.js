//serverside javascript
//for concrete explinations of express functions see the frameowr (aka library)
var express = require('express');
//including the express library, but in javascript
var app = express();
//app is an "instance" of our express server
app.use(express.static(__dirname));
//acessing express in its directory name (thx express for the global variable)
app.get('/hello',function(req,res){
  res.json({data:'hello world'});
})
//req is query
//res is response
app.listen(3000);
//send this file diretory to port 3000
