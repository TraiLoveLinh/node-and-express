let express = require('express');
let app = express();
console.log("Hello World");

//function serve_string(req, res){
//    res.send("Hello Express");
//}
//app.get("",serve_string);
let indexIhtml_absolutePath = __dirname + '/views/index.html'; 
function serve_file(req, res){
    res.sendFile(indexIhtml_absolutePathabsolutePath);
}
app.get("", serve_file);

app.use("/public", express.static(__dirname + '/public'));































 module.exports = app;
