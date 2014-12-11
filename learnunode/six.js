var fs = require('fs')
var path = require('path')

module.exports = function(d,f,c){
  fs.readdir(d, function(err,list){
    if (err) return c(err)
    c(null, list.filter(function(x){
      return path.extname(x) === '.'+f
    }))
})
}