var express = require('express')
 
var app = express()
 
app.get('/data/:tray', function(req, res) {
    var data = {
	name: "test tray 1",
	intensities: [1, 2, 3, 4, 5 ]
    };
    
    //NOT SAFE
    var text = "Data for tray " + req.params["tray"];
    var response = {text:text, data:data}
    res.json(response)
});

app.get('/', function(req, res){
    res.send("Some oxyponics thing...Cornell iGEM 2017??");
});

app.listen(5000)
