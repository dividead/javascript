var bl = require('bl'),
    http = require('http'),
    a = process.argv.slice(2),
    r = [], count = 0

for (var i = 0; i < 3; hget(i++));

function hget (i) {
  http.get(a[i], function(x){
    x.pipe(bl(function(err,data){
      if (err) return err
      r[i] = data.toString()
      if (++count===3)  r.forEach(function(x){console.log(x)})
    }))
  })
}