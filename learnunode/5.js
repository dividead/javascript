var fs = require('fs')
var a = process.argv
var path = require('path')
fs.readdir(a[2], function(err, list){ 
  list.forEach(function(x){ 
    if (path.extname(x) === '.'+ a[3]) console.log(x)
  })
})