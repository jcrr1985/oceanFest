function cargar() {
	document.getElementById("principal").style.visibility = 'visible';
	document.getElementsByClassName("loader")[0].style.visibility = 'hidden'; 
}

window.onload = function() { 
	setTimeout(cargar	, 0)
}


