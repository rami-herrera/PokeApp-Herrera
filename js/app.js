import { pokemones } from "./db/pokemones.js";

// let pokemonEncontrar = "Charmander";

const botonPokedex = document.querySelector("#link-pokedex");
const botonLogin = document.querySelector("#link-login");
const botonRegistro = document.querySelector("#link-registro");
const botonBatalla = document.querySelector("#link-juego");
botonPokedex.addEventListener("click", mostrarPokedex);
botonLogin.addEventListener("click", mostrarLogin);
botonRegistro.addEventListener("click", mostrarRegistro);
botonBatalla.addEventListener("click", mostrarJuego);


const app = document.querySelector("#app");

function mostrarPokedex(event) {
  event.preventDefault();
  app.innerHTML = `
    <h1>Pokédex</h1>
    <p>Acá se mostrará la lista de Pokémon.</p>
  `;
}

function mostrarLogin(event) {
  event.preventDefault();
  app.innerHTML = `
    <h1>Iniciar sesión</h1>
    <p>Acá se mostrará el formulario para iniciar sesión.</p>
  `;
}

function mostrarRegistro(event) {
  event.preventDefault();
  app.innerHTML = `
    <h1>Registrarse</h1>
    <p>Acá se mostrará el formulario para crear una cuenta.</p>
  `;
}

function mostrarJuego(event) {
  event.preventDefault();
  app.innerHTML = `
    <h1>Batalla</h1>
    <p>Acá podrás participar de una batalla Pokémon.</p>
  `;
}

/* function mostrarPokemones() {
  console.log("hola");
  console.log(33);
}

mostrarPokemon();

let app = document.querySelector("#app");

app.innerHTML = '<div id="pokedex-section"></div>';

let pokedexSection = document.querySelector("#pokedex-section");


for (let pokemon of pokemones) {
  console.log(pokemon.nombre);
  console.log(pokemon.imagen);

pokedexSection.innerHTML += `<article class="pokemon-card">
                              <h2>${pokemon.nombre}</h2>
                              <img src="${pokemon.imagen}" alt="${pokemon.nombre}" />
                              </article>`;
} */ 