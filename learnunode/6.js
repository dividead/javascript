var six = require('./six')
var a = process.argv

six(a[2],a[3],function(err, list){
  if (err) return err
  list.forEach(function(x){console.log(x)})
})