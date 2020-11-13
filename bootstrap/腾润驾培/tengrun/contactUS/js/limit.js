$(".menustart").click(function(event) {
	if ($(".nav>.container").children().eq(0).css("display") != "none") {
		$.fn.dianji($(".twomenupc"),0);
	}else{
		$.fn.dianji($(".twomenumd"),0);
		$(".vip").css("display","none");//点击课程介绍 显示二级菜单，并关闭腾润会员的二级菜单
	}
	 $(document).one("click", function(e){//点击除了课程介绍的二级菜单以外元素会收起二级菜单
		if(e.target!=($(".twomenumd"))){
		    $(".twomenumd").hide();	
			$(".twomenupc").hide();	//pc点击其他地方隐藏二级菜单
		}
	});
	event.stopPropagation();//阻止事件冒泡，防止触发上面的事件
})

// 腾润会员二级菜单
$(".vipmenu").click(function(event) {
	$.fn.dianji($(".vip"),0);
	$(".twomenumd").css("display","none");//点击腾润会员显示二级菜单，并关闭课程介绍的二级菜单
	 $(document).one("click", function(e){//点击除了腾润会员的二级菜单以外元素会收起二级菜单
		if(e.target!=($(".vip"))){
		      $(".vip").hide();			
		}	
	});
	event.stopPropagation();//阻止事件冒泡
})
// 腾润会员二级菜单
$(".icon-iconfontmofangdaohang").click(function(){
	if($(".mdtwomenubutton").css("display") == "none") {
		$(".mdtwomenubutton").slideDown(200);
	}
	else{
		$(".mdtwomenubutton").slideUp(200);
	}
})
$(".icon-fenxiang").click(function(){
	$.fn.dianji($(".share"),0)
})
/* jqury封装方法 */
$.fn.dianji=function(thisdom,s){
	if (thisdom.css("display") == "none") {
		thisdom.show(s);
	} else {
		thisdom.hide(s);
	}
}

