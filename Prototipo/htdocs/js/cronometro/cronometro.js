function cronometro(argument) {
	var horas = 0;
	var minutos = 0;
	var segundos = 0;
	var corriendo = false;
	var intervalo;
	var cene_selecionado = false;
	var detenido = false;

	let btn_comenzar = document.querySelector(".cronometro .comenzar");
	let btn_detener = document.querySelector(".cronometro .detener");
	let btn_reiniciar = document.querySelector(".cronometro .reiniciar");
	let btn_capturar = document.querySelector(".cronometro .capturar");
	let btn_ceno = document.querySelector(".cronometro .ceno");

	var hora = document.querySelector(".cronometro .hora");
	var minuto = document.querySelector(".cronometro .minuto");
	var segundo = document.querySelector(".cronometro .segundo");

	var btn_ceno_izquerdo = document.querySelector(".cronometro .ceno_izquerdo");
	var btn_ceno_derecho = document.querySelector(".cronometro .ceno_derecho");
	var btn_cambiar = document.querySelector("#cronometro_error .cambiar");

	var btn_cerrar = document.querySelector("#cronometro_error .btn_generico_cerrar_modal");

	btn_cerrar.addEventListener("click", function(argument) {
		let cronometro_error = document.getElementById("cronometro_error");
		cronometro_error.style.display = "none";
	});


	// =======================================================
	var historial_izquerda = [];
	var historial_derecha = [];

	btn_ceno_izquerdo.addEventListener("click", function(argument) {

		// console.log(this.style.backgroundColor);

		if (horas > 0 || minutos > 0 || segundos > 0) {
			if (this.classList.contains("w3-orange")) {

			} else {
				let cronometro_error = document.getElementById("cronometro_error");
				cronometro_error.style.display = "block";
			}

			// alert("cirnometro corriendo que desea hacer");
		} else {
			if (this.classList.contains("w3-green")) {
				this.classList.remove("w3-green");
				this.classList.add("w3-orange");

				btn_ceno_derecho.classList.remove("w3-orange");
				btn_ceno_derecho.classList.add("w3-green");



			} else {
				this.classList.add("w3-green");
				this.classList.remove("w3-orange");

				btn_ceno_derecho.classList.remove("w3-green");
				btn_ceno_derecho.classList.add("w3-orange");
			}
			cene_selecionado = true;
		}



	});

	btn_ceno_derecho.addEventListener("click", function(argument) {

		// console.log(this.style.backgroundColor);


		if (horas > 0 || minutos > 0 || segundos > 0) {
			if (this.classList.contains("w3-orange")) {

			} else {
				let cronometro_error = document.getElementById("cronometro_error");
				cronometro_error.style.display = "block";
			}

		} else {
			if (this.classList.contains("w3-green")) {
				this.classList.remove("w3-green");
				this.classList.add("w3-orange");
				btn_ceno_izquerdo.classList.remove("w3-orange");
				btn_ceno_izquerdo.classList.add("w3-green");


			} else {
				this.classList.add("w3-green");
				this.classList.remove("w3-orange");

				btn_ceno_izquerdo.classList.remove("w3-green");
				btn_ceno_izquerdo.classList.add("w3-orange");
			}

			cene_selecionado = true;
		}


	});

	btn_cambiar.addEventListener("click", function(argument) {

		if (btn_ceno_derecho.classList.contains("w3-green")) {
			btn_ceno_derecho.classList.remove("w3-green");
			btn_ceno_derecho.classList.add("w3-orange");
			btn_ceno_izquerdo.classList.remove("w3-orange");
			btn_ceno_izquerdo.classList.add("w3-green");

		} else if (btn_ceno_izquerdo.classList.contains("w3-green")) {
			btn_ceno_izquerdo.classList.remove("w3-green");
			btn_ceno_izquerdo.classList.add("w3-orange");
			btn_ceno_derecho.classList.remove("w3-orange");
			btn_ceno_derecho.classList.add("w3-green");
		}

		btn_reiniciar.click();
		btn_comenzar.click();
		btn_cerrar.click();

	});


	btn_capturar.addEventListener("click", function(argument) {

		if (btn_ceno_izquerdo.classList.contains("w3-orange")) {
			historial_izquerda.push(horas + "" + minutos + "" + segundos);
			console.log('-----------------------------------');
			console.log("Seno izquerdo historial");
			console.log(historial_izquerda);
			console.log('-----------------------------------');

		} else if (btn_ceno_derecho.classList.contains("w3-orange")) {
			historial_derecha.push(horas + "" + minutos + "" + segundos);
			console.log('-----------------------------------');
			console.log("Seno derecho historial");
			console.log(historial_derecha);
			console.log('-----------------------------------');

		} else {
			alert("debes elegir el lado del ceno ");
		}

		// console.log(horas + "" + minutos + "" + segundos);
		// historial.push(horas + "" + minutos + "" + segundos);
		// console.log(historial);
	});

	btn_comenzar.addEventListener("click", function(argument) {

		if (cene_selecionado) {

			if (corriendo) {

			} else {

				intervalo = setInterval(contador, 1000);
				corriendo = true;
			}
		} else {

			alert("debes elegir el lado del ceno ");
		}



	});

	btn_detener.addEventListener("click", function(argument) {



		if (true) {}

		if (corriendo) {
			clearInterval(intervalo);
			corriendo = false;
		}


	});

	btn_reiniciar.addEventListener("click", function(argument) {
		corriendo = false;
		clearInterval(intervalo);
		horas = 0;
		minutos = 0;
		segundos = 0;

		hora.textContent = "00";
		minuto.textContent = "00";
		segundo.textContent = "00";



	});


	function contador(argument) {

		segundos += 1;

		if (segundos >= 60) {
			segundos = 0;
			minutos += 1;

		}

		if (minutos >= 60) {
			minutos = 0;
			horas += 1;
		}


		if (horas <= 9) {
			hora.textContent = "0" + horas;
		} else {
			hora.textContent = horas;
		}

		if (minutos <= 9) {
			minuto.textContent = "0" + minutos;
		} else {
			minuto.textContent = minutos;
		}

		if (segundos <= 9) {
			segundo.textContent = "0" + segundos;
		} else {
			segundo.textContent = segundos;
		}

	}
}

cronometro();

// var myVar = setInterval(myTimer, 1000);

// function myTimer() {
// 	var d = new Date();
// 	var t = d.toLocaleTimeString();
// 	document.getElementById("demo").innerHTML = t;
// }

// function myStopFunction() {
// 	clearInterval(myVar);
// }