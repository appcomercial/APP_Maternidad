 function btn_generico_cerrar_modal(argument) {


  let btn_inicio_top =
    document.querySelector("#inicio .btn_generico_cerrar_modal");

  // console.log(btn_inicio_top);

  btn_inicio_top.addEventListener("click", function(argument) {
    let all_user_panel = document.querySelectorAll(".all_user_panel");

    for (var i = 0; i < all_user_panel.length; i++) {
      all_user_panel[i].style.display = "none";
    }
    let imagenes_galeria = document.querySelector(".imagenes_galeria");
    // let menu_navegacion = document.querySelector("#mySidebar");
    let inicio = document.getElementById("inicio");
    let btn_inicia_sesion = document.getElementById("btn_inicia_sesion");

    // console.log(menu_navegacion);
    inicio.style.display = "none";
    btn_inicia_sesion.style.display = "block";
    imagenes_galeria.style.display = "block";
    // menu_navegacion.style.display = "block";
  });


  // ==========================================

  let btn_trgistro_top =
    document.querySelector("#registo .btn_trgistro_top");

  console.log(btn_trgistro_top);

  btn_trgistro_top.addEventListener("click", function(argument) {
    let all_user_panel = document.querySelectorAll(".all_user_panel");

    for (var i = 0; i < all_user_panel.length; i++) {
      all_user_panel[i].style.display = "none";
    }
    let imagenes_galeria = document.querySelector(".imagenes_galeria");
    // let menu_navegacion = document.querySelector("#mySidebar");
    let registo = document.getElementById("registo");
    let btn_inicia_sesion = document.getElementById("btn_inicia_sesion");

    // console.log(menu_navegacion);
    registo.style.display = "none";
    btn_inicia_sesion.style.display = "block";
    imagenes_galeria.style.display = "block";
    // menu_navegacion.style.display = "block";
  });



  // ====================================

  //  Binebennida ocmporetaminto distinto 

  // let btn_inicia_sesion_top =
  //   document.querySelector("#inicio .inicia_sesion");

  // console.log(btn_inicio_top);

  // btn_inicio_top.addEventListener("click", function(argument) {
  //   let all_user_panel = document.querySelectorAll(".all_user_panel");

  //   for (var i = 0; i < all_user_panel.length; i++) {
  //     all_user_panel[i].style.display = "none";
  //   }
  //   let imagenes_galeria = document.querySelector(".imagenes_galeria");
  //   let menu_navegacion = document.querySelector("#mySidebar");
  //   let inicia_sesion = document.getElementById("inicia_sesion");
  //   let btn_inicia_sesion = document.getElementById("btn_inicia_sesion");

  //   console.log(menu_navegacion);
  //   inicia_sesion.style.display = "none";
  //   btn_inicia_sesion.style.display = "block";
  //   imagenes_galeria.style.display = "block";
  //   menu_navegacion.style.display = "block";
  // });


 }