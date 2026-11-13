const app = document.querySelector("#app");

// ==========================================
// 5. BATALLA
// ==========================================

// Cada opción indica qué escena se abre al hacer clic
const escenasBatalla = {
  inicio: {
    titulo: "Batalla Pokémon",
    texto: "Vas a dirigir a Pikachu en un duelo de entrenamiento contra Squirtle. Gana quien consiga sacar a su rival del círculo de arena.",
    opciones: [{ texto: "Comenzar batalla", destino: "turnoUno" }]
  },
  turnoUno: {
    titulo: "Turno 1",
    texto: "Squirtle apunta un chorro de agua hacia Pikachu. A la derecha hay una roca y a la izquierda queda un paso libre. ¿Qué orden le das?",
    opciones: [
      { texto: "Cubrirse detrás de la roca", destino: "roca" },
      { texto: "Correr por la izquierda", destino: "carrera" }
    ]
  },
  roca: {
    titulo: "Turno 2 · A cubierto",
    texto: "El chorro golpea la roca. Pikachu sigue seco. Squirtle se acerca para ver dónde está y deja su costado descubierto.",
    opciones: [
      { texto: "Salir por el costado con Ataque Rápido", destino: "victoriaRoca" },
      { texto: "Seguir esperando detrás de la roca", destino: "derrotaRoca" }
    ]
  },
  carrera: {
    titulo: "Turno 2 · Al borde del círculo",
    texto: "Pikachu esquiva el agua por la izquierda, pero queda a un paso del límite. Squirtle baja la cabeza y carga en línea recta.",
    opciones: [
      { texto: "Frenar la carga de frente", destino: "derrotaBorde" },
      { texto: "Saltar a un lado en el último momento", destino: "victoriaBorde" }
    ]
  },
  victoriaRoca: {
    titulo: "¡Victoria!",
    texto: "Pikachu sale disparado de su escondite. Squirtle recibe el golpe de costado y rueda fuera del círculo."
  },
  derrotaRoca: {
    titulo: "Derrota",
    texto: "Squirtle tiene tiempo de rodear la roca. Su siguiente chorro sorprende a Pikachu por detrás y lo empuja fuera del círculo."
  },
  derrotaBorde: {
    titulo: "Derrota",
    texto: "Pikachu aguanta el choque, pero resbala sobre la arena mojada. Una pata cruza la línea y Squirtle gana el duelo."
  },
  victoriaBorde: {
    titulo: "¡Victoria!",
    texto: "Pikachu se aparta justo a tiempo. Squirtle intenta frenar, pero su propio impulso lo lleva fuera del círculo."
  }
};

function mostrarEscenaBatalla(destino) {
  const escena = escenasBatalla[destino];
  app.innerHTML = `
    <section class="batalla-section">
      <h1 tabindex="-1">${escena.titulo}</h1>
      <div class="batalla-rivales">
        <figure><img src="./assets/img/pikachu.png" alt=""><figcaption>Pikachu</figcaption></figure>
        <span aria-hidden="true">vs.</span>
        <figure><img src="./assets/img/squirtle.png" alt=""><figcaption>Squirtle</figcaption></figure>
      </div>
      <p>${escena.texto}</p>
      <div class="batalla-acciones"></div>
    </section>`;
  const acciones = document.querySelector(".batalla-acciones");

  // Los finales ofrecen volver a empezar desde el primer turno
  let opciones = escena.opciones;
  if (!opciones) {
    opciones = [{ texto: "Volver a jugar", destino: "turnoUno" }];
  }
  for (let opcion of opciones) {
    const boton = document.createElement("button");
    boton.type = "button";
    boton.textContent = opcion.texto;
    boton.addEventListener("click", function () {
      mostrarEscenaBatalla(opcion.destino);
    });
    acciones.append(boton);
  }
  document.querySelector(".batalla-section h1").focus();
}

const botonBatalla = document.querySelector("#link-juego");
botonBatalla.addEventListener("click", function (event) {
  event.preventDefault();
  mostrarEscenaBatalla("inicio");
});