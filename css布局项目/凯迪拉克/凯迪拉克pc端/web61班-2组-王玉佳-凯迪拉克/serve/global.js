function isPc() {

	var h = window.location.host;
	if (/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))) {
		if (window.location.href.indexOf("?mobile") < 0) {
			try {
				if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
					window.location.href = "http://" + h + "/wap";
				} else if (/iPad/i.test(navigator.userAgent)) {

				} else {

				}
			} catch (e) {}
		}
	} else {

	}
}

isPc();



var global = {

	createLayout: function(type, img, text, flash) {
		var str = "";

		str += "<div id='layoutDiv'>";
		str += "<div class='bg'></div>";

		str += "<div class='bd'>";
		str += "<div class='closeLayout'></div>";
		if (flash == "t") {
			str += '<object style="position:absolute;top:51px;left:58px;" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="364" height="364">';
			str += '<param name="movie" value=' + img.replace("jpg", "swf") + '>';
			str += '<param name="quality" value="high">';
			str += '<embed src=' + img.replace("jpg", "swf") + ' quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="364" height="364"></embed>';
			str += '</object>';
		}
		str += "<img src=" + img + " />";
		str += "</div>";

		str += "</div>";



		$("body").append(str);

		//绑定关闭按钮时间
		$(".closeLayout").click(function() {
			$("#layoutDiv").remove();
		});
	},
	createActiveSec: function() {

		//创建二级导航的当前状态
		if (globalCurCar == "overview") {
			$(".secNavTitle li.overview").addClass("active");
		}

		if (globalCurCar == "finance") {
			$(".secNavTitle li.finance").addClass("active");
		}

		if (globalCurCar == "configure") {
			$(".secNavTitle li.configure").addClass("active");
		}

		if (globalCurCar == "picture") {
			$(".secNavTitle li.picture").addClass("active");
		}

		if (globalCurCar == "plusser") {
			$(".secNavTitle li.plusser").addClass("active");
		}

		if (globalCurCar == "newsNav") {
			$(".secNavTitle li.news").addClass("active");
		}

		if (globalCurCar == "qaNav") {
			$(".secNavTitle li.qaNav").addClass("active");
		}

		if (globalCurCar == "newaction") {
			$(".secNavTitle li.action").addClass("active");
		}

		if (globalCurCar == "pinpai") {
			$(".secNavTitle li.pinpai").addClass("active");
		}

		if (globalCurCar == "history_heritage") {
			$(".secNavTitle li.history").addClass("active");
		}

		if (globalCurCar == "maganize") {
			$(".secNavTitle li.maganize").addClass("active");
		}

		if (globalCurCar == "carser") {
			$(".secNavTitle li.carser").addClass("active");
		}

		if (globalCurCar == "shouhou") {
			$(".secNavTitle li.shouhou").addClass("active");
		}

		if (globalCurCar == "peijian") {
			$(".secNavTitle li.peijian").addClass("active");
		}

		if (globalCurCar == "weihu") {
			$(".secNavTitle li.weihu").addClass("active");
		}

		if (globalCurCar == "appdown") {
			$(".secNavTitle li.appdown").addClass("active");
		}

		if (globalCurCar == "magazineNav") {
			$(".secNavTitle li.magazine").addClass("active");
		}

		if (globalCurCar == "introduct") {
			$(".secNavTitle li.pinpai").addClass("active");
		}

		if (globalCurCar == "yanbao") {
			$(".secNavTitle li.yanbao").addClass("active");
		}

		if (globalCurCar == "story") {
			$(".secNavTitle li.story").addClass("active");
		}

		if (globalCurCar == "storyS") {
			$(".secNavTitle li.storyS").addClass("active");
		}

		if (globalCurCar == "onstar") {
			$(".secNavTitle li.onstar").addClass("active");
		}

		if (globalCurCar == "liuxue") {
			$(".secNavTitle li.liuxue").addClass("active");
		}

		if (globalCurCar == "musiccenter") {
			$(".secNavTitle li.musiccenter").addClass("active");
		}

		if (globalCurCar == "musichall") {
			$(".secNavTitle li.musichall").addClass("active");
		}

		if (globalCurCar == "lions") {
			$(".secNavTitle li.lions").addClass("active");
		}
		if (globalCurCar == "space") {
			$(".secNavTitle li.space").addClass("active");
		}


		var l = globalFinace.length;


		var link = globalFinace.substring(0, l - 4);

		if (link == "atsl") {
			$(".navTitle li.atsl a").addClass("act");
		}

		if (link == "cts") {
			$(".navTitle li.cts a").addClass("act");
		}

		if (link == "ct6") {
			$(".navTitle li.ct6 a").addClass("act");
		}

		if (link == "xts") {
			$(".navTitle li.xts a").addClass("act");
		}

		if (link == "xt5") {
			$(".navTitle li.xt5 a").addClass("act");
		}

		if (link == "ct5") {
			$(".navTitle li.ct5 a").addClass("act");
		}

		if (link == "xt4") {
			$(".navTitle li.xt4 a").addClass("act");
		}

		if (link == "srx") {
			$(".navTitle li.srx a").addClass("act");
		}

		if (link == "escalade") {
			$(".navTitle li.esc a").addClass("act");
		}

		if (link == "ct6phev") {
			$(".navTitle li.ct6phev a").addClass("act");
		}

		if (link == "cue") {
			$(".navTitle li.cue a").addClass("act");
		}

		if (link == "plus") {
			$(".navTitle li.plus a").addClass("act");
		}

		if (link == "onstar") {
			$(".navTitle li.onstar a").addClass("act");
		}


		//创建所有的导航,通用的导航,监测按钮事件
		if (window.location.href.indexOf("srx") != -1 || window.location.href.indexOf("escalade") != -1 || window.location.href.indexOf("xt5") != -1 || window.location.href.indexOf("xt4") != -1) {
			$(".secNavTitle li.overview a").attr("href", "/suv/" + link + ".html");
		} else {
			$(".secNavTitle li.overview a").attr("href", "/sedan/" + link + ".html");
		}
		$(".secNavTitle li.overview a").attr("onclick", "addClickPc('车型页" + link + "-车型概览')");
		$(".secNavTitle li.configure a").attr("href", "/config/" + link + ".html");
		$(".secNavTitle li.configure a").attr("onclick", "addClickPc('车型页" + link + "-车型配置');addSGMPCClick('car_config','凯迪拉克',\'" + link + "\')");
		$(".secNavTitle li.finance a").attr("href", "/finance/" + link + ".html");
		$(".secNavTitle li.finance a").attr("onclick", "addClickPc('车型页" + link + "-购车金融方案');addSGMPCClick('price','凯迪拉克',\'" + link + "\')");
		if (window.location.href.indexOf("cts") != -1) {
			$(".secNavTitle li.finance").css("display", "none");
		}
		$(".secNavTitle li.picture a").attr("href", "/picture/" + link + ".html");
		$(".secNavTitle li.picture a").attr("onclick", "addClickPc('车型页" + link + "-美图与视频')");
		$(".secNavTitle li.manual a").attr("href", "/catalogue/?car=" + link); //下载链接
		$(".secNavTitle li.manual a").attr("onclick", "addClickPc('车型页" + link + "-产品手册下载')");

		$(".secNavTitle li.atslact a").attr("onclick", "addClickPc('车型页" + link + "-ats@l')");
		$(".secNavTitle li.atslsport a").attr("onclick", "addClickPc('车型页" + link + "-运动进化论')");

		$(".secNavTitle li.atslact a").attr("onclick", "addClickPc('车型页" + link + "-ats@l')");
		$(".secNavTitle li.atslsport a").attr("onclick", "addClickPc('车型页" + link + "-运动进化论')");

		$(".secNavTitle li.xtsCs a").attr("onclick", "addClickPc('车型页" + link + "-xts创新体验')");
		$(".secNavTitle li.xtsBoao a").attr("onclick", "addClickPc('车型页" + link + "-xts三重礼遇')");

		$(".secNavTitle li.srx66 a").attr("onclick", "addClickPc('车型页" + link + "-66号公路')");
	},
	getQueryString: function(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = window.location.search.substr(1).match(reg);
		if (r != null) return unescape(r[2]);
		return null;
	},
	addSF: function(src, w, h, a) {

		//video:播放地址
		//auto:是否自动播放，play=自动播放，stop=手动播放, (在服务器端才有效果)
		var _flashvars = {
			video: src,
			auto: a
		};

		var _params = {
			menu: "false",
			allowFullScreen: "true"
		};
		//as Js 交互时用，标签的name、id、全屏允许
		var _attributes = {
			name: "myFlash",
			id: "myFlash",
			allowFullScreen: "true"
		};
		//flash地址、容器、尺寸宽、尺寸高、版本、测试
		swfobject.embedSWF("/video/player.swf", "flashContainer", w, h, "9.0.0", "/video/expressInstall.swf", _flashvars, _params, _attributes);
	},
	addChromeSf: function(src, w, h, a) {
		var _str = '<video id="chromeVideoPicture" src='+src+' controls="controls" style="width:'+w+'px;height:'+h+'px;"></video>';	
		$("#flashContainer").append(_str);
		$("#chromeVideoPicture")[0].play();

	},
	scrollInit: function() {
		if ($(".overviewNav").length != 0) {
			//IE8 不支持此事件
			if (window.addEventListener) {
				window.addEventListener('scroll', function(event) {
					if ($(window).scrollTop() >= 530) {
						$(".overviewNav").addClass('fixedOverview');
					} else {
						//console.log(1);
						$(".overviewNav").removeClass('fixedOverview');
					}
				}, false);
			} else if (window.attachEvent) {
				window.attachEvent('scroll', function(event) {
					if ($(window).scrollTop() >= 530) {
						$(".overviewNav").addClass('fixedOverview');
					} else {
						//console.log(1);
						$(".overviewNav").removeClass('fixedOverview');
					}
				}, false);
			}

		}

		var p=0,t=0;


		window.addEventListener('scroll', function(event) {
			p = $(window).scrollTop();
			if (p >= 110 && t < p) {
				$('.rightFixedDerive').css({'margin-right':-36});
			} else if(p < 110) {
				$('.rightFixedDerive').css({'margin-right':0});
			} else if( t > p) {
				$('.rightFixedDerive').css({'margin-right':0});
			}
			// console.log("t:"+t);
        	setTimeout(function(){ t = p ; },0)
		}, false);


	},
	isMobile: function(val) {
		if (val == "") {
			return false;
		}
		if (!val.match(/^1[3|4|5|6|7|8|9][0-9]\d{4,8}$/) || val.length != 11) {
			return false;
		} else {
			return true;
		}
	},

	isEmail: function(val) {
		if (val == "") {
			return false;
		}
		if (!val.match(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/) || val.length == "") {
			return false;
		} else {
			return true;
		}
	},
	//取得cookie    
	getCookie: function(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';'); //把cookie分割成组    
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i]; //取得字符串    
			while (c.charAt(0) == ' ') { //判断一下字符串有没有前导空格    
				c = c.substring(1, c.length); //有的话，从第二位开始取    
			}
			if (c.indexOf(nameEQ) == 0) { //如果含有我们要的name    
				return unescape(c.substring(nameEQ.length, c.length)); //解码并截取我们要值    
			}
		}
		return false;
	},
	//设置cookie    
	setCookie: function(name, value, seconds) {
		seconds = seconds || 0; //seconds有值就直接赋值，没有为0，这个根php不一样。    
		var expires = "";
		if (seconds != 0) { //设置cookie生存时间    
			var date = new Date();
			date.setTime(date.getTime() + (seconds * 1000));
			expires = "; expires=" + date.toGMTString();
		}
		document.cookie = name + "=" + escape(value) + expires + "; path=/"; //转码并赋值    
	},
	regSearchFn: function(val, json) {

		if (val == "") {
			if ($("#searchLX").length != 0) {
				$("#searchLX").remove();
			}
			return false;
		}

		if ($("#searchLX").length != 0) {
			$("#searchLX").remove();
		}

		var newArr = [];
		//联想输入正则匹配
		for (var i = 0; i < json.length; i++) {
			if (json[i].toLowerCase().indexOf(val.toLowerCase()) != -1) {
				newArr.push(json[i]);
			}
		}


		var t = parseInt($("#kwSearchText").offset().top) + 24;
		var l = $("#kwSearchText").offset().left - 1;

		var str = "<div id='searchLX' style='top:" + t + "px;left:" + l + "px;'><ul>";

		for (var j = 0; j < newArr.length; j++) {
			str += "<li>" + newArr[j] + "</li>";
		}

		str += "</ul></div>";

		$("body").append(str);

		$("#searchLX li").click(function() {
			window.location.href = "/plus/newsSearch.html?kw=" + $(this).text();
		});

	}
}

