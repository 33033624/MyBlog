var fs = require('fs');
function readFile(fileName) {

    //promise�����״̬�ǳ�ʼ̬
    /*
     * ����resolve��ʾ�ɹ��� �ͻ��״̬��Ϊ�ɹ�̬
     * ����reject��ʾʧ���� �ͻ��״̬��Ϊʧ��̬
     *
     * */
    return new Promise(function (resolve, reject) {

        //��������һ��promiseʵ����ʱ�� �˺����Ϳ�ʼִ��
        fs.readFile(fileName, 'utf8', function (err, data) {
            if (err) reject(err);
            else resolve(data);


        })

    })
}
//promise�������� �ڻص������� ����һ���µ�promise
readFile('34.txt').then(function (data) {//2.txt
    return readFile(data);
}).then(function (data) {//3.txt
    return readFile(data)
}).then(function (data) {//3
    console.log(data);
}).catch(function(err){//����������������κ�һ���ط��ִܴ��� �ͻ����catch
    console.log(err);
});
