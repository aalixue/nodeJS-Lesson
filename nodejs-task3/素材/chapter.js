const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const queryString = require('querystring');
let { chapterList, userList } = require('./chapterData.js');

http.createServer(function(req,res){
    var urlObj = url.parse(req.url);
    var pathName = urlObj.pathname;
    // console.log(pathName);
    if(pathName == '/list'){
        showList(res);
    }
    else if(pathName == '/login'){
        showLogin(res);
    }
    else if(pathName == '/listmanager'){
        showManager(res);
    }
    else if(pathName == '/addChapter'){
        showChapter(res);
    }
    else if(pathName == '/detail'){
        showDetail(res);
    }
    //显示全chapterList
    else if(pathName == '/getChapterList'){
        var str = JSON.stringify(chapterList);
        res.end(str);
    }
    //详情页
    else if(pathName == '/getDetail'){
        var chapterId = queryString.parse(urlObj.query).chapterId;
        var dataList = [];
        chapterList.forEach(function(data,index){
            if(data.chapterId == chapterId){
                dataList.push(data);
            }
        })
        res.writeHead(200, { 'Content-Type': 'application/json' });    
        var str = JSON.stringify(dataList);
        res.end(str);    
    }
    //用户登录
    else if (urlObj.pathname == '/getLogin') {
        var dataStr = "";
        req.on("data", function (chunk) {
            dataStr += chunk;
        });
        req.on("end", function () {
            var user = queryString.parse(dataStr);
            var username = user.username;
            var pwd = user.password;
            for (var i = 0; i < userList.length; i++) {
                if (userList[i].username == username && userList[i].pwd == pwd) {
                    data = 1;
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(data));
                    return;
                }
            }
            data = 0;
            console.log(data);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(data));
        });
    }

    //添加文章
    else if (pathName == '/add') {
        var dataStr = "";
        req.on("data", function (chunk) {
            dataStr += chunk;
        });
        req.on("end", function () {
            var dataObj = queryString.parse(dataStr);
            var title = dataObj.title;
            var content = dataObj.content;
            var date = new Date();
            var chapter = {
                "chapterId": chapterList[chapterList.length - 1].chapterId + 1,
                "chapterName": title,
                "imgPath": "",
                "chapterDes": content,
                "chapterContent": content,
                "publishTimer": `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
                "author": "admin",
                "views": 0
            }
            chapterList.push(chapter);
            data = { code: 0 };
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(data));
        });
    }
    else if(pathName.indexOf('css') >= 0){
        var cssStr = path.join(__dirname,pathName);  
        var cssContent = fs.readFileSync(cssStr);
        res.writeHead(200,{"Content-Type":"text/css"});
        res.end(cssContent);
    }
    else if(pathName.indexOf('js') >= 0){
        var jsStr = path.join(__dirname,pathName);
        var jsContent = fs.readFileSync(jsStr);
        res.writeHead(200,{"Content-Type":"text/js"});
        res.end(jsContent);
    }
    else if(pathName.indexOf('.jpg') >= 0 || pathName.indexOf('.jpeg') >= 0){
        var imgStr = path.join(__dirname,pathName);
        var imgContent = fs.readFileSync(imgStr);
        res.writeHead(200,{"Content-Type":"image/jpg"});
        res.writeHead(200,{"Content-Type":"image/jpeg"});
        res.end(imgContent);
    }
    else if(pathName.indexOf('.png') >= 0){
        var imgStr1 = path.join(__dirname,pathName);
        var imgContent1 = fs.readFileSync(imgStr1);
        res.writeHead(200,{"Content-Type":"image/png"});
        res.end(imgContent1);
    }
    
    
}).listen(8083);
console.log('server is listening 8083');

function showList(res){
    var chapterPath = path.join(__dirname,'/chapterList.html');
    var chapterContent = fs.readFileSync(chapterPath);
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    res.end(chapterContent); 
}

function showLogin(res){
    var loginPath = path.join(__dirname,'/login.html');
    var loginContent = fs.readFileSync(loginPath);
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    res.end(loginContent); 
}

function showManager(res){
    var listPath = path.join(__dirname,'/list.html');
    var listContent = fs.readFileSync(listPath);
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    res.end(listContent); 
}

function showChapter(res){
    var addPath = path.join(__dirname,'/addChapter.html');
    var addContent = fs.readFileSync(addPath);
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    res.end(addContent);
}

function showDetail(res){
    var detailPath = path.join(__dirname,'/chapter.html');
    var detailContent = fs.readFileSync(detailPath);
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    res.end(detailContent);
}