global.createActiveSec();
global.scrollInit();

function driveBtnTest() {
	var getdriveBtnTest = global.getCookie("getdriveBtnTest");
	//console.log(getdriveBtnTest)
	var driveBtnColor;
	if (getdriveBtnTest == false) {
		var ra = Math.floor(Math.random() * 100);
		if (ra <= 30) {
			driveBtnColor = "orderDriveBtn";
		} else {
			driveBtnColor = "orderDriveBtnR";
		}
		global.setCookie("getdriveBtnTest", driveBtnColor);
	} else {
		driveBtnColor = getdriveBtnTest;
	}

	$("#driveTopBtn").addClass(driveBtnColor);
}

// driveBtnTest();

/* 给预约试驾按钮加参数 */
addTestDriveParams();
function addTestDriveParams() {
	var _carType;
	var _url= location.href.split('?')[0];
	if(/ct5/i.test(_url)){
		_carType= 'ct5';
	}
	else if(/atsl/i.test(_url)){
		_carType= 'atsl';
	}
	else if(/xts/i.test(_url)){
		_carType= 'xts';
	}
	else if(/ct6/i.test(_url)){
		_carType= 'ct6';
	}
	else if(/xt4/i.test(_url)){
		_carType= 'xt4';
	}
	else if(/xt5/i.test(_url)){
		_carType= 'xt5';
	}
	else if(/ct5/i.test(_url)){
		_carType= 'ct5';
	}
	else if(/xt6/i.test(_url)){
		_carType= 'xt6';
	}
	if(_carType){
		$('#driveTopBtn').attr('href', $('#driveTopBtn').attr('href')+ '?car='+ _carType);
		$('#rightFixedDerive a').attr('href', $('#rightFixedDerive a').attr('href')+ '?car='+ _carType);
		$('.topMenu li').eq(4).find('a').attr('href', $('.topMenu li').eq(4).find('a').attr('href')+ '?car='+ _carType);
	}
}

