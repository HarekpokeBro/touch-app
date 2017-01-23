var canvas;
var ctx;
var lastPt = new Object();
var colours = ['red', 'green', 'blue', 'yellow', 'black'];

function init() {
	var touchzone = document.getElementById("mycanvas");
	touchzone.addEventListener("touchmove", draw, false);
	touchzone.addEventListener("touchend", end, false);   
	canvas = document.getElementById('mycanvas');
	ctx = canvas.getContext("2d");
	mycanvas.width = mycanvas.width;
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, mycanvas.width, mycanvas.height);
}

function draw(e) {
	e.preventDefault();

	for(var i=0;i<e.touches.length;i++) {
	var id = e.touches[i].identifier;
	if(lastPt[id]) {
		ctx.beginPath();
		ctx.moveTo(lastPt[id].x, lastPt[id].y);
		ctx.lineTo(e.touches[i].pageX, e.touches[i].pageY);
		ctx.strokeStyle = colours[id];
		ctx.stroke();
	}
	lastPt[id] = {x:e.touches[i].pageX, y:e.touches[i].pageY};
	}
}

function end(e) {
	e.preventDefault();
	for(var i=0;i<e.changedTouches.length;i++) {
		var id = e.changedTouches[i].identifier;
		delete lastPt[id];
	}
}