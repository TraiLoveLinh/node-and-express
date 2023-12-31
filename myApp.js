//require('dotenv').config();
let express = require('express');
const bodyParser = require('body-parser');
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
*/
app.get("/json", (req, res)=>{
    const messageStyle = process.env.MESSAGE_STYLE;
    const data = {
        "message": "Hello json"
    }
    if (messageStyle == 'uppercase'){
        data['message'] = data['message'].toUpperCase();

    }
    res.json(data);
});


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
app.get('/name', function(req, res){
    const data = {
        name: req.query['first'] + " " + req.query['last']
    };
    res.json(data);
});
app.use("", bodyParser.urlencoded({extended: false}));
app.post('/name', function(req, res){
    const data = {
        name: req.body['first'] + " " + req.body['last']
    };
    res.json(data);
});

























module.exports = app;