$("#driveTopBtn").click(function(event) {
	if ($(this).hasClass("orderDriveBtn")) {
		driveTopBtnFn("drive_grey");
	} else {
		driveTopBtnFn("drive_red");
	}
});

function driveTopBtnFn(type) {
	$.ajax({
		url: '/api/click.ashx',
		type: 'POST',
		data: {
			"linkname": type
		}
	});

}

//监测代码通用方法
function addPvPc(LabelValue) {
	window._CiQ10669 = window._CiQ10669 || [];
	window._CiQ10669.push(['_trackEvent', {
		type: 2,
		labels: [{
			'页面名称': LabelValue
		}],
		values: [{
			'数量': 1
		}]
	}]);
	window.CClickiV3 && window.CClickiV3[10669] && window.CClickiV3[10669]._flushObserver(function() {});
}

function addClickPc(LabelValue) {
	window._CiQ10669 = window._CiQ10669 || [];
	window._CiQ10669.push(['_trackEvent', {
		type: 3,
		labels: [{
			'按钮名称': LabelValue
		}],
		values: [{
			'数量': 1
		}]
	}]);
	window.CClickiV3 && window.CClickiV3[10669] && window.CClickiV3[10669]._flushObserver(function() {});

	_utaq.push(['trackEvent', LabelValue])

	stm_clicki('send', 'event', LabelValue, '点击');			

	_addnewer.trackClick('click',  LabelValue);

	// _smq.push(['custom',LabelValue]);
}

//是否已初始化ichat
var isInitIchat= false;
var isIchatOpen= false;

