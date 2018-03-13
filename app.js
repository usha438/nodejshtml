var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(express.static('public'));
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.get('/',function(req,res){
    res.sendFile( __dirname+ '/name.html');
});

app.post('/process', urlencodedParser, function (req, res) {
	
var response = {
firstname:req.body.fname,
lastname:req.body.lname
};
console.log(response);
res.send(response);
})
 app.listen(8081, function () {

console.log("Example app listening at http://127.0.0.1:8081");
});