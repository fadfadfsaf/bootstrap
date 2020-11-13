$(function(){
    // pc端特色服务鼠标滑过图片上浮特效
    var imgs=$("#imgs").children("img");
    console.log(imgs);
    imgs.mouseenter(function(){
        $(this).css("marginTop","-20px");
    })
    imgs.mouseleave(function(){
        $(this).css("marginTop","0px");
    })

    //新闻模块替换成新闻接口
  
    $.ajax({
        url:'http://www.qhdlink-student.top/student/newsa.php',
        dataType:'json',
        type:'post',
        data:'username=hxh&userpwd=12345678&userclass=61&type=2',
        success:function(data){
            var str='';
            console.log(data);
            $.each(data,function(i,v){
                str+='<a href="news子页面/news_info.html?id='+v.id_news+'">'+v.title_news+'</a>';
            })
            $(".newsInfo").append($(str));    
        }
    
    })
    // 特色服务模块替换成新闻接口
    $.ajax({
        url:'http://www.qhdlink-student.top/student/newsa.php',
        dataType:'json',
        type:'post',
        data:'username=hxh&userpwd=12345678&userclass=61&type=2',
        success:function(data){
            var str='';
            console.log(data);
            $.each(data,function(i,v){
                str+='<div class="_search"><a href="news子页面/news_info.html?id='+v.id_news+'">查看详情</a></div>';                      
         
            })
            var str1=str+'<div class="_search"><a href="news子页面/news_info.html?id=9">查看详情</a></div>'
            $(".aaa").append($(str1));
        }
    
    })
    // 移动端 特色服务模块 换新闻接口
     // 特色服务模块替换成新闻接口
     $.ajax({
        url:'http://www.qhdlink-student.top/student/newsa.php',
        dataType:'json',
        type:'post',
        data:'username=hxh&userpwd=12345678&userclass=61&type=2',
        success:function(data){
            var str='';
            console.log(data);
            $.each(data,function(i,v){
                str+='<a href="news子页面/news_info.html?id='+v.id_news+'"></a>';                      
         
            })
            var str1=str+'<a href="news子页面/news_info.html?id=9"></a>'
            $("#a_phone").append($(str1));
        }
    
    })
})