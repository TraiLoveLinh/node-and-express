require('dotenv').config();
let express = require('express');
let app = express();
console.log("Hello World");

//function serve_string(req, res){
//    res.send("Hello Express");
//}
//app.get("",serve_string);
 
let indexIhtml_absolutePath = __dirname + '/views/index.html'; 
function serve_file(req, res){
    res.sendFile(indexIhtml_absolutePath);
}
app.get("", serve_file);
app.use("/public", express.static(__dirname + '/public'));
/*
function serve_json(req, res){
    const data = {
        "message": "Hello json"
    }
    res.json(data);
}
app.get("/json", serve_json);
*/
app.get("/json", (req, res)=>{
    const messageStyle = process.env.MESSAGE_STYLE;
    const data = {
        "message": (messageStyle=='uppercase') ? "HELLO JSON" : "Hello Json"
    }
    res.json(data);
});







 
























 module.exports = app;
