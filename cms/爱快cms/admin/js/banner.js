$(function () {
    $.ajax({
        url: "http://mock.shtodream.cn/mock/5fb25b208e13766542114e13/ikuai/banners",
        type: "post",
        typeData: "json",
        success: function (obj) {
            // console.log(obj);
            var data = obj.data;
            // console.log(data);
            var str = '';
            $.each(data, function (i, v) {
                // console.log(v);
                str += '<p>id：' + v.id_b + ';<span> name :' + v.name_b + '</span><img src="' + v.img_b + '"><button class="but0">修改</button><button class="but1">删除</button></p>'
            })
            $("#msg").append($(str));


            $(".but0").click(function () {
                var img = $(this).prev();
                // img.remove();
                console.log(img[0].src);
                // var fi= $("<input type='file'>")
                // console.log(fi);
                   img[0].src='';

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

    var a = 2;
    $(".add").change(function () {
        var file = this.files[0];
        var imgs = $("<img>");
        if (window.FileReader) {
            var fr = new FileReader();
            fr.readAsDataURL(file);

            fr.onload = function () {
                console.log(this);
                imgs.attr("src", this.result); // 图片可显示出来

            };

            $("#add").one("click", function () {
                a++;

                var ps = $("<p></p>");
                ps.append('id: ' + a + '<span>图片名称</span>')
                ps.append(imgs);
                ps.append('<button class="but2">修改</button><button class="but3">删除</button>')
                $("#msg").append(ps);
                alert("添加成功")

                $(".but2").on("click", function () {
                    alert(this);
                })
                $(".but3").one("click", function () {
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
            })

        } else {

            alert('添加失败');

        };
    })
})