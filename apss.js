// ============================================
// CINCO MINUTOS CONTIGO 🌷
// JavaScript completo
// ============================================


// ============================================
// 1. BOTÓN DE ENTRADA
// ============================================

const boton = document.getElementById("btnComenzar");

if (boton) {

    boton.addEventListener("click", () => {

        const entrada = document.querySelector(".entrada");

        entrada.classList.add("salir");

        setTimeout(() => {
            mostrarDescanso();
        }, 1200);

    });

}


// ============================================
// 2. ESCENA: DEJAR ATRÁS LA SEMANA ☁️
// ============================================

function mostrarDescanso() {

    document.body.innerHTML = `

        <main class="descanso">

            <div class="estrellas-descanso">
                <span>✦</span>
                <span>·</span>
                <span>✧</span>
                <span>·</span>
                <span>✦</span>
            </div>

            <div class="luna-descanso"></div>

            <div class="nubes">

                <div
                    class="nube nube1"
                    role="button"
                    tabindex="0"
                    aria-label="Soltar primera preocupación"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div
                    class="nube nube2"
                    role="button"
                    tabindex="0"
                    aria-label="Soltar segunda preocupación"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div
                    class="nube nube3"
                    role="button"
                    tabindex="0"
                    aria-label="Soltar tercera preocupación"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

            </div>

            <section class="mensaje-descanso">

                <p class="pequeno">
                    Antes de seguir...
                </p>

                <h2>
                    Deje aquí un poquito
                    <span>del cansancio de esta semana.</span>
                </h2>

                <p class="instruccion">
                    Toque una nube para dejarla ir
                </p>

                <div class="contador">
                    <span id="nubesRestantes">3</span>
                    pequeñas cosas por soltar
                </div>

            </section>

        </main>

    `;

    activarNubes();

}


// ============================================
// 3. ACTIVAR LAS NUBES ☁️
// ============================================

function activarNubes() {

    const nubes = document.querySelectorAll(".nube");
    const contador = document.getElementById("nubesRestantes");

    let restantes = nubes.length;


    nubes.forEach((nube) => {

        function soltarNube(evento) {

            if (evento) {
                evento.preventDefault();
                evento.stopPropagation();
            }

            // Evitar tocar la misma nube dos veces
            if (nube.classList.contains("soltada")) {
                return;
            }

            nube.classList.add("soltada");

            mostrarFrase(nube);

            restantes--;

            contador.textContent = restantes;


            // Cuando ya no quedan nubes
            if (restantes === 0) {

                terminarDescanso();

            }

        }


        // =====================================
        // TOQUE EN CELULAR Y MOUSE
        // =====================================

        nube.addEventListener(
            "pointerup",
            soltarNube
        );


        // =====================================
        // COMPATIBILIDAD CON ALGUNOS NAVEGADORES
        // =====================================

        nube.addEventListener(
            "click",
            (evento) => {

                // Si el navegador ya disparó pointerup,
                // no hacemos nada aquí.

                if (
                    nube.classList.contains("soltada")
                ) {
                    return;
                }

                soltarNube(evento);

            }
        );


        // =====================================
        // TECLADO
        // =====================================

        nube.addEventListener(
            "keydown",
            (evento) => {

                if (
                    evento.key === "Enter" ||
                    evento.key === " "
                ) {

                    soltarNube(evento);

                }

            }
        );

    });

}


// ============================================
// 4. FRASES DE CADA NUBE
// ============================================

function mostrarFrase(nube) {

    const frases = {

        nube1:
        "No tiene que tener todo resuelto para estar haciendo las cosas bien. 🤍",

        nube2:
        "Todo el esfuerzo que está haciendo hoy también está construyendo la persona que quiere llegar a ser. 🌷",

        nube3:
        "No olvide que usted es capaz incluso en esos días en los que usted misma lo duda. ✨"

    };


    const nombre = [...nube.classList].find(clase => {
        return frases[clase];
    });


    const frase = document.createElement("div");

    frase.className = "frase-nube";

    frase.innerHTML = `
        <p>${frases[nombre]}</p>
    `;


    const descanso = document.querySelector(".descanso");

    if (!descanso) {
        return;
    }


    descanso.appendChild(frase);


    // Aparecer
    setTimeout(() => {

        frase.classList.add("mostrar");

    }, 100);


    // Desaparecer
    setTimeout(() => {

        frase.classList.remove("mostrar");

        setTimeout(() => {

            if (frase.parentNode) {
                frase.remove();
            }

        }, 600);

    }, 3500);

}


