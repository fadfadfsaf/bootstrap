//AjaxTool

function AjaxTool(fn,method,url,async,data){
    //创建Ajax对象
    var xmlHttp;
    if(window.XMLHttpRequest){
        xmlHttp=new XMLHttpRequest();
    }else if(window.ActiveXObject){
        xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
    }

    //打开链接
    xmlHttp.open(method,url,async);

    //设置头信息
    xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");

    //设置返回事件
    xmlHttp.onreadystatechange=change;

    //发送信息
    if(data){
        xmlHttp.send(data);
    }else{
        xmlHttp.send();
    }

    // 响应事件设置
    function change(){
        if(xmlHttp.readyState== 4 && xmlHttp.status == 200){
            var Resdata = xmlHttp.responseText;
            console.log(Resdata);
            // var Res=eval("("+Resdata+")");
            eval('var Res='+Resdata);
            console.log(Res);
            //需要在外部设置响应函数的具体业务逻辑
            fn(Res);
            //BUG问题1，对象的长度不能使用。length获得，需要使用Object.key(obj)或者for in
        }else{
            console.log("连接阶段");
        }
    }
}