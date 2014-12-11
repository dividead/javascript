var bl = require('bl')
var http = require('http')
var a  = process.argv[2]

http.get(a, function(x){
  x.pipe(bl(function(err,data){
    //if (err) return err
    var d = data.toString()
    console.log(d.length)
    console.log(d)
  }))
})