<!DOCTYPE html>
<html>
  <?php include_once "comp/head.php";?>
  <body class="w3-light-grey" style="display:block;">
    <div class="" id="cuerpo">
      <!-- Top container -->
      <div class="w3-main" id="main" style="margin-left:300px;margin-top:43px;">
        <!-- Cuerpo -->
        <div class="w3-container cuerpo">
          <!-- ///////////////////////////////////////////////////////////// -->
          <!-- -->
          <!--  REGISTRO ===================================== -->
          <div class="w3-container">
            <div class="w3-modal all_modal" id="registo" style="display:block;">
              <div class="w3-modal-content w3-card-4 w3-animate-zoom" style="max-width:600px;margin-bottom: 100px">
                <div class="w3-center">
                  <br/>
                  <span class="w3-button w3-xlarge w3-hover-red w3-display-topright btn_trgistro_top" title="Close Modal">
                    ×
                  </span>
                  <img alt="Avatar" class="w3-circle w3-margin-top avatar_inicio" id="avatar_inicio" src="./img/img_avatar4.png" style="width:30%"/>
                  <h5>
                    Restregase completando el formulario
                  </h5>
                </div>
                <div class="w3-container">
                  <div class="w3-section">
                    <label>
                      <b>
                        Nombre de usuario
                        <span class="mensaje_nombre_usuario">
                        </span>
                      </b>
                    </label>
                    <input class="w3-input w3-border w3-margin-bottom registro_nombre" name="nombre_usuario" placeholder="Enter Username" required="" type="text"/>
                    <div class="w3-section">
                      <label>
                        <b>
                          Contraseña
                          <span class="mensaje_pass">
                          </span>
                        </b>
                      </label>
                      <input class="w3-margin-bottom w3-input w3-border registro_pass" name="pass" placeholder="Enter Password" required="" type="password"/>
                      <label>
                        <b>
                          Repita la contraseña
                          <span class="mensaje_repite_pass">
                          </span>
                        </b>
                      </label>
                      <input class="w3-margin-bottom w3-input w3-border registro_repite_pass" name="repite_pass" placeholder="Enter Password" required="" type="password"/>
                      <!-- -->
                      <button class="w3-button w3-block w3-green w3-section w3-padding enviar" type="button">
                        Registrar
                      </button>
                    </div>
                  </div>
                </div>
                <div class="w3-container w3-border-top w3-padding-16 w3-light-grey">
                  <span class="w3-left w3-padding">
                    <button class="w3-button w3-red" id="btn_registro_cancel" type="button">
                      Cancel
                    </button>
                  </span>
                  <span class="w3-right w3-padding ">
                    <button class="w3-button w3-orange" id="iniciar_session" type="button">
                      Iniciar sección
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <!--  REGISTRO ===================================== -->
          <!-- ///////////////////////////////////////////////////////////// -->
        </div>
        <!-- Cuerpo -->
      </div>
    </div>
    <!-- ///////////////////////////////////////////////////////////// -->
    <!--  Zono de script  -->
    <!-- ///////////////////////////////////////////////////////////// -->
  </body>
</html>
