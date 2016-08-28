var fs = require('fs');
function readFile(fileName) {

    //promise最初的状态是初始态
    /*
     * 调用resolve表示成功了 就会把状态改为成功态
     * 调用reject表示失败了 就会把状态改为失败态
     *
     * */
    return new Promise(function (resolve, reject) {

        //当初案件一个promise实例的时候 此函数就开始执行
        fs.readFile(fileName, 'utf8', function (err, data) {
            if (err) reject(err);
            else resolve(data);


        })

    })
}
//promise的链调用 在回调函数里 返回一个新的promise
readFile('34.txt').then(function (data) {//2.txt
    return readFile(data);
}).then(function (data) {//3.txt
    return readFile(data)
}).then(function (data) {//3
    console.log(data);
}).catch(function(err){//不管这个和两条总任何一个地方很粗错了 就会调用catch
    console.log(err);
});
