var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dbconfig = require('../config/dbconfig.json'); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/add',function(req,res,next){
  // console.log(req.body);
  var title = req.body.title;
  var content = req.body.content;
  var con = mysql.createConnection(dbconfig);//dbconfig就是dbconfig里面的对象
  con.connect();//连接上
  con.query("insert into chapters(title,content) values(?,?)",[title,content],function(err,result){
    if(err){
      console.log(err);
    }else{
      console.log(result);
      res.end('insert success');
    }
  });//操作数据库的语句   不会直接把数据拼接到sql里面
})

router.get('/list',function(req,res,next){
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from chapters",function(err,result){
    if(err){
      console.log(err);
    }else{
      // console.log(result);
      res.render("list",{chapterList:result});
    }
  });//查询操作
})

router.get('/del',function(req,res,next){
  var chapterId = req.query.chapterid;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("delete from chapters where chapterid=?",[chapterId],function(err,result){
    if(err){
      console.log(err);
    }else{
      res.end('selete success');
    }
  })
})

/**
 *update chapters set content-? where chapterid=? 
 */

module.exports = router;