// ============================================
// 5. FINAL DE LAS NUBES
// ============================================

function terminarDescanso() {

    setTimeout(() => {

        const mensaje =
            document.querySelector(".mensaje-descanso");


        if (!mensaje) {
            return;
        }


        mensaje.innerHTML = `

            <p class="pequeno">
                Eso puede esperar un ratito.
            </p>

            <h2>
                Ahora este momento
                <span>es para usted.</span>
            </h2>

            <p class="final-descanso">
                🌷
            </p>

            <button
                id="continuar"
                class="boton-continuar"
            >
                Seguir
            </button>

        `;


        document
            .querySelectorAll(".nube")
            .forEach(nube => {

                nube.style.opacity = "0";
                nube.style.pointerEvents = "none";

            });


        document
            .getElementById("continuar")
            .addEventListener("click", () => {

                mostrarRespiracion();

            });

    }, 900);

}


// ============================================
// 6. ESCENA DE RESPIRACIÓN 🌙
// ============================================

function mostrarRespiracion() {

    document.body.innerHTML = `

        <main class="respiracion">

            <div class="estrellas-respiracion">

                <span>✦</span>
                <span>✧</span>
                <span>·</span>
                <span>✦</span>
                <span>·</span>
                <span>✧</span>
                <span>✦</span>

            </div>

            <div class="luna-respiracion"></div>

            <section class="contenido-respiracion">

                <p class="respiracion-pequeno">
                    Ahora...
                </p>

                <h2 id="tituloRespiracion">
                    No piense en lo que sigue
                </h2>

                <div
                    class="circulo-respiracion"
                    id="circuloRespiracion"
                >

                    <div class="luz-respiracion"></div>

                </div>

                <p
                    id="instruccionRespiracion"
                    class="instruccion-respiracion"
                >
                    Prepárese...
                </p>

                <div class="progreso-respiracion">

                    <span class="punto activo"></span>
                    <span class="punto"></span>
                    <span class="punto"></span>

                </div>

            </section>

        </main>

    `;

    iniciarRespiracion();

}


// ============================================
// 7. EJERCICIO DE RESPIRACIÓN
// ============================================

function iniciarRespiracion() {

    const circulo =
        document.getElementById("circuloRespiracion");

    const instruccion =
        document.getElementById("instruccionRespiracion");

    const titulo =
        document.getElementById("tituloRespiracion");

    const puntos =
        document.querySelectorAll(".punto");


    let ciclo = 0;


    setTimeout(() => {
        respirar();
    }, 1800);


    function respirar() {

        if (ciclo >= 3) {

            terminarRespiracion();

            return;

        }


        puntos.forEach((punto, index) => {

            punto.classList.toggle(
                "activo",
                index === ciclo
            );

        });


        titulo.textContent =
            "Respire conmigo un momento";


        // INHALAR

        instruccion.textContent =
            "Inhale...";

        circulo.classList.remove("pequeno");

        circulo.classList.add("grande");


        // EXHALAR

        setTimeout(() => {

            instruccion.textContent =
                "Exhale...";

            circulo.classList.remove("grande");

            circulo.classList.add("pequeno");

        }, 3500);


        // SIGUIENTE RESPIRACIÓN

        setTimeout(() => {

            ciclo++;

            respirar();

        }, 7000);

    }

}


// ============================================
// 8. FINAL DE LA RESPIRACIÓN
// ============================================

function terminarRespiracion() {

    const contenido =
        document.querySelector(".contenido-respiracion");


    contenido.innerHTML = `

        <p class="respiracion-pequeno">
            Eso es...
        </p>

        <h2>
            Por unos segundos
            <span>no tuvo que resolver nada.</span>
        </h2>

        <div class="estrella-final-respiracion">
            ✦
        </div>

        <p class="mensaje-final-respiracion">
            A veces también necesitamos
            darnos permiso para descansar🤍
        </p>

        <button
            id="continuarJardin"
            class="boton-continuar"
        >
            🌷 Continuar
        </button>

    `;


    document
        .querySelector(".estrella-final-respiracion")
        .classList.add("aparecer-estrella");


    document
        .getElementById("continuarJardin")
        .addEventListener("click", () => {

            mostrarJardin();

        });

}


