function btn_vav(argument) {


	let all_user_panel =
		document.querySelectorAll(".all_user_panel");

	let btn_nav_registro_bebe =
		document.querySelector(".btn_nav_registro_bebe");

	let btn_perfil_usuario =
		document.querySelector('.btn_perfil_usuario');

	let btn_lactancia =
		document.querySelector('.btn_lactancia');

	// =============================================================================================
	//  Se trabajan los botones de navegación de la barra lateral
	//  POdemos considerar nombrar un fichero  y renombrar la 
	// función con  un nombre  descriptivo sugerencia  para 
	// el nombre de fichero y función {btn_nav_laeral()}


	btn_lactancia.addEventListener("click", function(argument) {

		for (var i = 0; i < all_user_panel.length; i++) {
			all_user_panel[i].style.display = "none";
		}

		let lactancia_cenos = document.querySelector(".lactancia_cenos");
		lactancia_cenos.style.display = "block";


	});
	btn_nav_registro_bebe.addEventListener("click", function(argument) {

		for (var i = 0; i < all_user_panel.length; i++) {
			all_user_panel[i].style.display = "none";
		}

		let formulario_bebe = document.querySelector(".formulario_bebe");
		formulario_bebe.style.display = "block";


	});

	btn_perfil_usuario.addEventListener("click", function(argument) {
		for (var i = 0; i < all_user_panel.length; i++) {
			all_user_panel[i].style.display = "none";
		}

		let perfil_usuario = document.querySelector(".perfil_usuario");
		perfil_usuario.style.display = "block";


	});
	// =============================================================================================
}