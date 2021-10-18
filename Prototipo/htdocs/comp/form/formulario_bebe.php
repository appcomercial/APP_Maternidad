<div class="formulario_bebe all_user_panel">
   <div class="container-fluid">
      <!-- Page Heading -->
      <h1 class="h3 mb-4 text-gray-800" style="margin-top: 25px;">
         Registro del bebe
      </h1>
      <div class="w3-container w3-light-grey form_formulario_bebe">
         <div class="w3-border-top w3-margin-bottom w3-padding-16">
            <p>
               ingresa los datos del bebe
            </p>
            <p>
               <label>
                  Nombre del bebe
               </label>
               <input class="w3-input w3-border w3-round" name="nombre_bebe" type="text"/>
            </p>
            <p>
               <label>
                  fecha_nacimiento_bebe
               </label>
               <input class="w3-input w3-border w3-round-large" name="fecha_naciminto_bebe" type="date"/>
            </p>
         </div>
         <div class="w3-border-top w3-margin-bottom w3-padding-16">
            <p>
               Genero del bebe
            </p>
            <p>
               <input  class="w3-radio" name="genero" type="radio" value="masculino"/>
               <label>
                  Male
               </label>
            </p>
            <p>
               <input class="w3-radio" name="genero" type="radio" value="femenino"/>
               <label>
                  Female
               </label>
            </p>
         </div>
       <!--   <div class="w3-border-top w3-margin-bottom w3-padding-16">
            <p>
               Lactancia
            </p>
            <p>
               <input  class="w3-radio" name="lactancia" type="radio" value="Lactancia"/>
               <label>
                  Lactancia
               </label>
            </p>
            <p>
               <input class="w3-radio" name="lactancia" type="radio" value="Formula"/>
               <label>
                  Formula
               </label>
            </p>
            <p>
               <input  class="w3-radio" name="lactancia" type="radio" value="Lactancia diferida"/>
               <label>
                  Lactancia diferida
               </label>
            </p>
            <p>
               <input class="w3-radio" name="lactancia" type="radio" value="Lactancia mixta"/>
               <label>
                  Lactancia mixta
               </label>
            </p>
         </div> -->
         <div class="w3-border-top w3-margin-bottom w3-padding-16">
            <p>
               <label>
                  Peso del bebe
               </label>
               <input class="w3-input w3-border w3-round" name="peso_bebe" type="number"/>
               <select name="" class="peso_medida">
                  <option value="kg">kg</option>
                  <option value="lb">lb</option>
               </select>
            </p>
         </div>
      </div>
      <div class="w3-container" style="margin-bottom: 100px;">
         <p>
            <button class="w3-btn w3-block w3-black btn_inserta_bebe">
               Button
            </button>
         </p>
      </div>
   </div>
</div>
