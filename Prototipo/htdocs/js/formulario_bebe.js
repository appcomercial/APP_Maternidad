console.log('formulario_bebe');

function modal_bagregar_bebe(argument) {
	let btn_agregar_bebe =
		document.querySelector(
			".btn_agregar_bebe");

	let imagenes_galeria =
		document.querySelector(
			".imagenes_galeria");

	let formulario_bebe =
		document.querySelector(
			".formulario_bebe");

	let bienvenida_inicio =
		document.getElementById("bienvenida_inicio");

	btn_agregar_bebe.addEventListener(
		"click",
		function() {

			imagenes_galeria.style.display = "none";
			formulario_bebe.style.display = "block";
			bienvenida_inicio.style.display = "none";
			// inicio.style.display = "none";
			console.log(this);
		});

}

function inserta_bebe(argument) {

	let nombre_bebe =
		document.querySelector(
			'.form_formulario_bebe [name="nombre_bebe"]'
		);
	nombre_bebe.value = "";

	let fecha_naciminto_bebe =
		document.querySelector(
			'.form_formulario_bebe [name="fecha_naciminto_bebe"]'
		);
	fecha_naciminto_bebe.value = "";

	let genero =
		document.querySelectorAll(
			'.form_formulario_bebe [name="genero"]'
		);
	for (var i = 0; i < genero.length; i++) {
		genero[i].checked = false;
	}

	let lactancia =
		document.querySelectorAll(
			'.form_formulario_bebe [name="lactancia"]'
		);
	for (var i = 0; i < lactancia.length; i++) {
		lactancia[i].checked = false;
	}

	let peso_bebe =
		document.querySelector(
			'.form_formulario_bebe [name="peso_bebe"]'
		);
	peso_bebe.value = "";
	let peso_medida = document.querySelector(".formulario_bebe .peso_medida ");
	console.log(peso_medida);

	let btn_inserta_bebe =
		document.querySelector(".formulario_bebe .btn_inserta_bebe");

	btn_inserta_bebe.addEventListener("click", function(argument) {
		// alert("Boton funcionando ");
		// console.log('nombre_bebe');
		// console.log(nombre_bebe);
		// console.log('fecha_naciminto_bebe');
		// console.log(fecha_naciminto_bebe);
		// console.log('genero');
		// console.log(genero);
		// console.log('lactancia');
		// console.log(lactancia);
		// console.log('peso_bebe');
		// console.log(peso_bebe);
		let mensaje_bebe_registro_text_nombre_bebe =
			document.querySelector(
				"#mensaje_bebe_registro .mensaje_bebe_registro_text_nombre_bebe");

		let mensaje_bebe_registro_text_fecha_naciminto_bebe =
			document.querySelector(
				"#mensaje_bebe_registro .mensaje_bebe_registro_text_fecha_naciminto_bebe");

		let mensaje_bebe_registro_text_genero =
			document.querySelector(
				"#mensaje_bebe_registro .mensaje_bebe_registro_text_genero");

		// let mensaje_bebe_registro_text_lactancia =
		// 	document.querySelector(
		// 		"#mensaje_bebe_registro .mensaje_bebe_registro_text_lactancia");

		let mensaje_bebe_registro_text_peso_bebe =
			document.querySelector(
				"#mensaje_bebe_registro .mensaje_bebe_registro_text_peso_bebe");

		let mensaje_bebe_registro =
			document.getElementById(
				"mensaje_bebe_registro");



		// function valuidacampos(nombre, fecha, genero, lactancia, peso) {
		function valuidacampos(nombre, fecha, genero, peso) {



			let respuesta = {
				nombre: "",
				fecha: "",
				genero: "",
				// lactancia: "",
				peso: "",

			}


			if (nombre.length > 0) {

				respuesta.nombre = "si";
			}
			if (fecha.length > 0) {

				respuesta.fecha = "si";
			}
			if (genero.length > 0) {

				respuesta.genero = "si";
			}
			// if (lactancia.length > 0) {

			// 	respuesta.lactancia = "si";
			// }
			if (peso.length > 0) {

				respuesta.peso = "si";
			}

			return respuesta;
		}
		console.log('nombre_bebe');
		console.log(nombre_bebe);
		console.log('fecha_naciminto_bebe');
		console.log(fecha_naciminto_bebe);
		console.log('genero');
		console.log(genero);
		console.log('lactancia');
		console.log(lactancia);
		console.log('peso_bebe');
		console.log(peso_bebe);
		var valor_genero = "";
		for (var i = 0; i < genero.length; i++) {

			if (genero[i].checked) {
				valor_genero = genero[i].value;
			}

		}
		var valor_lactancia = "";
		for (var i = 0; i < lactancia.length; i++) {

			if (lactancia[i].checked) {
				valor_lactancia = lactancia[i].value;
			}

		}

		let validacion = valuidacampos(nombre_bebe.value, fecha_naciminto_bebe.value, valor_genero, peso_bebe.value);
		// let validacion = valuidacampos(nombre_bebe.value, fecha_naciminto_bebe.value, valor_genero, valor_lactancia, peso_bebe.value);


		validacion.nombre
		validacion.fecha
		validacion.genero
		// validacion.lactancia
		validacion.peso


		if (validacion.nombre == "" ||
			validacion.fecha == "" ||
			validacion.genero == "" ||
			// validacion.lactancia == "" ||
			validacion.peso == "") {

			alert("algun campo esta vacio");

		} else {

			mensaje_bebe_registro.style.display = "block";

			mensaje_bebe_registro_text_nombre_bebe.textContent =
				nombre_bebe.value;

			mensaje_bebe_registro_text_fecha_naciminto_bebe.textContent =
				fecha_naciminto_bebe.value;

			mensaje_bebe_registro_text_genero.textContent =
				valor_genero;

			// mensaje_bebe_registro_text_lactancia.textContent =
			// 	valor_lactancia;

			mensaje_bebe_registro_text_peso_bebe.textContent =
				peso_bebe.value + " " + peso_medida.value;
		}



		// *********************************************************
		// Peso y medida (kg o lb) (in o cm) **** medidas estandar
		// *********************************************************
		// node.textContent = text;
		// node.textContent = text;

		// =========================================

		let mensaje_bebe_registro_enviar =
			document.querySelector("#mensaje_bebe_registro #mensaje_bebe_registro_enviar");

		mensaje_bebe_registro_enviar.addEventListener("click",
			function(argument) {
				let formData = new FormData(); // Currently empt

				formData.append('nombre_bebe', nombre_bebe.value);
				formData.append('fecha_nacimiento_bebe', fecha_naciminto_bebe.value);
				formData.append('genero', valor_genero);
				formData.append('lactancia', valor_lactancia);
				formData.append('peso', peso_bebe.value);


				$.ajax({
					url: 'php/registro_bebe.php',
					type: 'POST',
					data: formData,
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
					if (obj.respuesta == "ok") {
						// alert('Registro insertado');
						mensaje_bebe_registro.style.display = "none";
						let bebe_insertado = document.getElementById("bebe_insertado");
						let bebe_insertado_btn_close =
							document.querySelector(
								"#bebe_insertado .btn_generico_cerrar_modal");



						bebe_insertado.style.display = "block";
						bebe_insertado_btn_close.addEventListener("click", function(argument) {
							bebe_insertado.style.display = "none";
							// inserta_bebe();
						});

					}

				});



			});


		// =========================================
	});

	btn_cerrar_modal_insertabebe_top();


}

// inserta_bebe();



// INserta bebe boton funcion y eso

function btn_cerrar_modal_insertabebe_top(argument) {
	let btn_generico_cerrar_modal = document.querySelector("#mensaje_bebe_registro .btn_generico_cerrar_modal");
	btn_generico_cerrar_modal.addEventListener("click", function(argument) {
		let mensaje_bebe_registro =
			document.getElementById(
				"mensaje_bebe_registro");

		mensaje_bebe_registro.style.display = "none";
	});
}



function inserta_bebe_en_db(argument) {
	// body...
}