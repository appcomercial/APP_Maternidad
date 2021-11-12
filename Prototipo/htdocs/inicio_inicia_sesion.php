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
          <!-- INICIA SESION ========================================== -->
          <div class="w3-container">
            <div class="w3-modal all_modal" id="inicia_sesion" style="display:block;">
              <div class="w3-modal-content w3-card-4 w3-animate-zoom" style="max-width:600px; height: 600px;">
                <div class="w3-center">
                  <br/>
                  <span class="w3-button w3-xlarge w3-hover-red w3-display-topright" onclick="document.getElementById('inicia_sesion').style.display='none'" title="Close Modal">
                    ×
                  </span>
                </div>
                <div class="w3-container">
                  <h5>
                    Bienbenido su cuanta esta activa
                  </h5>
                  <p>
                    Por favor inicie sesion para continuar
                  </p>
                  <button class="w3-button w3-block w3-teal" id="registro_inicio_sesion">
                    Iniciar sesion
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- INICIA SESION ========================================== -->
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
