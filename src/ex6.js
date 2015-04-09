var ex6 = require('./ex6_module.js');

ex6(process.argv[2],process.argv[3],function(err,data){
  if (err) console.error('hubo error ', err);
  for(var i=0;i<data.length;i++){
    console.log(data[i]);
  }
});
