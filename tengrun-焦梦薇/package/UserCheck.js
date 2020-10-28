$(function(){
    var user=localStorage.getItem("user");
    if(!user){
        alert("登陆已过期");
        location.href="../index.html";
    }


    $("#exit").click(function(){
        localStorage.clear();

        location.href="../index.html";
    })
})