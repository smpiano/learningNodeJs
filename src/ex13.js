var url = require('url')
var http = require('http')


var getUnixTime = function(str) {
  return Date.parse(str)
}

var getISOTime = function(str) {
    var isoDate = new Date()
    isoDate.setTime(getUnixTime(str))
    return isoDate
}

var server = http.createServer(function (req, res) {
  var urlObj = url.parse(req.url, true);
  //req.pipe(function(urlObj){return console.log(urlObj.stringify())}).pipe(res);
  if (urlObj.pathname == '/api/parsetime') {
    var isoDate = getISOTime(urlObj.query.iso)
    var json = JSON.stringify({
        "hour": isoDate.getHours(),
        "minute": isoDate.getMinutes(),
        "second": isoDate.getSeconds()
    })
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(json)
  }
  if (urlObj.pathname == '/api/unixtime') {
    var json = JSON.stringify({"unixtime":getUnixTime(urlObj.query.iso)})
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(json)
  }
})

server.listen(Number(process.argv[2]))
