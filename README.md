# PokeApp

Pokédex web desarrollada para el Trabajo Práctico 9 de Funcionamiento de Sistemas Digitales. Permite consultar Pokémon, registrar usuarios y jugar una batalla por turnos en la que las decisiones cambian el resultado. Desarrollada por: Ramiro Herrera - Curso: 4to Informática.

## Cómo abrir el proyecto

1. Cloná el repositorio o descargá y descomprimí el ZIP.
2. Abrí en Visual Studio Code la carpeta que contiene `index.html`.
3. Con la extensión **Live Server** instalada, hacé clic derecho sobre `index.html` y elegí **Open with Live Server**.

## Funciones

- **Pokédex.** Cada tarjeta muestra el número, nombre, imagen, tipo y rareza del Pokémon. El botón **Ver detalles** abre su ficha con descripción, estadísticas, evolución, sonido y variante shiny cuando corresponde.
- **Usuarios.** Podés crear una cuenta, iniciar sesión, ver tu perfil y cerrar sesión. La aplicación recuerda la cuenta activa al recargar la página.
- **Administración.** Desde el perfil administrador podés cargar un Pokémon. El formulario comprueba los campos y evita números repetidos. Al guardar, la Pokédex muestra la nueva tarjeta.
- **Batalla.** Dirigís a Pikachu en un duelo contra Squirtle. Cada decisión abre una escena del guion hasta llegar a una victoria o derrota.

## Cuenta de prueba

Para probar la carga de Pokémon, iniciá sesión con la cuenta administradora de Juan.

- Usuario: `1234`
- Contraseña: `password123`

## Cómo se guardan los datos

La primera vez que abrís PokeApp, se copian los Pokémon y usuarios iniciales al `localStorage` del navegador. Al registrar una cuenta o cargar un Pokémon, la aplicación guarda la lista actualizada con `JSON.stringify()`. Para volver a usarla, la recupera con `JSON.parse()`.

Los datos agregados desde la web quedan en el navegador donde se cargaron, para esa dirección del sitio. Si compartís el repositorio o el ZIP, la otra persona recibe los datos iniciales del proyecto. Para probar la persistencia, cargá un Pokémon y recargá la página en esa misma dirección.

## Archivos principales

| Archivo o carpeta | Función |
| --- | --- |
| `index.html` | Estructura principal de la página. |
| `styles.css` | Diseño de las pantallas y adaptación a distintos tamaños. |
| `app.js` | Navegación, tarjetas, detalle, registro, login, perfiles y formulario de carga. |
| `game.js` | Escenas, decisiones y resultados de la batalla. |
| `persistencia.js` | Lectura y guardado de Pokémon, usuarios y sesión activa. |
| `db/pokemones.js` y `db/usuarios.js` | Datos iniciales de Pokémon y cuentas. |
| `assets/` | Imágenes, avatares y sonidos. |

## Tecnologías

HTML, CSS y JavaScript con módulos. La interfaz utiliza el DOM y eventos de clic y envío de formularios.
