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
          <div class="lactancia_cenos all_user_panel" style="display:block;">
            <!--    <link href="https://www.w3schools.com/w3css/4/w3.css" rel="stylesheet"/> -->
            <div class="w3-container">
              <!-- Page Heading -->
              <h1 class="h3 mb-4 text-gray-800" style="margin-top: 25px;">
                Lactancia
              </h1>
              <div class="w3-container cronometro">
                <div class="w3-row">
                  <div class="w3-col l5">
                    <div class="">
                      <button class="w3-btn w3-green ceno_izquerdo">
                        Izquerda
                      </button>
                      <button class="w3-btn w3-green ceno_derecho">
                        Derecha
                      </button>
                    </div>
                    <div class="display">
                      <h1>
                        <span class="hora">
                          00
                        </span>
                        :
                        <span class="minuto">
                          00
                        </span>
                        :
                        <span class="segundo">
                          00
                        </span>
                      </h1>
                    </div>
                    <div class="">
                      <button class="w3-btn w3-green comenzar">
                        Comenzar
                      </button>
                      <button class="w3-btn w3-red detener">
                        Detener
                      </button>
                      <button class="w3-btn w3-orange reiniciar">
                        Reiniciar
                      </button>
                      <p>
                        <button class="w3-btn w3-purple w3-block capturar">
                          Capturar
                        </button>
                      </p>
                    </div>
                  </div>
                  <div class="w3-col l7">
                    <table class="w3-table">
                      <thead>
                        <tr>
                          <th>
                            Ceno izquerdo
                          </th>
                          <th>
                            Ceno derecho
                          </th>
                          <!--    <th>
                           Points
                        </th> -->
                        </tr>
                      </thead>
                      <tbody>
                      </tbody>
                      <!--    <tfoot>
                     <tr>
                        <td>
                           Footer content 1
                        </td>
                        <td>
                           Footer content 2
                        </td>
                     </tr>
                  </tfoot> -->
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
