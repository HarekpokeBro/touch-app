function init(){
	var touchzone=document.getElementById("touchzone");
	touchzone.addEventListener("touchzone",touchHandler,false);
}

function touchHandler(event){
	var coords=document.getElementById("coords");
	coords.innerHTML = 'x: ' + event.touches[0].pageX + ', y: ' + event.touches[0].pageY;
}