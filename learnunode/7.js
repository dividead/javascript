var http = require('http')
var a = process.argv[2]
http.get(a, function(res){
  res.setEncoding('utf8')
  res.on('data', function(data){
    console.log(data)
  })
})

//res.on('data', console.log)