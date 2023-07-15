const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname, '/.env') });
let express = require('express');
let app = express();
//console.log("Hello World");

//function serve_string(req, res){
//    res.send("Hello Express");
//}
//app.get("",serve_string);

let indexIhtml_absolutePath = __dirname + '/views/index.html';
function serve_file(req, res) {
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

const messageStyle = process.env.MESSAGE_STYLE;
app.get("/json", (req, res)=>{
    
    const data = {
        "message": (messageStyle=='uppercase') ? "HELLO JSON" : "Hello Json"
    }
    res.json(data);
});
*/

app.use("", (req, res, next) => {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
});


app.get('/now', function (req, res, next) {
    req.time = new Date().toString();
    next();
}, function (req, res) {
    data = {
        time: req.time
    }
    res.json(data);
});
app.get('/:word/echo', function(req, res, next){
    const word = req.params.word;
    const data = {
        echo: word
    }
    res.json(data);
});
app.get('/name?first=firstname&last=lastname', function(req, res){
    const data = {
        name: req.query
    }
    res.json(data);
});



























module.exports = app;
