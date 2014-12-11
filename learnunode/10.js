var net = require('net')

var server = net.createServer(function (socket){
  var date = new Date()
  socket.end(date.getFullYear() +'-'+("0" + (date.getMonth() + 1)).slice(-2)+
  '-'+ date.getDate()+' '+ ('0' + date.getHours()).slice(-2) +
  ':'+date.getMinutes()+'\n')
})

server.listen(process.argv[3])