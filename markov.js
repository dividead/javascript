fs = require('fs')
fs.readFile('text.txt', function (err, data) {
  if (err) throw err
  markov(data.toString().replace(/[\,\?\.\(\)\"\:\!\-\;]/g, ''))
})

function markov(s){
  var a = s.split(' '), h = {}
  for (var i = 0; i < a.length-2; i++){
    if (h.hasOwnProperty(a[i] + ' ' + a[i+1]))
      h[a[i] + ' ' + a[i+1]].push(a[i+2])
    else
      h[a[i] + ' ' + a[i+1]] = [a[i+2]]
  }
  var str = ''
  var n = ~~(Math.random()*a.length)
  var x = a[n] + ' ' + a[n+1]
  var v = h[x]
  v = v[~~(Math.random()*v.length)]
  str += x
  var n = str.match(/\S+$/)[0]
  for(var l = 0; l < 15; l++){
    str += ' ' + v
    v = h[n + ' ' + v]
    v = v[~~(Math.random()*v.length)]
    n = str.match(/\w+$/)[0]
  }
  console.log(str)
}
