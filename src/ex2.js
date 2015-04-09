var i=0;
var size=process.argv.length;
var acum=0;
for(i=2; i<size; i++){
  acum += Number(process.argv[i]);
}
console.log(acum);
