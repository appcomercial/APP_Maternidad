<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8"/>
      <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
      <link href="css/w3.css" rel="stylesheet" type="text/css"/>
      <script src="js/chat.js" type="text/javascript">
      </script>
      <title>
         Document
      </title>
   </head>
   <body>
      <div class="w3-content" style="max-width:550px; margin-top:50px;">
         <div class="w3-container">
            <div class="">
               <div class="w3-center">
                  <br/>
                  <img alt="Avatar" class="w3-circle w3-margin-top" src="img/img_avatar4.png" style="width:30%"/>
               </div>
               <form action="" class="w3-container">
                  <div class="w3-section">
                     <label>
                        <b>
                           Username
                        </b>
                     </label>
                     <input class="w3-input w3-border w3-margin-bottom" name="usrname" placeholder="Enter Username" required="" type="text"/>
                     <label>
                        <b>
                           Password
                        </b>
                     </label>
                     <input class="w3-input w3-border" name="psw" placeholder="Enter Password" required="" type="password"/>
                     <button class="w3-button w3-block w3-green w3-section w3-padding" type="submit">
                        Login
                     </button>
                     <input checked="checked" class="w3-check w3-margin-top" type="checkbox"/>
                     Remember me
                  </div>
               </form>
               <div class="w3-container w3-border-top w3-padding-16 w3-light-grey">
                  <button class="w3-button w3-red" onclick="document.getElementById('id01').style.display='none'" type="button">
                     Cancel
                  </button>
                  <span class="w3-right w3-padding w3-hide-small">
                     Forgot
                     <a href="#">
                        password?
                     </a>
                  </span>
               </div>
            </div>
         </div>
      </div>
   </body>
</html>
