window.onload=function(){
	
	//NAV
	var ulf=document.getElementById("ulf");
	var lis=ulf.children;
	for(var i=0;i<lis.length;i++){
		lis[i].onmouseover=function(){
			this.children[1].style.display="block";
		}
		lis[i].onmouseout=function(){
			this.children[1].style.display="none";
		}
	}
	
	//服务热线
	var d=document.getElementById("phone");
	d.onmouseover=function(){
		this.children[0].style.display="block";
	}
	d.onmouseout=function(){
		this.children[0].style.display="none";
	}
	//置顶
	var toUp=document.getElementById("toUp");
	var a=document.documentElement.scrollTop || document.body.scrollTop;
	console.log(a);
	window.onscroll=function(){
		   toUp.style.display="block";//滚动条触发模块显示
		   toUp.onclick=function(){
		window.scrollTo(0,0);//置顶
	}
	}
	
}
