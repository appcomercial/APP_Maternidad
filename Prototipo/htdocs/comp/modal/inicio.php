
<!-- INOICIO ================================= -->
<div class="w3-container">
   <div class="w3-modal all_modal" id="inicio" style="display:none; ;">
      <div class="w3-modal-content w3-card-4 w3-animate-zoom" style="max-width:600px;margin-bottom: 100px">
         <div class="w3-center">
            <br/>
            <span class="w3-button w3-xlarge w3-hover-red w3-display-topright btn_generico_cerrar_modal"  title="Close Modal">
               ×
            </span>
            <img alt="Avatar" class="w3-circle w3-margin-top avatar_inicio" id="avatar_inicio" src="./img/img_avatar4.png" style="width:30%"/>
            <h5>
               Inice session para continuar
            </h5>
         </div>
         <div  class="w3-container">
            <div class="w3-section">
               <label>
                  <b>
                     Usuario
                  </b>
               </label>
               <!--
               <input class="w3-input w3-border w3-margin-bottom" name="usrname" placeholder="Introduzca su Correo electrónico" required="" type="text"/>
               <label>
               <b>
               Correo electrónico
               </b>
               </label>
               -->
               <input class="w3-input w3-border w3-margin-bottom" name="usrname" placeholder="Introduzca su nombre de usuario" required="" type="text" id="nombre_usuario_inicio" />
               <label>
                  <b>
                     Contraseña
                  </b>
               </label>
               <input class="w3-input w3-border" name="psw" placeholder="Introducir la contraseña" required="" type="password" id="pass_inicio_session" />
               <button class="w3-button w3-block w3-green w3-section w3-padding" id="btn_inicio_sesion">
                  Inicio
               </button>
               <input checked="checked" class="w3-check w3-margin-top" type="checkbox"/>
               Recordarme
            </div>
         </div>
         <div class="w3-container w3-border-top w3-padding-16 w3-light-grey">
            <span class="w3-left w3-padding">
               <button class="w3-button w3-red" id="btn_inicio_cancel" type="button">
                  Cancel
               </button>
            </span>
            <span class="w3-right w3-padding ">
               <button class="w3-button w3-orange" id="registrase" type="button">
                  Registrase aquí
               </button>
            </span>
         </div>
      </div>
   </div>
</div>
<!-- INOICIO ================================= -->
