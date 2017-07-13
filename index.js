var express = require('express');
 
var app = express();
var path = require('path');
app.use("/app", express.static(__dirname + '/app'));
app.use("/node_modules", express.static(__dirname+'/node_modules'));

app.get('/data/:tray', function(req, res) {
    var data = {
	name: "test tray 1",
	intensities: [1, 2, 3, 4, 5 ]
    };
    
    //NOT SAFE
    var text = "Data for tray " + req.params["tray"];
    var response = {text:text, data:data};
    res.json(response)
});

app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname+'/app/static/index.html'));
});

app.listen(5000);