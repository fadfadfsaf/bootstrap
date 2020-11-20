$(function () {
    $.ajax({
        url: 'http://www.qhdlink-student.top/student/banner.php',
        type: 'post',
        dataType: 'json',
        data: {
            'username': 'lyx',
            'userpwd': 12345678,
            'userclass': 61,
            'type': 2,
        },
        success: function (data) {
            // console.log(data);
            var i = 0;
            var str = '';

            // 利用计数器效果 点击添加

            $("#btn1").on("click", function () {
                str = '<p><img src="http://www.qhdlink-student.top/' + data[i].path_banner + '" class="showimg"><button class="btn3">删除</button>     <input type="file" name="file" class="btn" value="修改"></p>';
                $("#msg").append($(str));

                // 实现反复添加删除

                if (i < 3) {
                    i++;
                } else {
                    i = 0;
                    alert("没有更多了");
                }
                console.log(i);
                // 动态删除单个p标记
                $(".btn3").on("click", function () {
                    console.log(this);
                    $(this).parent("p").remove();
                })
                
                // 获取上传文件信息
                $(".btn").change(function () {
                    // console.log($(this));
                    var showimg = document.getElementsByClassName('showimg')[0];
                    $(".test").children("img").remove();
                    var file = this.files[0]; 
                    if(window.FileReader) {
                        var fr = new FileReader();
                        fr.readAsDataURL(file);
                        fr.onload = function() {
                            showimg.src = this.result; // 图片可显示出来
                        };
                    } else {
                        alert('修改失败');
                    };
                })
              
            })

            // 全部删除按钮

            $("#btn2").on("click", function () {
                $("#msg").children("p").remove();
            })
        }
    })
})