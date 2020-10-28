var canvas1 = document.getElementById("can1");
var canvas2 = document.getElementById("can2");
var canvas3 = document.getElementById("can3");
console.log(canvas1);


function drawLine(canvas) {
    var ctx = canvas.getContext("2d");
    ctx.strokeStyle = "#333333";
    ctx.lineWidth = 5;
    ctx.moveTo(0, 0);
    ctx.lineTo(300, 150);
    ctx.stroke();
}


drawLine(canvas1);
drawLine(canvas2);
drawLine(canvas3);

