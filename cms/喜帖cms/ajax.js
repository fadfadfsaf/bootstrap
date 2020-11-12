
// method:方式可以去get或者post
// url: 接口地址
// asy: 类型布尔类型，true异步，false同步
// data:向后台提交的数据，格式为ur1encode格式
// fn:是有参函数，参数是后端的返回值
// */
function getData(fn, method, url, asy, data) {
    // 二、创建ajax对象
    var xmlHttp;
    if (window.XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    //打开链接
    xmlHttp.open(method, url, asy);
    //传值时使用get属性获得表单值
    //设置头信息
    xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //设置响应信息
    xmlHttp.onreadystatechange = change;
    //发送
    if(data){
        xmlHttp.send(data);
    }else{
        xmlHttp.send();
    }
    //只用ajax传输数据，console.log(str)输出ok
    function change() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            var str = xmlHttp.responseText;
            fn(str);
        } else {
            console.log("链接阶段");
        }
    }
}
// 调用
// function teacher(b){
//     console.log(b)
// }
// getData(teacher,"GET","http://www.qhdlink-student.top/test/teacher.php",true)
// function longin(s){
//     console.log(s);
// }
// getData(teacher,"POST","http://www.qhdlink-student.top/student/login.php",true,"username=lyx&userpwd=12345678&userclass=61&type=2&sub=登录")