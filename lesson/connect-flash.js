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
* flash�Ǵ洢��session�е�һ������
* ���Զ��д
* ���Զ� ����д
*
*
* */
app.get('/write',function(req,res){
    //��һ����������Ϣ������  �ڶ�����������Ϣ������
    req.flash('success','�ɹ�1');
    res.send('д����Ϣ');
});
app.get('/read',function(req,res){
    //��һ�������Ƕ�ȡ��Ϣ
    var msg = req.flash('success');
    res.send(msg);
});
app.listen(9090);