/* jQuery-ajax的语法 记得引用jquery
$(function(){
    $.ajax({
        url:后台地址,
        dataType: 返回的数据类型,//xml html(可以放标记) script(纯js) json(多种数据类型都是json) jsonp(跨域格式) text(返回纯字符串)
        beforeSend:要求为Function类型的参数，发送请求前可以修改XMLHttpRequest对象的函数，例如添加自定义,
        data: 向后台传送的数据,
        type:请求方式,
        success:function(obj){
           obj:后台数据的返回值
        }

        timeout:请求时间,
        async:同步异步,
        
        cache:默认true设置缓存 flase将不会从浏览器缓存中加载请求信息,

    })
})
*/
$(function(){
    $.ajax({
        url:'http://www.qhdlink-student.top/student/coach.php',
        dataType: "json",
        type:'post',
        data:'username=lzy&userpwd=12345678&userclass=61&type=2',
        success:function(data){
            console.log(data);
            var str='';
            var obj=data;
            console.log(obj);
            $.each(obj,function(i,v){
                //星星
                var imgs='<img src="1.png">';
                var a='';//空字符串
                var index=v.evaluate_coach;//下标
                for(var i=0;i<index;i++){//循环添加
                   a+=imgs;
                }

                str+='<div><img src="http://www.qhdlink-student.top/'+v.path_coach+'">'+'<h4>姓名：'+v.name_coach+'</h4><h3>编号:'+v.id_coach+'</h3><h3>加入朗科时间:'+v.tage_coach+'</h3><h3>以前职位:'+v.type_coach+'</h3><h3>目前职位:'+v.honor_coach+'</h3><div class="star">'+a+'</div></div>';
            })
            $("#msg").append($(str));  
        }

    })
})

$(function(){
    $.ajax({
        url:'http://www.qhdlink-student.top/student/coach.php',
        dataType: "json",
        type:'post',
        data:'username=lzy&userpwd=12345678&userclass=61&type=2',
        success:function(data){
            console.log(data);
            var str='';
            var obj=data;
            console.log(obj);
            $.each(obj,function(i,v){
                //星星
                var imgs='<img src="1.png">';
                var a='';//空字符串
                var index=v.evaluate_coach;//下标
                for(var i=0;i<index;i++){//循环添加
                   a+=imgs;
                }

                str+='<div><img src="http://www.qhdlink-student.top/'+v.path_coach+'">'+'<h4>姓名：'+v.name_coach+'</h4><h3>编号:'+v.id_coach+'</h3><h3>加入朗科时间:'+v.tage_coach+'</h3><h3>以前职位:'+v.type_coach+'</h3><h3>目前职位:'+v.honor_coach+'</h3><div class="star">'+a+'</div></div>';
            })
            $("#msg").append($(str));  
        }

    })
})

