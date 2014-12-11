var fs = require('fs')
var a = process.argv
console.log(fs.readFileSync(a[2]).toString().split('\n').length - 1)