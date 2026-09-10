/* =========================
   PÁGINA 2
   ========================= */

   const tarjetas = document.querySelectorAll(".tarjeta");
   const final = document.querySelector(".final");
   
   let vistas = 0;
   
   tarjetas.forEach((tarjeta) => {
   
       tarjeta.addEventListener("click", () => {
   
           if (
               tarjeta.classList.contains("bloqueada") &&
               vistas < tarjetas.length
           ) {
               return;
           }
   
           if (!tarjeta.classList.contains("mostrada")) {
   
               tarjeta.classList.add("mostrada");
   
               if (!tarjeta.classList.contains("vista")) {
                   tarjeta.classList.add("vista");
                   vistas++;
               }
   
               setTimeout(() => {
   
                   tarjeta.classList.remove("mostrada");
   
                   if (vistas < tarjetas.length) {
                       tarjeta.classList.add("bloqueada");
                   }
   
                   if (vistas === tarjetas.length) {
   
                       tarjetas.forEach((t) => {
                           t.classList.remove("bloqueada");
                       });
   
                       setTimeout(() => {
                           final.classList.add("visible");
                       }, 500);
                   }
   
               }, 5000);
           }
   
       });
   
   });
   
   
   /* =========================
      PÁGINA 3 — LETRAS K
      ========================= */
   
   const contenedorK = document.getElementById("contenedorK");
   
   if (contenedorK) {
   
       function crearK() {
   
           const k = document.createElement("span");
   
           k.classList.add("letra-k");
           k.textContent = "K";
   
           const izquierda = Math.random() * 94;
           const arriba = Math.random() * 90;
   
           k.style.left = izquierda + "%";
           k.style.top = arriba + "%";
   
           const tamaño = 1.5 + Math.random() * 1.5;
   
           k.style.fontSize = tamaño + "rem";
   
           contenedorK.appendChild(k);
   
           setTimeout(() => {
               k.remove();
           }, 4000);
       }
   
       setInterval(() => {
           crearK();
       }, 1200);
   }
   
   
   /* =========================
      PÁGINA 3 — CANDADO
      ========================= */
   
   const candado = document.getElementById("candadoCorazon");
   const zonaPassword = document.getElementById("zonaPassword");
   
   if (candado && zonaPassword) {
   
       let toques = 0;
   
       candado.addEventListener("click", () => {
   
           toques++;
   
           /* Primer toque */
           if (toques === 1) {
   
               candado.style.transform = "scale(1.12)";
   
               setTimeout(() => {
                   candado.style.transform = "";
               }, 250);
   
           }
   
   
           /* Segundo toque */
           else if (toques === 2) {
   
               candado.style.transform = "scale(0.94)";
   
               setTimeout(() => {
                   candado.style.transform = "";
               }, 250);
   
           }
   
   
           /* Tercer toque */
           else if (toques === 3) {
   
               candado.style.opacity = "0";
               candado.style.pointerEvents = "none";
   
               setTimeout(() => {
   
                   candado.style.display = "none";
   
                   zonaPassword.classList.add("visible");
   
                   const primerInput =
                       document.querySelector(
                           ".cuadritos-password input"
                       );
   
                   if (primerInput) {
                       primerInput.focus();
                   }
   
               }, 700);
           }
   
       });
   }
   
   
   /* =========================
      CONTRASEÑA
      ========================= */
   
   const inputsPassword =
       document.querySelectorAll(
           ".cuadritos-password input"
       );
   
   const botonComprobar =
       document.getElementById("botonComprobar");
   
   const mensajeError =
       document.getElementById("mensajeError");
   
   const passwordContainer =
       document.querySelector(".password-container");
   
   
   if (
       inputsPassword.length &&
       botonComprobar
   ) {
   
       const combinacionCorrecta =
           "011026090912";
   
   
       /* =========================
          SOLO NÚMEROS
          ========================= */
   
       inputsPassword.forEach((input, indice) => {
   
           input.addEventListener("input", () => {
   
               input.value =
                   input.value.replace(/[^0-9]/g, "");
   
               if (
                   input.value &&
                   indice < inputsPassword.length - 1
               ) {
   
                   inputsPassword[
                       indice + 1
                   ].focus();
   
               }
   
           });
   
   
           /* Permitir regresar con Backspace */
           input.addEventListener("keydown", (evento) => {
   
               if (
                   evento.key === "Backspace" &&
                   !input.value &&
                   indice > 0
               ) {
   
                   inputsPassword[
                       indice - 1
                   ].focus();
   
               }
   
           });
   
       });
   
   
       /* =========================
          COMPROBAR
          ========================= */
   
       botonComprobar.addEventListener(
           "click",
           comprobarPassword
       );
   
   
       function comprobarPassword() {
   
           let numeroEscrito = "";
   
           inputsPassword.forEach((input) => {
               numeroEscrito += input.value;
           });
   
   
           /* =========================
   CONTRASEÑA CORRECTA
   ========================= */

if (
    numeroEscrito ===
    combinacionCorrecta
) {

    mensajeError.textContent =
        "ACCESO CONCEDIDO";

    mensajeError.classList.add(
        "visible"
    );

    mensajeError.style.color =
        "#ff69b4";

    inputsPassword.forEach((input) => {
        input.disabled = true;
    });

    botonComprobar.disabled = true;


    /* Esperamos un momento para
       mostrar el acceso concedido */

    setTimeout(() => {

        window.location.href =
            "Pagina 4.html";

    }, 2200);

    return;
}
   
   
           /* INCORRECTA */
   
           const mensajes = [
            "no mi vida 💗",
            "esa no es, amor",
            "mmm... intenta otra vez mi vida",
            "todavía no se abre ❤️",
            "piénsalo un poquito más, mi amor",
            "esa tampoco es, pero te quiero igual 💕",
            "casi... intenta de nuevo",
            "sé que puedes encontrarla, mi vida",
            "el corazón sigue cerrado 💗",
            "intenta otra vez, amor",
            "esa no era la combinación ❤️",
            "vas bien, mi vida",
            "todavía falta un poquito 💕",
            "piénsalo con calma, mi amor",
            "el candado todavía no quiere abrirse 🥺",
            "otra oportunidad, mi vida ❤️",
            "sé que tú puedes",
            "aún no es esa, amorcito 💗",
            "sigue intentando, mi vida",
            "todavía guardo el secreto 🔒❤️",
            "esa no abre mi corazón todavía",
            "intenta una vez más, amor",
            "no era esa, pero me encanta que sigas intentando 💕",
            "confío en que vas a encontrarla ❤️",
            "el corazón tiene su contraseña, mi vida",
            "todavía no te dejo pasar 🥺❤️",
            "una más, mi amor",
            "sé que la vas a descubrir 💗",
            "el candado dice que todavía no ❤️",
            "piénsalo, mi vida... tú sabes cuál es 💕"
        ];
   
   
           const mensajeAleatorio =
               mensajes[
                   Math.floor(
                       Math.random() *
                       mensajes.length
                   )
               ];
   
   
           mensajeError.textContent =
               mensajeAleatorio;
   
           mensajeError.classList.add(
               "visible"
           );
   
   
           /* Sacudir cuadritos */
   
           passwordContainer.classList.remove(
               "password-error"
           );
   
           void passwordContainer.offsetWidth;
   
           passwordContainer.classList.add(
               "password-error"
           );
   
   
           /* Limpiar contraseña */
   
           inputsPassword.forEach((input) => {
               input.value = "";
           });
   
   
           inputsPassword[0].focus();
   
       }
   
   }