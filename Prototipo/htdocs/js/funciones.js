function clear_url_img(argument) {
	let imahgenes = document.querySelectorAll("img");

	for (var i = 0; i < imahgenes.length; i++) {
		console.log(imahgenes[i]);
	}
}



function inicio(argument) {
	let main = document.getElementById("main");
	let mySidebar = document.getElementById("nav_lateral_contenedor");
	let cuerpo = document.getElementById("cuerpo");
	let inicio = document.getElementById("inicio");
	let registo = document.getElementById("registo");
	mySidebar.style.display = "none";
	mySidebar.style.width = "0px";
	main.style.marginLeft = "0px";
	inicio.style.display = "none";
	registo.style.display = "none";
	// cuerpo.style.display = "block";
	inicio.style.display = "block";

}

function btn_registrarce(argument) {
	let registrase = document.getElementById("registrase");
	let inicio = document.getElementById("inicio");
	let registo = document.getElementById("registo");

	// console.log(registrase);


	registrase.addEventListener("click", function(argument) {
		inicio.style.display = "none";
		registo.style.display = "block";
		console.log(this);



	});


}


// function w3_open() {

// 	let nav_lateral =
// 		document.getElementById("nav_lateral_contenedor");
// 	let btn_cerrar =
// 		document.getElementById("btn_cerar_nav_lateral");
// 	let main =
// 		document.getElementById("main");


// 	if (nav_lateral.style.display === 'block') {

// 		nav_lateral.style.display = 'none';
// 		btn_cerrar.style.display = "none";
// 		nav_lateral.style.width = "0px";
// 		main.style.marginLeft = "0px";

// 	} else {

// 		nav_lateral.style.display = 'block';
// 		btn_cerrar.style.display = "block";
// 		nav_lateral.style.width = "300px";
// 		main.style.marginLeft = "300px";

// 	}
// }


// function w3_close() {

// 	let nav_lateral = document.getElementById("nav_lateral_contenedor");
// 	let btn_cerrar = document.getElementById("btn_cerar_nav_lateral");
// 	let main = document.getElementById("main");

// 	nav_lateral.style.display = "none";
// 	btn_cerrar.style.display = "none";
// 	nav_lateral.style.width = "0px";
// }