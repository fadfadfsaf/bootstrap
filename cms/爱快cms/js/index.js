$(function () {
    if (localStorage.getItem("linkname")) {
        $("#admin").html("欢迎" + localStorage.getItem("linkname") + "登陆!")
    }
    else {
        alert("请登录");
        location.href = "login.html";
    }
    $("#btn").on("click", function () {
        localStorage.clear();
        window.opener = null;
        window.open(" ", "_self").close();
    })

    //树状菜单和选项卡的联动
    //给菜单添加单击事件

    $("#treeMenu").tree({
        onClick: function (node) {
            //控制台打印node内容
            //console.log(node);
            //获取attributes属性,判断是菜单还是菜单描述
            var attrs = node.attributes;
            if (attrs == null || attrs.url == null) {
                return;
            }
            //判断选项卡是否存在
            var has = $("#div_tabs").tabs("exists", node.text);
            if (has) {
                //选中存在的选项卡
                $("#div_tabs").tabs("select", node.text);
            } else {
                //创建新的选项卡面板
                $("#div_tabs").tabs("add", {
                    title: node.text,
                    closable: true,
                    content: "<iframe src=" + attrs.url + " style='width:100%;height:98%' frameborder='0'/>"
                })
            }


        }
    })
})