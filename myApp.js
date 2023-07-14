let express = require('express');
let app = express();
console.log("Hello World");

//function serve_string(req, res){
//    res.send("Hello Express");
//}
//app.get("",serve_string);
let absolutePath = __dirname + '/views/index.html';
function serve_file(req, res){
    res.sendFile(absolutePath);
}
app.get("", serve_file);

































 module.exports = app;
