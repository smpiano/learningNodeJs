var fs = require('fs');
fs.readdir(process.argv[2], function(err,list){
  if (err) throw err;
  for(var i = 0; i<list.length; i++){
    var file = list[i];
    if (file.indexOf('.'+process.argv[3])>0) console.log(file)
  }
})
