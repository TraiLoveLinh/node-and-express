let express = require('express');
let app = express();
console.log("Hello World");

function serve_string(req, res){
    res.send("Hello Express");
}

app.get("",serve_string);



































 module.exports = app;
