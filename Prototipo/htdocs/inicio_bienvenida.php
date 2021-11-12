<!DOCTYPE html>
<html>
  <?php include_once "comp/head.php";?>
  <body class="w3-light-grey" style="display:block;">
    <div class="" id="cuerpo">
      <!-- Top container -->
      <div class="w3-main" id="main" style="margin-left:300px;margin-top:43px;">
        <!--  contenedor  del cuerpo ============================================  -->
        <div class="w3-container cuerpo">
          <!-- ================ OMPONENTES ============================ -->
          <!--  Se incluyen todos los componentes que se usaran  -->
          <!-- BIENBENIDA INICIO ======================================= -->
          <div class="w3-container">
            <div class="w3-modal all_modal" id="bienvenida_inicio">
              <div class="w3-modal-content w3-card-4 w3-animate-zoom" style="max-width:600px; height: 600px;">
                <div class="w3-center">
                  <br/>
                  <span class="w3-button w3-xlarge w3-hover-red w3-display-topright" title="Close Modal">
                    ×
                  </span>
                  <div class="aviso_completa_perfil" style="display: none;">
                    <img alt="Avatar" class="w3-circle w3-margin-top w3-padding" src="./img/alerta.png" style="width:30%"/>
                    <div class="w3-container">
                      <button class="w3-button w3-block w3-orange w3-card btn_completa_perfil" style="width: 60%;; margin:auto; border-radius: 17px;">
                        Personalice su perfil
                      </button>
                    </div>
                    <!--    <input class="w3-check btn_no_mostrar_alerta_perfil_incompleto" type="checkbox"/>
               <label>
                  No mostrar de nuevo
               </label> -->
                  </div>
                </div>
                <div class="w3-container-fluid">
                  <div class="w3-container">
                    <h5>
                      Ha iniciado sesión
                    </h5>
                    <p>
                      Bienvenido ¿Que desea hacer ?
                    </p>
                  </div>
                  <div class="w3-container-fluid">
                    <div class="w3-row">
                      <div class="w3-col" style="width:50%;padding: 5px;">
                        <button class="w3-button w3-block w3-green w3-margin-top w3-margin-bottom btn_agregar_bebe">
                          Agregar bebe
                        </button>
                        <button class="w3-button w3-block w3-green w3-margin-top w3-margin-bottom">
                          Ver reportes
                        </button>
                      </div>
                      <div class="w3-col" style="width:50%;padding: 5px;">
                        <button class="w3-button w3-block w3-green w3-margin-top w3-margin-bottom">
                          Listado de bebes
                        </button>
                        <button class="w3-button w3-block w3-green w3-margin-top w3-margin-bottom">
                          Ver perfil
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- BIENBENIDA INICIO ======================================= -->
          <!-- ================= OMPONENTES ============================ -->
        </div>
        <!--  contenedor  del cuerpo ============================================  -->
      </div>
    </div>
    <!--    <script src="js/js.js" type="text/javascript">
      </script> -->
    <script src="js/test/main.js" type="text/javascript">
    </script>
  </body>
</html>
