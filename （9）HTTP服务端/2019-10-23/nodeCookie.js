const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const querystring = require('querystring');

http.createServer(function(req,res){
    //解析资源路径
    var urlObj = url.parse(req.url,true);
    switch(urlObj.pathname){
        case "/":
            showLogin(res);
            break;
        case "/login":
            loginIn(req,res);
            break;
        //判断是否成功
        case "/home":
            showHome(req,res);
            break;
    }
}).listen(8081);

function showLogin(res){
    var filePath = path.join(__dirname,'login.html');
    var fileContent = fs.readFileSync(filePath);
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(fileContent);
    res.end();
}

function loginIn(req,res){
    var formData = '';
    req.on('data',function(chunk){
        formData += chunk;
    })
    req.on('end',function(){
        var formObj = querystring.parse(formData);
        if(formObj.username == 'zhangsan' && formObj.pwd == '123'){
            //设置cookie信息
            res.setHeader('Set-Cookie','username=zhangsan');      
            // res.setHeader('Set-Cookie','username=zhangsan;max-age=60');//max-age=60意味着60秒之后，cookie自己清除掉
            res.end('login success');
        }
        else{
            res.end('login error');
        }
        // console.log(formData);
    })
}

//权限的判断
function showHome(req,res){
    var cookie = req.headers['cookie'];
    if(cookie == undefined){
        showLogin(res);
    }
    else if(cookie.indexOf('username=')>=0){
        res.end('home page');
    }
    else{
        showLogin(res);
    }
}

console.log('server is listening 8081');