var http = require('http'),
    port = parseInt(process.env.PORT) || 8001 ;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(sys.exec('node -v'));
}).listen(port);