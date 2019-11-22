const http = require("http");
const fs = require("fs");
const path = require("path");
var fileName = process.argv[2];

http.createServer(function(req,res){
    if(fileName == undefined){
        var reader =fs.createWriteStream(process.argv[1]);
        reader.pipe(res);
    }
    else{
          
    }
}).listen(8081);