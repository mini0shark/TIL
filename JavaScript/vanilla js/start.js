// just Runner
var http = require('http');	// 서버 만드는 모듈 불러오기
var fs = require('fs');
const hostname = '127.0.0.1';
const port = 1337;
http.createServer(function(request,response){
    var url = request.url;
    response.writeHead(200, {'Content-type':'text/pain'});
    if(request.url == '/'){
      url = '/src/html/index.html';	// 실행할 url
    }else if(request.url == '/modal'){
        url = '/src/html/modal.html';	// 실행할 url
    }else if(request.url == '/lecture'){
      url = '/src/html/lecture.html';	// 실행할 url
    }else if(request.url == '/todo'){
      url = '/src/html/todo.html';	// 실행할 url
    }
    if(request.url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));
 
}).listen(port, hostname,()=>{
    console.log(`Server running at : http://${hostname}:${port}/`);
});