function navegacion_inicio(argument) {
	//  Crear algoritmo para colocar todos las ventanas en none y solo na nesesaria en block 
	// ---------------------------------------------------------
	let panel_usuario = document.querySelector(".panel_usuario");
	// console.log(panel_usuario);
	// panel_usuario.style.display = "none";	
	let menu_navegacion = document.querySelector(".menu_navegacion");
	console.log(menu_navegacion);
	menu_navegacion.style.display = "block";
	// ---------------------------------------------------------
	// btn_registro_cancel
	let iniciar_session = document.getElementById("iniciar_session");
	let btn_registro_cancel = document.getElementById("btn_registro_cancel");
	let inicio = document.getElementById("inicio");
	let registo = document.getElementById("registo");
	// console.log(iniciar_session);
	let btn_inicia_sesion = document.getElementById('btn_inicia_sesion');
	let imagenes_galeria = document.querySelector(".imagenes_galeria");

	iniciar_session.addEventListener("click", function(argument) {
		inicio.style.display = "block";
		registo.style.display = "none";



	});
	btn_registro_cancel.addEventListener("click", function(argument) {
		inicio.style.display = "none";
		imagenes_galeria.style.display = "block";
		btn_inicia_sesion.style.display = "block";
		registo.style.display = "none";



	});

}