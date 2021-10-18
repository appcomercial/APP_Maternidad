		function inicio_automatico(argument) {

			// Elemento pertenece al fichero nav_superior.php
			// ubicado en el directorio de componentes {nav_superior.php}
			let cierra_sesion =
				document.getElementById(
					"cierra_sesion"
				);

			let imagenes_galeria =
				document.querySelector(".imagenes_galeria");

			let nav_lateral =
				document.getElementById("nav_lateral_contenedor");

			let btn_cerrar_nav =
				document.getElementById("btn_cerar_nav_lateral");

			let main =
				document.getElementById("main");

			let cuerpo =
				document.getElementById('cuerpo');

			let bienvenida_inicio =
				document.getElementById('bienvenida_inicio');

			let formulario_bebe =
				document.querySelector(".formulario_bebe");

			let btn_muenu_usuario =
				document.getElementById('btn_muenu_usuario');


			cierra_sesion.style.display = "none";
			imagenes_galeria.style.display = "none";


			btn_vav();
			modal_bagregar_bebe();
			// -------------------
			// Evento click para cerrar sesión y eliminar los datos en el navegador 
			cierra_sesion.addEventListener("click", function(argument) {

				localStorage.clear();
				location.reload();

			});
			// -------------------
			// se determina los datos almacenados locamente 
			// de la aplicación en el navegador.

			if (localStorage.length == 0) {
				// No se encontró datos de inicio de sesión 
				no_esta_logeado();

			} else {

				// Si se encuentra una dato de inicio de sesión se ejecuta aquí. 
				btn_muenu_usuario.style.display = "block";
				formulario_bebe.style.display = "none";
				nav_lateral.style.display = 'none';
				btn_cerrar_nav.style.display = "none";
				nav_lateral.style.width = "0px";
				main.style.marginLeft = "0px";
				cuerpo.style.display = "block";
				bienvenida_inicio.style.display = "block";
				cierra_sesion.style.display = "block";

				console.log('Id del usuario es');
				console.log(localStorage.getItem("idusuario"));


				// Recupera los datos necesarios de imágenes y todo lo demás
				// debería pensarse en todos los datos necesarios aquí 
				// Esta consulta debe regresar los datos del usuario directamente 
				// y así podemos personalizar el inicio automático. 
				// POdemos trabajar con una ficha "token" de inicio de sesión almacenados 
				// en el base de datos y no comprometer los datos reales del usuario 

				let formData = new FormData();
				formData.append("idusuario", localStorage.getItem("idusuario"));

				// ------------------------------------
				// Usuario datos llenos debería retornar cierto o falso y poder reutilizarla 
				// en distintas secciones criticas del sistema 
				usuario_datos_llenos(formData);
				// ------------------------------------

			}
		}


		function no_esta_logeado(argument) {

			let formulario_bebe = document.querySelector(".formulario_bebe");
			let cuerpo = document.getElementById("cuerpo");

			cuerpo.style.display = "block";
			formulario_bebe.style.display = "none";

			navegacion_inicio();
			inicio();
			btn_registrarce();
			fun_registrase();
			inicio_de_sesion();
			exiixte_usuario_modal();


			let registro_inicio_sesion =
				document.getElementById(
					"registro_inicio_sesion"
				);

			registro_inicio_sesion.addEventListener("click", function(argument) {

				let inicia_sesion = document.getElementById("inicia_sesion");
				let inicio = document.getElementById('inicio');

				inicio.style.display = "block";
				inicia_sesion.style.display = "none";

			});
		}


		// Se verifica si el usuario tiene los 
		// datos llenos o no y se toma acción
		// Nota Función puede ser almacenada en 
		// otro fichero diferente. 
		function usuario_datos_llenos(datos) {
			$.ajax({
				url: 'php/usuario_datos_llenos.php',
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
				// console.log(resultado);
				const json = resultado;


				const obj = JSON.parse(json);

				console.log(obj.respuesta);

				if (obj.respuesta == 1) {

					console.log(obj.datos[0]);
					console.log(obj.datos[0]['nombre_cliente']);

					let aviso_completa_perfil =
						document.querySelector(".aviso_completa_perfil");
					let btn_completa_perfil =
						document.querySelector(".btn_completa_perfil");

					btn_completa_perfil.addEventListener(
						"click",
						function(argument) {

							let bienvenida_inicio = document.getElementById("bienvenida_inicio");
							let perfil_usuario = document.querySelector(".perfil_usuario");

							bienvenida_inicio.style.display = "none";
							perfil_usuario.style.display = "block";

						});

					let cuerpo = document.getElementById('cuerpo');


					// Se recuperan los datos y si uno de los datos no esta completado 
					// despliega componente dentro de modal con aviso. 
					if (obj.datos[0]['nombre_cliente'] == null ||
						obj.datos[0]['apellido_cliente_paterno'] == null ||
						obj.datos[0]['apellido_cliente_materno'] == null ||
						obj.datos[0]['id_etapa'] == null ||
						obj.datos[0]['fecha_regreso'] == null ||
						obj.datos[0]['id_genero'] == null) {

						console.log('es nulo');

						aviso_completa_perfil.style.display = "block";

						let nombre_usuario = document.querySelectorAll(".nombre_usuario");

						for (var i = 0; i < nombre_usuario.length; i++) {

							nombre_usuario[i].textContent = obj.datos[0]["nombre_usuario"];
						}



					} else {

						//  Debe ocultar mensaje ya que el usuario tiene todos los datos rellenados en su perfil. 
						aviso_completa_perfil.style.display = "none";

						console.log('no es nulo ');
					}

					console.log(aviso_completa_perfil);

				} else {


					// -------------------
					// Debe cambiarse por un modal y le mensaje 
					// debe ser corto para el usuario final
					alert(
						"Algo sucede con la el galleta no cuadra en la " +
						"base de datos, elimina las galletas " +
						"datos de esta pagina en el navegador y vuelve a registrarte"
					);

					//  Elimina los datos del navegador y recarga la pagina. 
					localStorage.clear();
					location.reload();


				}



			});
		}