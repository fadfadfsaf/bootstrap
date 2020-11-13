$(function(){
    var str= location. search;
    console.log(str);
    var str1=str.substr(4,str.length);
    console.log(str1);//id
    $.ajax({
        url:'http://www.qhdlink-student.top/student/newsinfo.php',
        dataType:'json',
        type:'post',
        data:'username=hxh&userpwd=12345678&userclass=61&type=2&m='+str1,
        success:function(data){
            var str2='';
            console.log(data);
            
            $.each(data,function(i,v){
              str2+='<h3>'+v.title_news+'</h3><p>编号：'+v.id_news+'</p><p>时间：'+v.time_news+'</p><p>'+v.info_news+'</p>';
            })
            $("#contents").append($(str2));  
        }

    })
})