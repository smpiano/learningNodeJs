var http = require('http')

var i=2;
var request = function(url) {
  http.get(url, function(response){
    response.setEncoding('utf8')
    var dataConcat="";
    response.on("data", function(data){
      if (data === undefined) console.log();
      else dataConcat+=data;
    })
    response.on("error", function(error){
      console.error(error);
    })
    response.on("end", function(end){
      console.log(dataConcat)
      if (i<4) request(process.argv[++i])
    })
  });
}
request(process.argv[i])

