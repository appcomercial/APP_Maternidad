function fun_registrase(argument) {
	let btn_enviar = document.querySelector("#registo .enviar");
	let txt_registro_nombre =
		document.querySelector("#registo .registro_nombre");
	// let txt_registro_correo =
	// 	document.querySelector("#registo .registro_correo");
	let txt_registro_pass =
		document.querySelector("#registo .registro_pass");
	let txt_registro_repite_pass =
		document.querySelector("#registo .registro_repite_pass");
	txt_registro_nombre.value = "";
	// txt_registro_correo.value = "";
	txt_registro_pass.value = "";
	txt_registro_repite_pass.value = "";
	// console.log(txt_registro_nombre.value);
	// console.log(txt_registro_correo.value);
	// console.log(txt_registro_pass.value);
	// console.log(txt_registro_repite_pass.value);
	// ====================================================
	btn_enviar.addEventListener("click", function(argument) {
		console.log(btn_enviar);
		console.log(txt_registro_nombre.value);
		// console.log(txt_registro_correo.value);
		console.log(txt_registro_pass.value);
		console.log(txt_registro_repite_pass.value);

		// let formData = new FormData();
		// formData.append("nombre_usuario", nombre_usuario.value);
		// formData.append("correo", correo.value);
		// formData.append("pass", pass.value);
		let nombre_usuario = txt_registro_nombre.value;
		// let correo = txt_registro_correo.value;
		let pass = txt_registro_pass.value;
		let repite_pass = txt_registro_repite_pass.value;


		let formData = new FormData();
		formData.append("nombre_usuario", nombre_usuario);
		formData.append("pass", pass);



		let mensaje_repite_pass = document.querySelector(".mensaje_repite_pass");
		let mensaje_nombre_usuario = document.querySelector(".mensaje_nombre_usuario");
		let mensaje_pass = document.querySelector(".mensaje_pass");


		let mensaje_all_campos_vacios = "Vacio";

		if (nombre_usuario == "" || pass == "" || repite_pass == "") {

			mensaje_repite_pass.style.color = "red";
			mensaje_repite_pass.innerText = mensaje_all_campos_vacios;
			mensaje_nombre_usuario.style.color = "red";
			mensaje_nombre_usuario.innerText = mensaje_all_campos_vacios;
			mensaje_pass.style.color = "red";
			mensaje_pass.innerText = mensaje_all_campos_vacios;
			console.log('debe relenar todos los campos para registrarse');
		} else {
			console.log('perfecto todo lleno');

			// let mensaje_repite_pass = document.querySelector(".mensaje_repite_pass");
			if (pass == "" || mensaje_repite_pass == "") {
				console.log('Campos vacios del pass');
			} else {

				if (pass == repite_pass) {
					mensaje_repite_pass.style.color = "red";
					mensaje_repite_pass.innerText = "";


					// alert("enviado");
					inserta_usuario(formData);
				} else {
					mensaje_repite_pass.style.color = "red";
					mensaje_repite_pass.innerText = "las cointraseñas no coinciden";
					// alert("las cointraseñas no coinciden");
				}

			}

		}



		function inserta_usuario(datos) {

			$.ajax({
				url: 'php/registro_usuario.php',
				type: 'POST',
				data: datos,
				contentType: false,
				cache: false,
				processData: false,
			}).done(function() {

				console.log("success");

			}).fail(function(error) {

				console.log(error);

			}).always(function(resultado) {

				console.log(resultado);

				const json = resultado;
				const obj = JSON.parse(json);

				console.log(obj.respuesta);

				let existe_usuario = document.getElementById('existe_usuario');
				let error_server = document.getElementById('error_server');
				let inicia_sesion = document.getElementById('inicia_sesion');
				let registo = document.getElementById('registo');
				let inicio = document.getElementById('inicio');
				let btn_muenu_usuario = document.getElementById('btn_muenu_usuario');
				existe_usuario.style.display = "none";
				error_server.style.display = "none";
				inicia_sesion.style.display = "none";
				btn_muenu_usuario.style.display = "none";


				if (obj.respuesta == "existe") {

					existe_usuario.style.display = "block";
					error_server.style.display = "none";
					inicia_sesion.style.display = "none";
					registo.style.display = "none";
					inicio.style.display = "none";

				} else if (obj.respuesta == "error") {

					existe_usuario.style.display = "none";
					error_server.style.display = "block";
					inicia_sesion.style.display = "none";
					registo.style.display = "none";
					inicio.style.display = "none";

				} else if (obj.respuesta == "insertado") {

					registo.style.display = "none";
					inicio.style.display = "none";
					existe_usuario.style.display = "none";
					error_server.style.display = "none";
					inicia_sesion.style.display = "block";
					btn_muenu_usuario.style.display = "block";

				}

			});

		}

	});


	function rellenado_camposd_registro(argument) {

		let txt_registro_nombre =
			document.querySelector("#registo .registro_nombre");
		let txt_registro_pass =
			document.querySelector("#registo .registro_pass");
		let txt_registro_repite_pass =
			document.querySelector("#registo .registro_repite_pass");
		let mensaje_repite_pass = document.querySelector(".mensaje_repite_pass");
		let mensaje_nombre_usuario = document.querySelector(".mensaje_nombre_usuario");
		let mensaje_pass = document.querySelector(".mensaje_pass");

		txt_registro_nombre.addEventListener("keyup", function(argument) {
			if (this.value.length > 0) {
				mensaje_nombre_usuario.innerText = "";
			}
		});
		txt_registro_pass.addEventListener("keyup", function(argument) {
			if (this.value.length > 0) {
				mensaje_pass.innerText = "";
			}
		});
		txt_registro_repite_pass.addEventListener("keyup", function(argument) {
			if (this.value.length > 0) {
				mensaje_repite_pass.innerText = "";
			}
		});

		// mensaje_repite_pass.style.color = "red";
		// mensaje_repite_pass.innerText = mensaje_all_campos_vacios;
		// mensaje_nombre_usuario.style.color = "red";
		// mensaje_nombre_usuario.innerText = mensaje_all_campos_vacios;
		// mensaje_pass.style.color = "red";
		// mensaje_pass.innerText = mensaje_all_campos_vacios;

	}
	rellenado_camposd_registro();

	// ====================================================

}