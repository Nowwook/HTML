var express = require('express')
var app = express()

app.use(express.static('public'))  // 파일 넣기 가능
  
app.get('/index.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "index.html" ) 
})  

// Form 받아주는 곳
app.get('/process_get', function (req, res) {  
response = {  
       first_name:req.query.first_name,  
       last_name:req.query.last_name  
   } 
   console.log(response);  
   res.end(JSON.stringify(response))  // Json타입으로 변환
})  

var server = app.listen(5000, function () {  
  
  var host = server.address().address  
  var port = server.address().port  
  console.log("Example app listening at http://%s:%s", host, port)  
  
})  
