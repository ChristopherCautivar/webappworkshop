var express = require('express');
var app = express();
//including the express library, but in javascript
app.use(express.static(__dirname));
//acessing express in its directory name (thx express for the global variable)
app.listen(3000);
//port 3000's open
