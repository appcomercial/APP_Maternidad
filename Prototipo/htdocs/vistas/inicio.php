<!DOCTYPE html>
<html>
   <?php include_once "comp/head.php";?>
   <body class="w3-light-grey" style="display:block;">
      <div class="" id="cuerpo" style=" display:none;">
         <!-- Top container -->
         <?php include "comp/nevegacion/nav_superior.php";?>
         <?php include_once 'comp/nevegacion/nav.php';?>
         <div class="w3-main" id="main" style="margin-left:300px;margin-top:43px;">
            <!--  contenedor  del cuerpo ============================================  -->
            <div class="w3-container cuerpo">
                <!-- ================ OMPONENTES ============================ -->
               <!--  Se incluyen todos los componentes que se usaran  -->
               <?php include_once 'comp/comp.php';?>
               <!-- ================= OMPONENTES ============================ -->
            </div>
            <!--  contenedor  del cuerpo ============================================  -->
         </div>
      </div>
      <!--    <script src="js/js.js" type="text/javascript">
      </script> -->
      <?php include_once "comp/javascripr_exe.php";?>
   </body>
</html>