$(function() {

	//在线客服添加事件
	$(".online").click(function(event) {
		createOnlineLayOut();
	});
	$("#rightFixedDerive2").click(function(event) {
		createOnlineLayOut();
	});

	$('#ichatIconMin').on('click', ichatIconMinClick);
	$('#ichatIconMax').on('click', ichatIconMaxClick);
	$('#ichatIconClose').on('click', ichatIconCloseClick);

	function ichatIconCloseClick() {
		$('#ichatBox').hide();
		ichatIconMaxClick();
		isIchatOpen= false;
	}
	function ichatIconMaxClick() {
		// $('#iChatFrame').css({'height':620});
		$('#ichatBox').css({'height':531});
		$('#ichatIconMin').show();
		$('#ichatIconMax').hide();
	}
	function ichatIconMinClick() {
		// $('#iChatFrame').css({'height':0});
		$('#ichatBox').css({'height':32});
		$('#ichatIconMin').hide();
		$('#ichatIconMax').show();
	}


	//关键字搜索按钮
	$("#kwSearch").click(function() {
		var kw = $("#kwSearchText").val();
		window.location.href = "/plus/newsSearch.html?kw=" + escape(kw);
	});
	$("#kwSearchText").bind('keyup', function(event) {
		if (event.keyCode == "13") {
			//回车执行查询
			$('#kwSearch').click();
		}
	});

	//全部车型按钮点击
	$(".navTitle li.allV a").click(function() {
		var h = $("body").height() - 100;

		if ($(".headLayout").css("display") == "none") {
			$(".headLayout").css("display", "block");
			$(".headLayoutBg").css("height", h + "px").css("display", "block");
		} else {
			$(".headLayout").css("display", "none");
			$(".headLayoutBg").css("display", "none");
		}
	});
	$(".headLayoutBg").click(function() {
		$(".headLayout").css("display", "none");
		$(".headLayoutBg").css("display", "none");
	});

	//车型弹出层点击方法
	$(".layoutBtn").click(function() {
		if ($("#layoutDiv").length != 0) {
			return false;
		}
		var json = $(this).attr("json");
		var num = $(this).attr("num") - 1;

		var flash = $(this).attr("flash");


		$.ajax({
			type: "GET",
			url: "../js/" + json + "/carset.js",
			dataType: "json",
			success: function(data) {
				var _data = data[num];

				var layout = _data.layout;
				if (flash == "t") {
					global.createLayout(layout, _data.img, _data.text, flash);
				} else {
					global.createLayout(layout, _data.img, _data.text);
				}

			}
		});
	});

	//点击车型概览导航条
	if ($(".overviewNav").length != 0) {
		$(".overviewNav dl a").click(function(event) {
			$(this).addClass("act").siblings().removeClass('act');
			var num = $(this).attr("num");
			var t = $(".navCarSed").eq(num).offset().top - 120;
			$(window).scrollTop(t)
		});
	}

	//监听车型概览
	if ($(".navCarSed").length != 0) {
		var navCar = [];
		if (window.addEventListener) {
			window.addEventListener('scroll', function(event) {
				var t = $(window).scrollTop();
				if (navCar.length == 0) {
					var $navCar = $(".navCarSed");
					for (var i = 0; i < $navCar.length; i++) {
						navCar.push($($navCar[i]).offset().top - 160);
					}
				}
				for (var j = 0; j < navCar.length; j++) {
					if (t >= navCar[j] && t <= navCar[j + 1]) {
						$(".overviewNav span a").eq(j).addClass("act").siblings().removeClass('act');
					}
				}
			}, false);
		} else if (window.attachEvent) {
			window.attachEvent('scroll', function(event) {
				var t = $(window).scrollTop();
				if (navCar.length == 0) {
					var $navCar = $(".navCarSed");
					for (var i = 0; i < $navCar.length; i++) {
						navCar.push($($navCar[i]).offset().top - 160);
					}
				}
				for (var j = 0; j < navCar.length; j++) {
					if (t >= navCar[j] && t <= navCar[j + 1]) {
						$(".overviewNav span a").eq(j).addClass("act").siblings().removeClass('act');
					}
				}
			}, false);
		}

	}

	//点击车型概览焦点图
	if ($(".focusCar").length != 0) {
		$(".focusCar a").click(function(event) {
			var num = $(this).attr("num");
			var t = $(".navCarSed").eq(num).offset().top - 120;
			$(window).scrollTop(t)
		});
	}

	//点击切换内饰颜色
	if ($("p.chooseColor").length != 0) {
		$("p.chooseColor a").click(function(event) {
			var img = $(this).attr("img");
			var color = $(this).attr("colorName");
			$(this).parent().siblings(".colorName").text(color);
			$(this).parent().siblings("img").attr("src", img + ".jpg");
			$(this).addClass('act').siblings().removeClass('act');
		});

		$("p.chooseColor a").hover(function(event) {
			var color = $(this).attr("colorName");
			$(this).parent().siblings(".colorName").text(color);
		}, function() {
			var color = $("p.chooseColor a.act").attr("colorName");
			$(this).parent().siblings(".colorName").text(color);
		});
	}

	if ($("p.chooseOut").length != 0) {
		$("p.chooseOut a").click(function(event) {
			var img = $(this).attr("img");
			var color = $(this).attr("colorName");
			$(this).parent().siblings(".colorName").text(color);
			$(this).parent().siblings("img").attr("src", img + ".jpg");
			$(this).addClass('act').siblings().removeClass('act');
		});

		$("p.chooseOut a").hover(function(event) {
			var color = $(this).attr("colorName");
			$(this).parent().siblings(".colorName").text(color);
		}, function() {
			var color = $("p.chooseOut a.act").attr("colorName");
			$(this).parent().siblings(".colorName").text(color);
		});
	}



	/* 
		share
	 */
	function Share(weburl) {
		var title = "凯迪拉克中国";
		var myurl = "http://www.cadillac.com.cn/";
		var pic = "";
		if (weburl == "copy") {

		} else {
			if (weburl == "tsina") {
				var openurl = "http://service.weibo.com/share/share.php?url=" + myurl + "&appkey=&title=" + encodeURIComponent(title) + "&pic=" + pic + "&ralateUid=&language=";
				window.open(openurl);
			} else if (weburl == "tqq") {
				var openurl = "http://t.qq.com/share/share.php?url=" + myurl + "&title=" + encodeURIComponent(title) + "&appkey=&pic=" + pic + "";
				window.open(openurl);
			} else if (weburl == "zhihu") {
				var openurl = "https://www.zhihu.com/";
				window.open(openurl);
			} else {
				var openurl = "http://www.jiathis.com/send/?webid=" + weburl + "&url=" + myurl + "&title=" + encodeURIComponent(title) + "&uid=904693";
				window.open(openurl);
			}
		}
	}

	$("#share-kaixin").click(function() {
		Share('kaixin001')
	});
	$("#share-renren").click(function() {
		Share('renren')
	});
	$("#share-qq").click(function() {
		Share('tqq')
	});
	$("#share-sina").click(function() {
		Share('tsina')
	});
	$("#share-zhihu").click(function() {
		Share('zhihu')
	});

});

