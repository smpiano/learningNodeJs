var fs=require('fs');
var name=process.argv[2];
buf = fs.readFileSync(name);
var lines=0;
var newline = 0;
while (newline>=0 && newline<buf.length) {
  var newline = buf.toString().indexOf('\n', newline + 1);
  if (newline>=0) lines++;
}
console.log(lines);
