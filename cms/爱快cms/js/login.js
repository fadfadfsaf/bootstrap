$(function () {

    $("input[name=btn]").on("click", function () {
        var names = $("input[name=username]").val();
        var pwd = $("input[name=userpwd]").val();
        console.log("hello world");
        $.ajax({
            url: "http://www.qhdlink-student.top/student/login.php",
            type: "post",
            data: {
                "username": names, "userpwd": pwd, "userclass": 61, "type": 2
            },
            success: function (data) {
                console.log(data);
                if(data="ok"){
                    location.href="index.html";
                }else{
                    alert("账号或密码不正确")
                }
            }
        })
        // location.href="index.html";
    })
})





































// $(function () {
//     $("input[name=btn]").click(function () {
//         var names = $("input[name=username]").val();
//         var pwd = $("input[name=userpwd]").val();
//         $.ajax({
//             url: "http://www.qhdlink-student.top/student/login.php",
//             type: "post",
//             data: {
//                 "username": names, "userpwd": pwd, "userclass": 61, "type": 2
//             },
//             success: function (data) {
//                 console.log(data);
//                 if (data == "ok") {
//                     localStorage.setItem("linkname",names);
//                     location.href = "index.html";
//                 }else{
//                     alert("用户名或密码错误")
//                 }
//             }
//         })
//     })
// })