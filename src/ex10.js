var net = require('net')

var norm=function(n){
  return (n<10)?'0'+n:n;
}

var getDate = function() {
  var date = new Date();
  //"2013-07-06 17:42"
  var data = 
    date.getFullYear()+'-'+
    norm(date.getMonth()+1)+'-'+     // starts at 0
    norm(date.getDate())+' '+      // returns the day of month
    norm(date.getHours())+':'+
    norm(date.getMinutes());
  return data;
}

var server = net.createServer(function (socket) {
  socket.write(getDate()+'\n', 'utf8');
  socket.end();
})

server.listen(process.argv[2])
