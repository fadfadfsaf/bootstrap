function scrolls(){
    var f=document.getElementById("show");
    f.scrollLeft+=960;
    if(f.scrollLeft>=960){
        document.getElementById("scrolls").appendChild(document.getElementById("scrolls").firstChild);
        f.scrollLeft=0;
    }
}
i=setInterval("scrolls()",1500);
window.onload=function(){
    document.getElementById("show").onmouseover=function(){
        clearInterval(i);
    }
    document.getElementById("show").onmouseout=function(){
        i=setInterval("scrolls()",1500);
    }
}



