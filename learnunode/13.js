var http = require('http')
var url = require('url')

var server = http.createServer(function (req,res){
  if (req.method != 'GET') console.log(";_;")
  var r = url.parse(req.url, true).query.iso
  var d = new Date(r)
  var hms = {"hour":d.getHours(),
           "minute":d.getMinutes(),
           "second":d.getSeconds()}
  res.writeHead(200, { 'Content-Type': 'application/json' })
  var epoch = {'unixtime': d.getTime()}
  var path = url.parse(req.url, true).pathname.split('/')[2]
  console.log(path)
  if (path === 'parsetime'){
    res.end(JSON.stringify(hms, null, '\t'))
  } else {
    res.end(JSON.stringify(epoch, null, '\t'))
  }
})

server.listen(process.argv[2])