// ============================================
// 9. ESCENA: JARDÍN DE TULIPANES 🌷
// ============================================

function mostrarJardin() {

    document.body.innerHTML = `

        <main class="jardin">

            <div class="estrellas-jardin">

                <span>✦</span>
                <span>·</span>
                <span>✧</span>
                <span>✦</span>
                <span>·</span>
                <span>✧</span>
                <span>✦</span>
                <span>·</span>

            </div>

            <div class="luna-jardin"></div>


            <section class="contenido-jardin">

                <p class="jardin-pequeno">
                    Hay cosas que quizá necesite
                    recordar de vez en cuando...
                </p>

                <h2>
                    Toque una <span>flor.</span>
                </h2>

                <p class="jardin-instruccion">
                    Hay cinco pequeños recordatorios
                    esperándola aquí 🌷
                </p>


                <div class="flores">

                    <button
                        class="tulipan"
                        data-flor="1"
                    >
                        🌷
                    </button>

                    <button
                        class="tulipan"
                        data-flor="2"
                    >
                        🌷
                    </button>

                    <button
                        class="tulipan"
                        data-flor="3"
                    >
                        🌷
                    </button>

                    <button
                        class="tulipan"
                        data-flor="4"
                    >
                        🌷
                    </button>

                    <button
                        class="tulipan"
                        data-flor="5"
                    >
                        🌷
                    </button>

                </div>


                <div class="contador-flores">

                    <span id="floresAbiertas">
                        0
                    </span>

                    de 5 flores descubiertas

                </div>


                <div
                    id="finalJardin"
                    class="final-jardin"
                ></div>

            </section>

        </main>

    `;


    activarTulipanes();

}


// ============================================
// 10. ACTIVAR TULIPANES
// ============================================

function activarTulipanes() {

    const tulipanes =
        document.querySelectorAll(".tulipan");

    const contador =
        document.getElementById("floresAbiertas");

    let abiertas = 0;


    const mensajes = {

        1:
        "Usted es capaz de mucho más de lo que a veces cree✨",

        2:
        "No tiene que estar bien y fuerte todo el tiempo. También puede descansar🤍",

        3:
        "Aunque usted no siempre lo note, todo lo que hace y todo lo que intenta también cuenta🌷",

        4:
        "No deje que un día difícil le haga olvidar todo lo que ha logrado.✦",

        5:
        "Y si algún día se le olvida cuánto vale... déjeme recordárselo❤️"

    };


    tulipanes.forEach((tulipan) => {

        tulipan.addEventListener("click", () => {

            if (
                tulipan.classList.contains(
                    "descubierto"
                )
            ) {

                return;

            }


            tulipan.classList.add(
                "descubierto"
            );


            const numero =
                tulipan.dataset.flor;


            mostrarMensajeFlor(
                mensajes[numero]
            );


            abiertas++;

            contador.textContent =
                abiertas;


            if (abiertas === 5) {

                setTimeout(() => {

                    terminarJardin();

                }, 2200);

            }

        });

    });

}


// ============================================
// 11. MENSAJE DE CADA TULIPÁN
// ============================================

function mostrarMensajeFlor(mensaje) {

    const tarjeta =
        document.createElement("div");


    tarjeta.className =
        "mensaje-flor";


    tarjeta.innerHTML = `

        <div class="flor-mensaje-icono">
            🌷
        </div>

        <p>
            ${mensaje}
        </p>

    `;


    document
        .querySelector(".jardin")
        .appendChild(tarjeta);


    setTimeout(() => {

        tarjeta.classList.add(
            "mostrar"
        );

    }, 50);


    setTimeout(() => {

        tarjeta.classList.remove(
            "mostrar"
        );


        setTimeout(() => {

            if (tarjeta.parentNode) {
                tarjeta.remove();
            }

        }, 600);

    }, 3500);

}


// ============================================
// 12. FINAL DEL JARDÍN
// ============================================

