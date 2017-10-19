var express = require('express');
var multer = require('multer');
var bodyParser = require('body-parser');
var CircularBuffer = require('circular-buffer');

//var MongoClient = require('mongodb').MongoClient
var assert = require('assert')
var url = 'mongodb://localhost:27020/igem'

var expressMongoDb = require('express-mongo-db');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + '/public/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, 'image.jpg');
    }
})

var storage2 = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, __dirname + '/public/uploads');
    },
    filename: function(req, file, cb){
        //cb(null, req.file.filename);
        cb(null, 'test_image.jpg');
    }
})


var upload = multer({ storage: storage });
var upload2 = multer({storage: storage2 });

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(expressMongoDb(url));
app.post('/rfp', function(req, res, next){
    let collection = req.db.collection('rfp-data');
    collection.insert({
        name : req.body.name,
        low_emission: req.body.low_emisson,
        high_emission: req.body.high_emission
        comments: req.body.comments
    });
    res.end();
});

var path = require('path');
app.use("/app", express.static(__dirname + '/app'));
app.use("/node_modules", express.static(__dirname+'/node_modules'));
app.use("/image", function(req, res){
    res.sendFile(path.resolve('./public/uploads/image.jpg'));
})
//7.4 0.1 -0.28 24
app.post('/upload', upload.any(), function(req, res, next){
    console.log(req.body, 'Body');
    console.log(req.files, 'files');
    res.end();
})

app.post('/upload_data', upload2.any(), function(req, res, next){
    res.end();
})

var buf = new CircularBuffer(1);
app.post('/brightness', function(req, res, next){
    console.log(req.body.brightness)
    buf.enq(req.body.brightness);
    res.end();
})

app.get('/data/:tray/brightness', function(req, res){
    var data = buf.get(0);
    var response = {data};
    res.json(response);
})

app.get('/data/:tray/pH', function(req, res) {
    var data = 7.4 + (Math.random() - 0.5) * 2;
    var response = {data};
    res.json(response)
});

app.get('/data/:tray/pH/historical', function(req, res) {
    var times = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    var data = [7, 7.1, 7.3, 7.25, 8.5, 6.83, 6.7, 7.1, 7.2, 7, 6.86, 7, 7.1, 7.3, 7.25, 8.5, 6.83, 6.7, 7.1, 7.2];
    var response = [];
    for(var i = 0; i < times.length; i++){
        response.push({
            time: times[i],
            data: data[i]
        })
    }
    res.json(response)
});

app.get('/data/:tray/ec', function(req, res) {
    var data = 0.1 + (Math.random() - 0.5) * 0.05;
    var response = {data};
    res.json(response)
});

app.get('/data/:tray/ec/historical', function(req, res) {
    var times = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    var data = [0.08, 0.11, 0.12, 0.09, 0.07, 0.10, 0.08, 0.12, 0.07, 0.09, 0.11, 0.08, 0.11, 0.12, 0.09, 0.07, 0.10, 0.08, 0.12, 0.07];
    var response = [];
    for(var i = 0; i < times.length; i++){
        response.push({
            time: times[i],
            data: data[i]
        })
    }
    res.json(response)
});

app.get('/data/:tray/os', function(req, res) {
    var data = -0.28 + (Math.random() - 0.5) * 0.05;
    var response = {data};
    res.json(response)
});

app.get('/data/:tray/os/historical', function(req, res) {
    var times = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    var data = [0.26, 0.30, 0.29, 0.27, 0.31, 0.25, 0.26, 0.28, 0.26, 0.30, 0.29, 0.26, 0.30, 0.29, 0.27, 0.31, 0.25, 0.26, 0.28, 0.26];
    var response = [];
    for(var i = 0; i < times.length; i++){
        response.push({
            time: times[i],
            data: data[i]
        })
    }
    res.json(response)
});

app.get('/data/:tray/temp', function(req, res) {
    var data = 24 + (Math.random() - 0.5);
    var response = {data};
    res.json(response)
});

app.get('/data/:tray/temp/historical', function(req, res) {
    var times = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    var data = [24.22, 23.29, 25.0, 24.24, 23.89, 25.21, 24.0, 23.9, 23.72, 23.6, 24.1, 24.22, 23.29, 25.0, 24.24, 23.89, 25.21, 24.0, 23.9, 23.72];
    var response = [];
    for(var i = 0; i < times.length; i++){
        response.push({
            time: times[i],
            data: data[i]
        })
    }
    res.json(response)
});

app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname+'/app/static/index.html'));
});

app.listen(5000);
