var express = require('express')
var app = express();
var PORT = process.env.PORT || 3000;
app.get('/',function(req,res){
    res.send('<h1>express works</h1>');
   });
   app.listen(PORT,function(){
    console.log('Server listening to port 3000');
});