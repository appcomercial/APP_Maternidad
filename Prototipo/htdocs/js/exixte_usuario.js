function exiixte_usuario_modal(argument) {

	let all_modal =
		document.querySelectorAll(
			".all_modal"
		);

	console.log(all_modal);

	let btn_existe_inicio_sesion =
		document.querySelector(
			"#existe_usuario .btn_existe_inicio_sesion"
		);

	let btn_existe_registrtrse =
		document.querySelector(
			"#existe_usuario .btn_existe_registrtrse"
		);



	//  Botones de accion para el componente modal  {existe_usuario.php}

	btn_existe_inicio_sesion.addEventListener(
		"click",
		function(argument) {

			for (var i = 0; i < all_modal.length; i++) {
				all_modal[i].style.display = "none";
			}

			let inicio =
				document.getElementById(
					"inicio"

				);

			inicio.style.display = "block";

			// console.log(this);
		}

	);

	btn_existe_registrtrse.addEventListener(
		"click",
		function(argument) {

			for (var i = 0; i < all_modal.length; i++) {

				all_modal[i].style.display = "none";
			}

			let registo =
				document.getElementById(
					"registo"

				);

			registo.style.display = "block";
			// console.log(this);
		}

	);
}