//Asincronismo, promesas y async

/*console.log("1-Entramos al catalogo");
setTimeout(() => console.log("2-Recomendacion cargada con delay"), 4000)
console.log("3-Todo listo para elegir peliculas")

//Promesas

const promesaRepaso = new Promise((resolve) => {
    setTimeout(() => resolve("catalogo cargado correctamente"),3000);});

promesaRepaso.then((mensaje) => console.log(mensaje))

//Async await

async function cargarPeliculaRepaso(titulo){
    try{
        console.log(`Cargando ${titulo}`);
        const resultado = await promesaRepaso;
        console.log(resultado);
    }catch(error){
        console.log("Algo salio mal", error);
    }finally{
        console.log("Intento de carga finalizado")
    }
}

cargarPeliculaRepaso("La odisea");

*/


//pedir un pokemon a la poke api
//Hacemos un fetch con .then, recibimos el objeto response

fetch("https://pokeapi.co/api/v2/pokemon/7")
    .then((response) => response.json())
    .then((data) => {
    console.log(`Nuestro pokemon se llama ${data.name} y pesa ${data.weight/10} kg`);
});


//flujo mas profesional con un fetch + async await


async function obtenerPersonajes(id) {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)

    // Verificamos si la respuesta fue exitosa
    if (!response.ok) {
      throw new Error(`Error en la petición: ${response.status}`)
    }

    const personaje = await response.json()
    console.log(`Personaje recibidos: ${personaje.name} de la especie ${personaje.species}`)
  } catch (error) {
    console.error("Hubo un problema:", error.message)
  }
}
obtenerPersonajes(5)


//mostrar con botones

const contenedorCartasPokemon = document.getElementById("cartas-pokemon");
const botonMostrarPokemons = document.getElementById("btn-mostrar-pokemon")

const contenedorCartasPersonajes = document.getElementById("cartas-personajes");
const botonMostrarPersonajes = document.getElementById("btn-mostrar-personajes");


const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


async function mostrarCartasPokemon() {
    try{
        contenedorCartasPokemon.innerHTML ="Cargando los pokemones..."

        
        await esperar(2000);

        const ids = [33,34,5,6, 10, 50, 44];

        const respuestas = await Promise.all(
            ids.map((id) => fetch(`https://pokeapi.co/api/v2/pokemon/${id}`))
        );

        const pokemones = await Promise.all(respuestas.map((response) => response.json()));

        contenedorCartasPokemon.innerHTML ="";

        pokemones.forEach((pokemon) =>{
            const { name,sprites,types} = pokemon;
            const tiposTexto =types.map((t) => t.type.name).join(", ");

            const carta = document.createElement("div");
            carta.innerHTML = `
            <img src="${sprites.front_default}" alt=${name}" width="70">
            <h2>Nombre: ${name}</h2>
            <p>Tipo: ${tiposTexto}</h2>
            `;

            contenedorCartasPokemon.appendChild(carta);
       
            
        });

    }catch(error){
        contenedorCartasPokemon.innerHTML = `Error en la carga de datos ${error.message}`;
    }
    
}

botonMostrarPokemons.addEventListener("click", mostrarCartasPokemon);


async function mostrarCartasPersonajes() {
  try {
    contenedorCartasPersonajes.innerHTML = "Cargando personajes...";

   
    await esperar(2000);

    const response = await fetch("https://rickandmortyapi.com/api/character?page=1");

    if (!response.ok) {
      throw new Error(`No se pudo conectar a la API (status ${response.status})`);
    }

    const data = await response.json();

  const primerosDiez = [...data.results]
      .sort(() => Math.random() - 0.5) // elije de forma random
      .slice(0, 10);


    contenedorCartasPersonajes.innerHTML = "";

    primerosDiez.forEach((personaje) => {
      const { name, image, species, status } = personaje;

      const carta = document.createElement("div");
      carta.className = "carta";
      carta.innerHTML = `
        <img src="${image}" alt="${name}" width="80">
        <h3>${name}</h3>
        <p>${species} · ${status}</p>
      `;
      contenedorCartasPersonajes.appendChild(carta);
    });
  } catch (error) {
    contenedorCartasPersonajes.innerHTML = `⚠️ No se pudieron cargar los personajes: ${error.message}`;
  }
}
botonMostrarPersonajes.addEventListener("click", mostrarCartasPersonajes);



//Librerias, vamos con sweet alert
//Srive para mostrar pop ups reemplazando los alerts

function mostrarSwal(){
 Swal.fire({
  title: 'Ahora se digno a andar',
  text: 'antes no andaba',
  icon: 'info',
  confirmButtonText: 'ok'
})
}

document.getElementById("btn-demo-swal").addEventListener("click", mostrarSwal)


function mostrarToast(){
  Toastify({

text: "Pokemon agregado a favorito",

duration: 3000

}).showToast();
}

document.getElementById("btn-demo-toast").addEventListener("click", mostrarToast)




    