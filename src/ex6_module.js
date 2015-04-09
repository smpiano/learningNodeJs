var filterFiles = function(dir, filter, callback) {
  var fs = require('fs');
  fs.readdir(dir, function(err,list){
    if (err) return callback(err);
    var array=[];
    for(var i = 0; i<list.length; i++){
      var file = list[i];
      if (file.indexOf('.'+filter)>0) array.push(file);
    }
    return callback(null,array);
  });
}

module.exports=filterFiles;

