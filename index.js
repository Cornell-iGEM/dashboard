var express = require('express');
 
var app = express();
var path = require('path');
app.use("/app", express.static(__dirname + '/app'));
app.use("/node_modules", express.static(__dirname+'/node_modules'));
//7.4 0.1 -0.28 24
app.get('/data/:tray/pH', function(req, res) {
    var data = 7.4 + (Math.random() - 0.5) * 2;
    var response = {data};
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