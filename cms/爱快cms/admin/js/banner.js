$(function () {
    $.ajax({
        url: "http://mock.shtodream.cn/mock/5fb25b208e13766542114e13/ikuai/banners",
        type: "post",
        typeData: "json",
        success: function (obj) {
            console.log(obj);
            var data = obj.data;
            console.log(data);
            var str = '';
            $.each(data, function (i, v) {
                console.log(v);
                str += '<p>id：' + v.id_b + ';<span> name :' + v.name_b + '</span><img src="' + v.img_b + '"><button class="but0">修改</button><button class="but1">删除</button></p>'
            })
            $("#msg").append($(str));
            $(".but0").click(function () {
                alert("hello")
            })
            $(".but1").click(function () {
                var r = confirm("是否确认删除");
                var x;
                if (r == true) {
                    x = "你按下了\"确定\"按钮!";
                    $(this).parent().remove();
                }
                else {
                    x = "你按下了\"取消\"按钮!";
                }
                console.log(confirm);
            })
        }
    })


    $(".add").change(function () {
        console.log($(this))
        var file = this.files[0];
        var imgs=document.createElement("img");
        if (window.FileReader) {
            var fr = new FileReader();
            fr.readAsDataURL(file);
           
            fr.onload = function () {
                console.log(this);
                imgs.src = this.result; // 图片可显示出来
            };
            
            $("#add").one("click",function () {

                alert("添加成功")
                $("#msg").append($(imgs));
            })
        } else {
            alert('添加失败');
        };


    })


    // $(".add").change(function () {
    //     // console.log($(this));
    //     var showimg = document.getElementsByClassName('showimg')[0];
    //     $(".test").children("img").remove();
    //     var file = this.files[0];
    //     if (window.FileReader) {
    //         var fr = new FileReader();
    //         fr.readAsDataURL(file);
    //         fr.onload = function () {
    //             showimg.src = this.result; // 图片可显示出来
    //         };
    //     } else {
    //         alert('修改失败');
    //     };
    // })
})