(function($) {
	$(function() {
		// var likeChexingArr = {
		// 	"atsl":"ATS-L",
		// 	"xts":"XTS",
		// 	"ct6":"CT6",
		// 	"ct6phev":"CT6 Plug-in",
		// 	"xt5":"XT5",
		// 	"escalade":"ESCALADE"
		// }
		// if (typeof _hy2gm != 'undefined' && typeof _hy2gm.getLikeChexing == "function"){
		//     //获取推荐车型
		//     //
		//     var getLikeChexing = _hy2gm.getLikeChexing();
		
		// 	var _str = $("#indexJcarousel").find('li.'+getLikeChexing).prop("outerHTML");
			
		// 	$("#indexJcarousel").find('li.'+getLikeChexing).remove();
		// 	$("#indexJcarousel li").eq(0).before(_str);
		// 　
		// }
		
		setTimeout(function(){
			if($('.jcarousel').length != 0){
				$('.jcarousel').jcarousel({
					"wrap": "circular"
				}).jcarouselAutoscroll({
					interval: 5000,
					target: '+=1',
					autostart: true
				})

				$('.jcarousel-control-prev')
					.on('jcarouselcontrol:active', function() {
						$(this).removeClass('inactive');
					})
					.on('jcarouselcontrol:inactive', function() {
						$(this).addClass('inactive');
					})
					.jcarouselControl({
						target: '-=1'
					});

				$('.jcarousel-control-next')
					.on('jcarouselcontrol:active', function() {
						$(this).removeClass('inactive');
					})
					.on('jcarouselcontrol:inactive', function() {
						$(this).addClass('inactive');
					})
					.jcarouselControl({
						target: '+=1'
					});
				$('.jcarousel-pagination')
					.on('jcarouselpagination:active', 'a', function() {
						$(this).addClass('active');
					})
					.on('jcarouselpagination:inactive', 'a', function() {
						$(this).removeClass('active');
					})
					.jcarouselPagination();
			}

			if($('.jcarousel2').length != 1){

				$('.jcarousel2').jcarousel({
					"wrap": "circular"
				});

				$('.jcarousel-control-prev2')
					.on('jcarouselcontrol2:active', function() {
						$(this).removeClass('inactive');
					})
					.on('jcarouselcontrol2:inactive', function() {
						$(this).addClass('inactive');
					})
					.jcarouselControl({
						target: '-=1'
					});

				$('.jcarousel-control-next2')
					.on('jcarouselcontrol2:active', function() {
						$(this).removeClass('inactive');
					})
					.on('jcarouselcontrol2:inactive', function() {
						$(this).addClass('inactive');
					})
					.jcarouselControl({
						target: '+=1'
					});

			}
		},500)



	});

	//搜索框绑定时间
	$("#kwSearchText").bind("keyup", function(e) {
		global.regSearchFn($(this).val(), regSearchJson);

	});

})(jQuery);



//品友点击监测代码
/*
**参数说明：
_type：试驾车型参见提供的Excel表格
_orderno：表单提交服务端记录唯一标示ID值，如果没有或无法获取请传空字符；
_campaign：活动名称，如果没有活动名称请传“GM”
 */