function terminarJardin() {

    const final =
        document.getElementById("finalJardin");


    document
        .querySelectorAll(".tulipan")
        .forEach((tulipan, index) => {

            setTimeout(() => {

                tulipan.classList.add(
                    "brillar"
                );

            }, index * 250);

        });


    setTimeout(() => {

        final.innerHTML = `

            <div class="constelacion-tulipan">

                <span>✦</span>
                <span>·</span>
                <span>✦</span>
                <span>·</span>
                <span>✦</span>

            </div>

            <p>
                Cinco pequeños recordatorios
                para una persona que merece
                muchos más.
            </p>

            <div class="flor-final">
                🌷
            </div>

            <button
                id="verAtardecer"
                class="boton-continuar"
            >
                🌅 Ver el atardecer
            </button>

        `;


        final.classList.add(
            "mostrar"
        );


        document
            .getElementById("verAtardecer")
            .addEventListener("click", () => {

                mostrarAtardecer();

            });

    }, 1800);

}


// ============================================
// 13. ESCENA: MIRAR EL CIELO 🌅
// ============================================

function mostrarAtardecer() {

    document.body.innerHTML = `

        <main class="atardecer">

            <div class="estrellas-atardecer">

                <span>✦</span>
                <span>·</span>
                <span>✧</span>
                <span>·</span>
                <span>✦</span>
                <span>·</span>
                <span>✧</span>
                <span>✦</span>

            </div>


            <div class="sol-atardecer"></div>

            <div class="luna-atardecer"></div>


            <section class="contenido-atardecer">

                <p
                    id="momentoAtardecer"
                    class="atardecer-pequeno"
                >
                    Ahora sí...
                </p>


                <h2 id="tituloAtardecer">

                    Quédese un ratito
                    <span>y mire el cielo.</span>

                </h2>


                <p
                    id="fraseAtardecer"
                    class="frase-atardecer"
                >
                    No todo tiene que resolverse hoy.
                </p>


                <div
                    id="puntosAtardecer"
                    class="puntos-atardecer"
                >

                    <span class="punto-cielo activo"></span>
                    <span class="punto-cielo"></span>
                    <span class="punto-cielo"></span>
                    <span class="punto-cielo"></span>

                </div>


                <button
                    id="continuarCarta"
                    class="boton-continuar boton-carta"
                >
                    💌 Hay algo que quiero decirle
                </button>

            </section>


            <div class="paisaje">

                <div class="colina"></div>

            </div>

        </main>

    `;


    iniciarAtardecer();

}


// ============================================
// 14. ANIMACIÓN DEL ATARDECER
// ============================================

function iniciarAtardecer() {

    const frases = [

        "No todo tiene que resolverse hoy.",

        "Puede estar cansada y seguir siendo fuerte.",

        "Puede descansar sin sentirse culpable.",

        "Hoy ya hizo suficiente. 🤍"

    ];


    const frase =
        document.getElementById(
            "fraseAtardecer"
        );


    const puntos =
        document.querySelectorAll(
            ".punto-cielo"
        );


    const boton =
        document.getElementById(
            "continuarCarta"
        );


    let indice = 0;


    boton.style.opacity = "0";

    boton.style.pointerEvents =
        "none";


    function cambiarFrase() {

        if (
            indice >= frases.length
        ) {

            terminarAtardecer();

            return;

        }


        frase.classList.remove(
            "mostrar-frase"
        );


        setTimeout(() => {

            frase.textContent =
                frases[indice];

            frase.classList.add(
                "mostrar-frase"
            );


            puntos.forEach(
                (punto, i) => {

                    punto.classList.toggle(
                        "activo",
                        i === indice
                    );

                }
            );


        }, 500);


        indice++;

    }


    setTimeout(() => {

        frase.classList.add(
            "mostrar-frase"
        );

    }, 800);


    setTimeout(() => {

        cambiarFrase();

    }, 3500);


    setTimeout(() => {

        cambiarFrase();

    }, 7000);


    setTimeout(() => {

        cambiarFrase();

    }, 10500);


    setTimeout(() => {

        terminarAtardecer();

    }, 14000);


    boton.addEventListener(
        "click",
        () => {

            mostrarCarta();

        }
    );

}


// ============================================
// 15. FINAL DEL ATARDECER
// ============================================

