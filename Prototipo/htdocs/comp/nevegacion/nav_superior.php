<!-- ============================================================================= -->
<!--  Por el momento el  fichero que trabaja esta sección  es {inicio_automatico.js } -->
<div class="w3-bar w3-top w3-large" style="z-index:4; background-color: #ffccd5; padding: 0px !important;">
   <!--  La función llamada dentro del a etiqueta se desaconseja, por lo que se debe trabajar para sacar esta  función de evento  del elemento  {onclick="w3_open();"} -->
   <span class="w3-bar-item w3-button w3-hover-none w3-hover-text-light-grey" id="btn_muenu_usuario" onclick="w3_open();" style="display:none; ">
      <button class="w3-btn w3-ripple w3-green w3-round-xxlarge">
         Menú
      </button>
   </span>
   <!-- Se manipula este botón en el fichero inicio automedico  {inicio_automatico.js} -->
   <span class="w3-bar-item w3-right" id="cierra_sesion" style="">
      <button class="w3-btn w3-ripple w3-red w3-round-xxlarge">
         Salir
      </button>
   </span>
   <span class="w3-bar-item w3-right" id="btn_inicia_sesion" style="display:none;">
      <button class="w3-btn w3-ripple w3-red w3-round-xxlarge">
         Inicio
      </button>
   </span>
</div>
<!-- ============================================================================= -->
