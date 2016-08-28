var express = require('express');
var app = express();
var sessions = require('express-session');
var flash = require('connect-flash');
app.use(sessions({
    resave:true,
    secret:'zfpx',
    saveUninitialized:true
}));
/*
* flash是存储在session中的一段内容
* 可以多次写
* 可以读 可以写
*
*
* */
app.get('/write',function(req,res){
    //第一个参数是消息的类型  第二个参数是消息的内容
    req.flash('success','成功1');
    res.send('写入消息');
});
app.get('/read',function(req,res){
    //传一个参数是读取消息
    var msg = req.flash('success');
    res.send(msg);
});
app.listen(9090);