let express = require('express');
let app = express();
console.log("Hello World");

//function serve_string(req, res){
//    res.send("Hello Express");
//}

//app.get("",serve_string);
let absolutePath = __dirname + '/views/index.html';

app.get(absolutePath);



































 module.exports = app;
