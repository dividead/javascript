var ping = require("ping");

var ip = {alive: 0, dead: 0}
var p = []
console.time('start')
for(var i = 0; i <= 34426978560; i++){
  p.push(ping.promise.probe(i).then(function (res) {
    res.alive ? ip.alive = ip.alive+1 : ip.dead = ip.dead+1
  }))
}

Promise.all(p).then(function(res){
  console.log(ip)
  console.timeEnd('start')
});
