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
          <!--  MODAL ======================================== -->
          <div class="w3-container">
            <div class="w3-modal all_modal" id="cronometro_error" style="display:block; ;">
              <div class="w3-modal-content w3-card-4 w3-animate-zoom" style="max-width:600px;margin-bottom: 100px">
                <div class="w3-center">
                  <br/>
                  <span class="w3-button w3-xlarge w3-hover-red w3-display-topright btn_generico_cerrar_modal" title="Close Modal">
                    ×
                  </span>
                  <!--   <img alt="Avatar" class="w3-circle w3-margin-top avatar_inicio" id="avatar_inicio" src="./img/img_avatar4.png" style="width:30%"/> -->
                  <h5>
                    ERROR
                  </h5>
                </div>
                <div class="w3-container">
                  <div class="w3-section">
                    <p class="mensaje_cronometro_text">
                      xxxxxxxxxxxxxxxxxxxxxxxxxx
                    </p>
                  </div>
                </div>
                <div class="w3-container w3-border-top w3-padding-16 w3-light-grey">
                  <span class="w3-left w3-padding">
                    <button class="w3-button w3-red" type="button">
                      Cancel
                    </button>
                  </span>
                  <span class="w3-right w3-padding ">
                    <button class="w3-button w3-orange cambiar" type="button">
                      Cambiar
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <!--  MODAL ======================================== -->
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