function terminarAtardecer() {

    const frase =
        document.getElementById(
            "fraseAtardecer"
        );


    const puntos =
        document.getElementById(
            "puntosAtardecer"
        );


    const boton =
        document.getElementById(
            "continuarCarta"
        );


    frase.textContent =
        "Gracias por quedarse estos minutos. 🤍";


    frase.classList.add(
        "mostrar-frase"
    );


    puntos.style.opacity =
        "0";


    setTimeout(() => {

        boton.style.opacity =
            "1";

        boton.style.pointerEvents =
            "auto";

    }, 1800);

}


// ============================================
// 16. ESCENA FINAL: LA CARTA 💌
// ============================================

function mostrarCarta() {

    document.body.innerHTML = `

        <main class="carta-final">

            <div class="estrellas-carta">

                <span>✦</span>
                <span>·</span>
                <span>✧</span>
                <span>✦</span>
                <span>·</span>
                <span>✧</span>
                <span>✦</span>
                <span>·</span>

            </div>


            <div class="luna-carta"></div>


            <section
                id="introduccionCarta"
                class="introduccion-carta"
            >

                <p>
                    Para usted, Sofia
                </p>

                <h2>
                    Hay algo que quería
                    <span>
                        decirle desde hace un tiempo...
                    </span>
                </h2>


                <button
                    id="sobre"
                    class="sobre"
                    aria-label="Abrir carta"
                >

                    <div class="sobre-base"></div>

                    <div class="sobre-tapa"></div>

                    <div class="sobre-corazon">
                        ♥
                    </div>

                </button>


                <p class="texto-sobre">
                    Toque el sobre
                </p>

            </section>


            <section
                id="contenidoCarta"
                class="contenido-carta"
            >

                <div class="papel-carta">

                    <p class="saludo-carta">
                        Sofia...
                    </p>


                    <p>
                        Quería dejarle estas palabras
                        aquí porque hay cosas que a veces
                        me cuesta decir en persona y como no
                        nos hemos visto.
                    </p>


                    <p>
                        Espero que después de una semana
                        tan cansada pueda recordar algo
                        muy sencillo: usted no tiene que
                        poder con todo todo el tiempo
                    </p>


                    <p>
                        Usted es una persona muy capaz
                        incluso en esos días en los que
                        quizá no consiga verlo por usted
                        misma
                    </p>


                    <p>
                        Me alegra muchísimo haberla
                        conocido y poder compartir tantos
                        momentos con usted
                    </p>


                    <p>
                        Y aunque este pequeño universo
                        solamente dure unos minutos
                        quería que tuviera un lugar al que
                        pudiera venir cuando necesitara
                        respirar un poquito
                    </p>


                    <p>
                        Gracias por ser usted
                        por escuchar
                        por estar
                        y por todos esos pequeños
                        momentos que quizá para usted
                        parecen normales pero que para mí
                        significan muchísimo
                    </p>


                    <p class="despedida-carta">
                        Cuídese mucho, Sofia. 🌷
                    </p>


                    <p class="firma-carta">
                        — Alba ❤️
                    </p>

                </div>


                <div class="final-carta">

                    <p>
                        Gracias por regalarme
                        estos cinco minutos.
                    </p>

                    <p>
                        Espero que cuando vuelva a tener
                        una semana difícil recuerde que
                        también merece detenerse
                        un poquito.
                    </p>

                    <span>
                        🌙
                    </span>

                    <p class="ultimo-mensaje">
                        Puede volver cuando quiera.
                    </p>

                </div>

            </section>

        </main>

    `;


    activarSobre();

}


// ============================================
// 17. ABRIR EL SOBRE 💌
// ============================================

function activarSobre() {

    const sobre =
        document.getElementById("sobre");


    const introduccion =
        document.getElementById(
            "introduccionCarta"
        );


    const carta =
        document.getElementById(
            "contenidoCarta"
        );


    sobre.addEventListener(
        "click",
        () => {

            if (
                sobre.classList.contains(
                    "abierto"
                )
            ) {

                return;

            }


            sobre.classList.add(
                "abierto"
            );


            setTimeout(() => {

                introduccion.classList.add(
                    "ocultar-carta"
                );

            }, 1200);


            setTimeout(() => {

                carta.classList.add(
                    "mostrar-carta"
                );

            }, 1700);

        }
    );

}