function pyCadillacCvtPC(_orderno, _campaign, _type) {
	var pya = 'R6.Pi.aY-BnBniRHLgL9Ri1QWbO_';
	switch (_type) {
		case 'ats':
			pya = 'R6.Mi.EfsBYxTsoFZdIkJ5lzzqyP';
			break;
		case 'atsl':
			pya = 'R6.Mi.EfsBYxTsoFZdIkJ5lzzqyP';
			break;
		case 'cts':
			pya = 'R6.Un.pMnFRFwy3I_5C0QZKFEEE0';
			break;
		case 'ctsvcoupe':
			pya = 'R6.we.iDYo4LyGn8zbnGePb5_fe0';
			break;
		case 'ctsv':
			pya = 'R6.we.iDYo4LyGn8zbnGePb5_fe0';
			break;
		case 'xts':
			pya = 'R6.qi.nnCoFckGByjs8cb3YYtl_X';
			break;
		case 'srx':
			pya = 'R6.Gi.EBJzQylDBwkemUC58Y4CX_';
			break;
		case 'hybrid':
			pya = 'R6.Me.l1Kcar5M62RiNoChgW7NmP';
			break;
		case 'esv':
			pya = 'R6.Xe.dtpnavuUHRyp4mJT_tapR_';
			break;
		case 'cvtcoupe':
			pya = 'R6.Fe.PCC0NNEb3jQvGn25wL5SoX';
			break;
		case 'ct6':
			pya = 'R6.C2s.eWOvdRe1v6D7PqXhy4UkY_';
			break;
		case 'xt5':
			pya = 'R6.xQs.glgZvcgm9eB8zuW0WJYuBP';
			break
	}
	if (typeof(_orderno) == 'undefined') {
		_orderno = ''
	}
	var w = window,
		d = document,
		e = encodeURIComponent;
	var b = location.href,
		c = d.referrer,
		f, g = d.cookie,
		h = g.match(/(^|;)\s*ipycookie=([^;]*)/),
		i = g.match(/(^|;)\s*ipysession=([^;]*)/);
	if (w.parent != w) {
		f = b;
		b = c;
		c = f
	};
	u = '//stats.ipinyou.com/cvt?a=' + e(pya) + '&OrderNo=' + e(_orderno) + '&ProductList=' + e(_campaign + '::' + _type) + '&c=' + e(h ? h[2] : '') + '&s=' + e(i ? i[2].match(/jump\%3D(\d+)/)[1] : '') + '&u=' + e(b) + '&r=' + e(c) + '&rd=' + (new Date()).getTime() + '&e=';
	(new Image()).src = u;
}


/*
 **  2016年3.17  新增cookie  区别试驾访问来源
 */

var mz_ca = global.getQueryString("mz_ca");
var mz_sp = global.getQueryString("mz_sp");
var mz_kw = global.getQueryString("mz_kw");
var mz_utm_source = global.getQueryString("utm_source");
var mz_utm_medium = global.getQueryString("utm_medium");
var mz_utm_content = global.getQueryString("utm_content");
var mz_utm_campaign = global.getQueryString("utm_campaign");
var mz_utm_term = global.getQueryString("utm_term");

function setMzCookie(name, value, time) {
	var strsec = getsec(time);
	var exp = new Date();
	//10*60*1000
	exp.setTime(exp.getTime() + strsec * 1);
	document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/";
}

function getMzCookie(name) {
	var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	if (arr = document.cookie.match(reg)) return unescape(arr[2]);
	else return null;
}

function getsec(str) {
	var str1 = str.substring(1, str.length) * 1;
	var str2 = str.substring(0, 1);
	if (str2 == "s") {
		return str1 * 1000;
	} else if (str2 == "h") {
		return str1 * 60 * 60 * 1000;
	} else if (str2 == "d") {
		return str1 * 24 * 60 * 60 * 1000;
	}
}

var globalMz_ca = "";
var globalMz_sp = "";
var utm_source = "SP-CA0000001_00000000";
var utm_medium = "";
var utm_content = "";
var utm_campaign = "";
var utm_term = "";
var globalCookieTime = "s600";

if (mz_ca == null) {
	if (getMzCookie("mz_ca") != null) {
		globalMz_ca = getMzCookie("mz_ca");
	} else {
		globalMz_ca = "";
	}
} else {
	if (getMzCookie("mz_ca") == null) {
		setMzCookie("mz_ca", mz_ca, globalCookieTime);
		globalMz_ca = mz_ca;
	} else {
		globalMz_ca = getMzCookie("mz_ca");
	}
}

if (mz_sp == null) {
	if (getMzCookie("mz_sp") != null) {
		globalMz_sp = getMzCookie("mz_sp");
	} else {
		globalMz_sp = "";
	}
} else {
	if (getMzCookie("mz_sp") == null) {
		setMzCookie("mz_sp", mz_sp, globalCookieTime);
		globalMz_sp = mz_sp;
	} else {
		globalMz_sp = getMzCookie("mz_sp");
	}
}

if (mz_kw == null) {
    if (getMzCookie("mz_kw") != null) {
        globalMz_kw = getMzCookie("mz_kw");
    } else {
        globalMz_kw = "";
    }
} else {
    if (getMzCookie("mz_kw") == null) {
        setMzCookie("mz_kw", mz_kw, globalCookieTime);
        globalMz_kw = mz_kw;
    } else {
        globalMz_kw = getMzCookie("mz_kw");
    }
}

if (mz_utm_source == null) {
	if (getMzCookie("utm_source") != null) {
		utm_source = getMzCookie("utm_source");
	} else {
		if (cadiSource != undefined) {
			utm_source = cadiSource;
		} else {
			utm_source = "SP-CA0000001_00000000";
		}
	}
} else {
	if (getMzCookie("utm_source") == null) {
		setMzCookie("utm_source", mz_utm_source, globalCookieTime);
		utm_source = mz_utm_source;
	} else {
		utm_source = getMzCookie("utm_source");
	}
}

if (mz_utm_medium == null) {
	if (getMzCookie("utm_medium") != null) {
		utm_medium = getMzCookie("utm_medium");
	} else {
		utm_medium = "";
	}
} else {
	if (getMzCookie("utm_medium") == null) {
		setMzCookie("utm_medium", mz_utm_medium, globalCookieTime);
		utm_medium = mz_utm_medium;
	} else {
		utm_medium = getMzCookie("utm_medium");
	}
}

