const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
  fs.createReadStream('index.html').pipe(response);
}).listen(8080, ()=>{
  console.log('listening on http://localhost:8080');
});