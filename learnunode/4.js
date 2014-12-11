var fs = require('fs')
var a = process.argv
fs.readFile(a[2], 'utf8', function(err,data) {
  if (err) return err
 console.log(data.split('\n').length - 1)
})