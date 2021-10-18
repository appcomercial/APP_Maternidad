function inicio_de_sesion(argument) {

	//  ================================================================
	//  selección de elementos involucrados en acciones definidas aquí. . 
	let btn_inicio_sesion = document.getElementById("btn_inicio_sesion");
	let btn_inicio_cancel = document.getElementById("btn_inicio_cancel");
	let nombre_usuario_inicio = document.getElementById("nombre_usuario_inicio");
	let pass_inicio_session = document.getElementById("pass_inicio_session");
	let btn_inicia_sesion = document.getElementById('btn_inicia_sesion');
	let inicio = document.getElementById('inicio');
	let imagenes_galeria = document.querySelector(".imagenes_galeria");
	//  ================================================================


	// ---------------------------------------------------------------------
	//  SE define la acción de los botones en el modal de inicio de sesión 
	btn_inicio_cancel.addEventListener("click", function(argument) {

		inicio.style.display = "none";
		imagenes_galeria.style.display = "block";
		btn_inicia_sesion.style.display = "block";

	});

	btn_inicia_sesion.addEventListener("click", function(argument) {

		inicio.style.display = "block";
		imagenes_galeria.style.display = "none";
		btn_inicia_sesion.style.display = "none";

	});
	// ---------------------------------------------------------------------



	// ----------------------------------------------------------------------
	//  Acción para el botón de inicio de sesión
	btn_inicio_sesion.addEventListener("click", function(argument) {
		console.log('inisiar sesion');
		console.log(this);
		console.log(nombre_usuario_inicio.value);
		console.log(pass_inicio_session.value);
		let formData = new FormData();
		formData.append("nombre_usuario", nombre_usuario_inicio.value);
		// formData.append("correo", correo);
		formData.append("pass", pass_inicio_session.value);

		function inicia_sesion(datos) {
			// =========
			//  Función  de JQUERY
			$.ajax({
				url: 'php/inicio_sesion.php',
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



				// ------------------------
				// console.log(obj.respuesta);
				// ------------------------


				// ==========================================
				//  Solo si en un solo registro se ejecutara 
				//  debería controlarse en el servidor 
				if (obj.respuesta == 1) {

					// ------------------------------------------
					// alert("logeado");
					// console.log(obj.datos[0]);
					// console.log(obj.datos[0]['idusuario']);
					// console.log(obj.datos[0]['nombre_usuario']);
					// ------------------------------------------
					// ---------------------------------------------------------------------------
					// Todos los elementos  con una case  .nombre_usuario, tendrán el nombre del usuario  por ahora 
					let nombre_usuario = document.querySelectorAll(".nombre_usuario");

					for (var i = 0; i < nombre_usuario.length; i++) {

						nombre_usuario[i].textContent = obj.datos[0]["nombre_usuario"];
					}
					// ---------------------------------------------------------------------------


					let formulario_bebe = document.querySelector(".formulario_bebe");
					let imagenes_galeria = document.querySelector(".imagenes_galeria");
					let inicio = document.getElementById('inicio');
					let bienvenida_inicio = document.getElementById('bienvenida_inicio');
					let btn_muenu_usuario = document.getElementById('btn_muenu_usuario');
					let cierra_sesion = document.getElementById("cierra_sesion");


					cierra_sesion.style.display = "block";
					inicio.style.display = "none";;
					bienvenida_inicio.style.display = "block";
					btn_muenu_usuario.style.display = "block";

					// Se ajusta en almacenaje local  el id del usuario, 
					// esto debe cambiar por seguridad  a sistema con 
					// acceso de ficha "token" generada en el servidor 
					localStorage.setItem('idusuario', obj.datos[0]['idusuario']);



					// ------------------------------------------------
					// console.log('idusuario es');
					// console.log(localStorage.getItem("idusuario"));
					// ------------------------------------------------


				} else if (obj.respuesta == 0) {

					// Se debe controlar todo cuando el usuario 
					// introduce una contraseña errónea o falla 
					// el intento de inicio de sesión. 
					alert("No esta logeado");


				}
				// ==========================================


			});
			// =========
		}

		inicia_sesion(formData);

	});
	// ----------------------------------------------------------------------



}