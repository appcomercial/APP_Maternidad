<!DOCTYPE html>
<html>
  <?php include_once "comp/head.php";?>
  <body class="w3-light-grey" style="display:block;">
    <div class="" id="cuerpo">
      <!-- Top container -->
      <div class="w3-main" id="main" style="margin-left:300px;margin-top:43px;">
        <!--  contenedor  del cuerpo ============================================  -->
        <div class="w3-container cuerpo">
          <!--  BEBE INSERTADO ============================================ -->
          <div class="w3-container">
            <div class="w3-modal all_modal" id="bebe_insertado" style="display:block; ">
              <div class="w3-modal-content w3-card-4 w3-animate-zoom" style="max-width:600px;margin-bottom: 100px">
                <div class="w3-center">
                  <br/>
                  <span class="w3-button w3-xlarge w3-hover-red w3-display-topright btn_generico_cerrar_modal" title="Close Modal">
                    ×
                  </span>
                  <img alt="Avatar" class="w3-circle w3-margin-top avatar_inicio" id="avatar_inicio" src="./img/bebefeliz.gif" style="width:30%"/>
                  <h5>
                    Los datos furon insertados
                  </h5>
                </div>
                <div class="w3-container">
                  <div class="w3-section">
                    <p class="bebe_insertado_mensaje">
                      <!--        Ahora podra tener seguiminto de lactancia peos y otras datos sobre la apliemtacion y cresimiento de su bebe. -->
                  Ahora podrá tener seguimiento de lactancia, peso y otros datos sobre la aplicación y crecimiento de su bebé.
                    </p>
                  </div>
                </div>
                <div class="w3-container w3-border-top w3-padding-16 w3-light-grey">
                  <!-- <span class="w3-left w3-padding">
               <button class="w3-button w3-red" id="xxxxxxxxx" type="button">
                  Cancel
               </button>
            </span>
            <span class="w3-right w3-padding ">
               <button class="w3-button w3-orange" id="xxxxxxxx" type="button">
                  Enviar
               </button> -->
                </div>
              </div>
            </div>
          </div>
          <div class="w3-container">
          </div>
        </div>
      </div>
    </div>
  </body>
</html>