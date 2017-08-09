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
app.get('/data/:tray/pH/historical', function(req, res) {
    var times = [7,8,9,10,11,12,13,14,15,16,17];
    var data = [7, 7.1, 7.3, 7.25, 8.5, 6.83, 6.7, 7.1, 7.2, 7, 6.86];
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