var http = require('http')
var url = process.argv[2]

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
    console.log(dataConcat.length);
    console.log(dataConcat);
  })
})
