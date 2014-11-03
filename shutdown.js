var http = require('http');
var process = require('child_process');
http.createServer(function (req, res) {
  process.exec('shutdown -s -t 1', function(err, stdout, stderr){
    console.log(err);
  });
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(8888, '0.0.0.0');
console.log('Server running at http://127.0.0.1:8888/');