if (mz_utm_content == null) {
	if (getMzCookie("utm_content") != null) {
		utm_content = getMzCookie("utm_content");
	} else {
		if (cadiSpCode != undefined) {
			utm_content = cadiSpCode;
		} else {
			utm_content = "";
		}
	}
} else {
	if (getMzCookie("utm_content") == null) {
		setMzCookie("utm_content", mz_utm_content, globalCookieTime);
		utm_content = mz_utm_content;
	} else {
		utm_content = getMzCookie("utm_content");
	}
}

if (mz_utm_campaign == null) {
	if (getMzCookie("utm_campaign") != null) {
		utm_campaign = getMzCookie("utm_campaign");
	} else {
		utm_campaign = cadiNameCn;
	}
} else {
	if (getMzCookie("utm_campaign") == null) {
		setMzCookie("utm_campaign", mz_utm_campaign, globalCookieTime);
		utm_campaign = mz_utm_campaign;
	} else {
		utm_campaign = getMzCookie("utm_campaign");
	}
}

if (mz_utm_term == null) {
	if (getMzCookie("utm_term") != null) {
		utm_term = getMzCookie("utm_term");
	} else {
		utm_term = "";
	}
} else {
	if (getMzCookie("utm_term") == null) {
		setMzCookie("utm_term", mz_utm_term, globalCookieTime);
		utm_term = mz_utm_term;
	} else {
		utm_term = getMzCookie("utm_term");
	}
}


//PC端自定义行为添加代码通用方法
function addSGMPCClick(name, brand, car_type) {
	if (car_type == undefined) {
		car_type = '';
	}
	_sgma('send', 'action', name, {
		'brand': brand,
		'car_type': car_type.toUpperCase()
	});

}

var onlineNum = Math.floor(Math.random()*10);
var ichatNum = global.getQueryString("ichat");
console.log('onlineNum:'+onlineNum);

function openiChatBox() {
	$('#ichatBox').show();
	$('#ichatBox').attr('class', 'ichatBox in_ichatBox');
	isIchatOpen= true;
	setTimeout(function(){
		$('#ichatBox').attr('class', 'ichatBox');
	},330);
}
function createOnlineLayOut() {

	// window.location.href = "https://ichat.saic-gm.com/ichat-web/index.html?name=&mobile=&url="+encodeURIComponent(window.location.href);
	
	if(!isInitIchat && !isIchatOpen){
		// var ichatUrl = "https://ichat.saic-gm.com/ichat-web/index.html?name=&mobile=&url="+encodeURIComponent(window.location.href);
		var ichatUrl = "https://ichat.saic-gm.com/ichat-web/iframe.html?name=&mobile=&url="+encodeURIComponent(window.location.href);
		$('#iChatFrame').attr('src', ichatUrl);
		isInitIchat= true;
		openiChatBox();
	}else if(!isIchatOpen){
		openiChatBox();
	}

	// if(onlineNum <10 || ichatNum == 1){
	// 	window.location.href = "http://csschatbox-t.chinacloudsites.cn/?name=&mobile=&url="+encodeURIComponent(window.location.href);
	// } else{
	// 	window.location.href = "https://jqapigateway.sgmlink.com:3455/JtalkManager/echatManager.do?companyPk=8a4baa8a55597d4101555987ca2f0006&codeKey=3";
	// }
	
	// var str = '<div class="onlineLayOut">';
	// str += '<div class="title">欢迎使用凯迪拉克在线客服</div>';
	// str += '<div class="tips" style="font-size:12px;">为了更好地为您服务，欢迎填写以下信息，点击“<span style="color:#88172a;">确认</span>”按钮后即刻帮您转接<br/>您也可以选择点击“<span style="color:#7e7e7e;">访客登录</span>”按钮，一键进入</div>';
	// str += '<div class="putBg">';
	// str += '姓名<input type="text" id="onlineName">';
	// str += '</div>';
	// str += '<div class="putBg" style="top:184px;">';
	// str += '手机号<input type="text" id="onlineMoblie" maxlength="11">';
	// str += '</div>';
	// str += '<a class="onlineSub" onclick="addClickPc(\'在线客服弹窗-确认\');_sgma(\'send\',\'action\',\'onlineServiceConfirm\');" href="javascript:;">确定</a>';

	// if(onlineNum <5 || ichatNum == 1){
	// 	str += '<a class="visitLogin" onclick="addClickPc(\'在线客服弹窗-访客登录\');_sgma(\'send\',\'action\',\'onlineServiceVisitor\');"  target="_blank" href="http://csschatbox-t.chinacloudsites.cn/?name=&mobile=&url='+encodeURIComponent(window.location.href)+'">访客登录</a>';
	// } else{
	// 	str += '<a class="visitLogin" onclick="addClickPc(\'在线客服弹窗-访客登录\');_sgma(\'send\',\'action\',\'onlineServiceVisitor\');"  target="_blank" href="https://jqapigateway.sgmlink.com:3455/JtalkManager/echatManager.do?companyPk=8a4baa8a55597d4101555987ca2f0006&codeKey=3">访客登录</a>';
	// }
	
	// str += '<div class="closeLayout"></div>';
	// str += '</div>';

	// $("body").append(str);

	// $(".onlineLayOut .closeLayout").click(function(event) {
	// 	$(".onlineLayOut").remove();
	// });

	// $(".onlineLayOut .onlineSub").click(function(event) {
	// 	if(onlineNum <=3 || ichatNum == 1){
	// 		onlinesubmitNew();
	// 	} else{
	// 		onlinesubmit();
	// 	}
	// });
}


