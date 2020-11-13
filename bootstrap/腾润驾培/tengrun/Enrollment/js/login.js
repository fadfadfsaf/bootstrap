$(function(){
    $("input[name=but]").click(function(){
        //验证表单
        var names=$("input[name=username]").val();
        var pwd=$("input[name=userpwd]").val();
        $.ajax({
            url:"http://www.qhdlink-student.top/student/login.php",
            type:"post",
            data:{
                "username":names,"userpwd":pwd,"userclass":61,"type":2
            },
          success:function(data){
              if(data=="ok"){
                  localStorage.setItem("linkname",names);
                  alert("我们会在工作日与你联系！");
              }
          }
        })
    })
})