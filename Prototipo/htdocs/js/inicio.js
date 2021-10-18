function cargada(argument) {
	// Cuando esta cargado el documento HTML
	document.body.onload = function(argument) {
		//  Carga de la función principal de inicio. 
		inicio_automatico();
	}

}

// No queda clara la implementación y llamada. 
// Por lo que se realiza un seguimiento para nombrar 
// funciones por conveniencia, sin embargo los nombres 
// de funciones con con infligen el en funcionamiento.

function w3_open() {

	let nav_lateral =
		document.getElementById("nav_lateral_contenedor");
	let btn_cerrar =
		document.getElementById("btn_cerar_nav_lateral");
	let main =
		document.getElementById("main");


	if (nav_lateral.style.display === 'block') {

		nav_lateral.style.display = 'none';
		btn_cerrar.style.display = "none";
		nav_lateral.style.width = "0px";
		main.style.marginLeft = "0px";

	} else {

		nav_lateral.style.display = 'block';
		btn_cerrar.style.display = "block";
		nav_lateral.style.width = "300px";
		main.style.marginLeft = "300px";

	}
}


function w3_close() {

	let nav_lateral = document.getElementById("nav_lateral_contenedor");
	let btn_cerrar = document.getElementById("btn_cerar_nav_lateral");
	let main = document.getElementById("main");

	nav_lateral.style.display = "none";
	btn_cerrar.style.display = "none";
	nav_lateral.style.width = "0px";
}