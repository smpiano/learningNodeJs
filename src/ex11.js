var fs = require('fs')
var http = require('http')


var httpServer = http.createServer(function (req, res) {
  var reader = fs.createReadStream(process.argv[3])
  reader.pipe(res)
  //res.end()
})

httpServer.listen(process.argv[2])
