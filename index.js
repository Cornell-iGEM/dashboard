var express = require('express');
var multer = require('multer');
var bodyParser = require('body-parser');
var CircularBuffer = require('circular-buffer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + '/public/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, 'image.jpg');
    }
})

var upload = multer({ storage: storage })

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
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
    var times = [1, 2, 3, 4, 5, 6, 7,8,9,10,11,12,13,14,15,16,17, 18, 19 , 20];
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

app.get('/data/:tray/os', function(req, res) {
    var data = -0.28 + (Math.random() - 0.5) * 0.05;
    var response = {data};
    res.json(response)
});

app.get('/data/:tray/temp', function(req, res) {
    var data = 24 + (Math.random() - 0.5);
    var response = {data};
    res.json(response)
});

app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname+'/app/static/index.html'));
});

app.listen(5000);