function onlinesubmit() {
	if ($('#onlineName').val() == '') {
		alert('请输入咨询姓名');
		return false;
	}

	if ($('#onlineMoblie').val() == '') {
		alert('请输入咨询手机');
		return false;
	}

	if(utm_content==""){
		utm_content ="SGMMRK2016000049"
	}
	if(utm_campaign==""){
		utm_campaign ="2016凯迪拉克官网"
	}

	var name = $('#onlineName').val();
	var mobile = $('#onlineMoblie').val();
	$.ajax({
		type: "POST",
		url: 'https://www.cadillac.com.cn/api/ichat2016_db.ashx',
		data: {
			name:name,
			tel:mobile,
			resource:"PC",
			mz_ca: globalMz_ca,
	        mz_sp: globalMz_sp,
	        utm_source: "SP-CA0000_0000",
	        utm_medium: utm_medium,
	        utm_term: utm_term,
	        utm_content: utm_content,
	        utm_campaign: utm_campaign
		},
		dataType: "json",
		timeout: 30000,
		success: function(data) {
			//获取leadsid
			var leadsid;

			if (data.result == 1) {

				leadsid = data.cid;
				window.location.href = 'https://jqapigateway.sgmlink.com:3455/JtalkManager/echatManager.do?companyPk=8a4baa8a55597d4101555987ca2f0006&codeKey=3&hjUserData='+name+'|'+mobile+'|0|凯迪拉克||||'+data.Source+'|'+data.SourceSub+'|||'+data.CamName+'|'+leadsid;
		
			} else {

				alert("跳转失败");
				
			}
		},
		error: function() {
			alert("网络延迟，请稍后再试");
		}
	});
}
function onlinesubmitNew() {
	var name = $('#onlineName').val();
	var mobile = $('#onlineMoblie').val();
	var base = new Base64();
	var thisUrl = window.location.href;

	if (name == '') {
		alert('请输入咨询姓名');
		return false;
	}

	if (!global.isMobile(mobile)) {
        alert('请输入咨询手机');
		return false;
    }


	// window.location.href = "http://csschatbox-t.chinacloudsites.cn/?name="+encodeURIComponent(name)+"&mobile="+encodeURIComponent(base.encode(mobile))+"&url="+encodeURIComponent(thisUrl)+"";
	window.location.href = "https://ichat.saic-gm.com/ichat-web/index.html?name="+encodeURIComponent(name)+"&mobile="+encodeURIComponent(base.encode(mobile))+"&url="+encodeURIComponent(thisUrl)+"";
}
function Base64() {  
   
    // private property  
    _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";  
   
    // public method for encoding  
    this.encode = function (input) {  
        var output = "";  
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;  
        var i = 0;  
        input = _utf8_encode(input);  
        while (i < input.length) {  
            chr1 = input.charCodeAt(i++);  
            chr2 = input.charCodeAt(i++);  
            chr3 = input.charCodeAt(i++);  
            enc1 = chr1 >> 2;  
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);  
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);  
            enc4 = chr3 & 63;  
            if (isNaN(chr2)) {  
                enc3 = enc4 = 64;  
            } else if (isNaN(chr3)) {  
                enc4 = 64;  
            }  
            output = output +  
            _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +  
            _keyStr.charAt(enc3) + _keyStr.charAt(enc4);  
        }  
        return output;  
    }  
   
    // public method for decoding  
    this.decode = function (input) {  
        var output = "";  
        var chr1, chr2, chr3;  
        var enc1, enc2, enc3, enc4;  
        var i = 0;  
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");  
        while (i < input.length) {  
            enc1 = _keyStr.indexOf(input.charAt(i++));  
            enc2 = _keyStr.indexOf(input.charAt(i++));  
            enc3 = _keyStr.indexOf(input.charAt(i++));  
            enc4 = _keyStr.indexOf(input.charAt(i++));  
            chr1 = (enc1 << 2) | (enc2 >> 4);  
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);  
            chr3 = ((enc3 & 3) << 6) | enc4;  
            output = output + String.fromCharCode(chr1);  
            if (enc3 != 64) {  
                output = output + String.fromCharCode(chr2);  
            }  
            if (enc4 != 64) {  
                output = output + String.fromCharCode(chr3);  
            }  
        }  
        output = _utf8_decode(output);  
        return output;  
    }  
   
    // private method for UTF-8 encoding  
    _utf8_encode = function (string) {  
        string = string.replace(/\r\n/g,"\n");  
        var utftext = "";  
        for (var n = 0; n < string.length; n++) {  
            var c = string.charCodeAt(n);  
            if (c < 128) {  
                utftext += String.fromCharCode(c);  
            } else if((c > 127) && (c < 2048)) {  
                utftext += String.fromCharCode((c >> 6) | 192);  
                utftext += String.fromCharCode((c & 63) | 128);  
            } else {  
                utftext += String.fromCharCode((c >> 12) | 224);  
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);  
                utftext += String.fromCharCode((c & 63) | 128);  
            }  
   
        }  
        return utftext;  
    }  
   
    // private method for UTF-8 decoding  
    _utf8_decode = function (utftext) {  
        var string = "";  
        var i = 0;  
        var c = c1 = c2 = 0;  
        while ( i < utftext.length ) {  
            c = utftext.charCodeAt(i);  
            if (c < 128) {  
                string += String.fromCharCode(c);  
                i++;  
            } else if((c > 191) && (c < 224)) {  
                c2 = utftext.charCodeAt(i+1);  
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));  
                i += 2;  
            } else {  
                c2 = utftext.charCodeAt(i+1);  
                c3 = utftext.charCodeAt(i+2);  
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));  
                i += 3;  
            }  
        }  
        return string;  
    }  
}