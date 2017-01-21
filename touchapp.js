function init() {
	var touchzone = document.getElementById("mycanvas");
	touchzone.addEventListener("touchstart", draw, false);
}
 
function draw() {
	var canvas = document.getElementById('mycanvas');

	if(canvas.getContext) {
	var ctx = canvas.getContext("2d");
	ctx.fillRect (event.touches[0].pageX, event.touches[0].pageY, 5, 5);
	}
}