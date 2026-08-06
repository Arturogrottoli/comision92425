//Repaso de objetos

console.log("Repaso objetos!")

//Objetos, constructores y clases

//Definicion literal

const pelicula1 = {
    titulo: "Volver al futuro",
    director: "Robert Zemekis",
    duracionMinutos: 105,
    vista: false,
    marcarVista : function(){
        this.vista = true;
        console.log(`Marcaste "${this.titulo}" como vista`);
    },
}

pelicula1.marcarVista();

console.log(pelicula1)

//Funcion constructora

function Pelicula(titulo, director, duracionMinutos){
    this.titulo = titulo;
    this.director = director;
    this.duracionMinutos = duracionMinutos;
    this.vista = false;
}

Pelicula.prototype.marcarVista = function(){
    this.vista = true;
     console.log(`Marcaste "${this.titulo}" como vista`);
}

const pelicula2 = new Pelicula("Pulp Fiction", "Quentin Tarantino", 1994);


pelicula2.marcarVista();
console.log(pelicula2);

//Creacion de Clase (class)

class PeliculaClase{
    constructor(titulo, director, duracionMinutos,genero){
    this.titulo = titulo;
    this.director = director;
    this.duracionMinutos = duracionMinutos;
    this.vista = false;
    this.genero = genero;
}

    marcarVista(){
        this.vista = true;
        console.log(`Marcaste "${this.titulo}" como vista`);
    }

    mostrarInfo(){
        const estado = this.vista ? "Vista" : "Pendiente";
        console.log(`${this.titulo}, ${this.duracionMinutos} min, ${this.genero} - ${estado}`)
    }
}


const miListaPelis =[
    new PeliculaClase("Rapido y furioso 20", "Steven Spielberg", 100,"Accion"),
    new PeliculaClase("La Odisea", "Nolan", 185, "Drama"),
    new PeliculaClase("Esperando la carroza", "Alejandro Doria", 90, "Comedia"),
    new PeliculaClase("El padrino", "Francis Ford Coppola", 180, "Drama")
]

console.log(miListaPelis)

miListaPelis[0].marcarVista();

console.log("Mi lista para ver:");
for (const pelicula of miListaPelis){
    pelicula.mostrarInfo();
}


//Funciones de orden superior

//Ejemplo cortito de abstraccion

function sumar(a,b){
    return a+b;
}

console.log("La suma es: " + sumar(5,12));


//Funcion de funciones


function crearMultiplicador(factor){
  //Esta la es funcion interna
  return (numero) => numero*factor;
}

const duplicar = crearMultiplicador(2);
const triplicar = crearMultiplicador(3);

console.log("Doble y triple")
console.log(duplicar(10));
console.log(triplicar(10))

//Aplicar directamente a nuestro ejemplos

function crearBuscadorPorGenero(genero){
    return(pelicula) => pelicula.genero === genero;
}

const esDrama = crearBuscadorPorGenero("Drama");
const esComedia = crearBuscadorPorGenero("Comedia");
const esAccion = crearBuscadorPorGenero("Accion");

console.log(esDrama({titulo: "Titanic", genero:"Drama"}))

//Callbacks, funcion que recibe otra funcion cmo parametro
//Ese parametro es el callback

function procesarNumero(numero, accion){
    return accion(numero)
}

//Funciones como parametros
const porDos = (n) => n*2;
const porTres = (n) => n*3;
const alCruadrado = (n) => n*n;

console.log(procesarNumero(10, porDos))
console.log(procesarNumero(10, porTres))
console.log(procesarNumero(10, alCruadrado))

function saludar(nombre,formato){
    return formato(nombre);
}

const formatoFormal = (nombre) => `Hola estimado ${nombre}, ¿Como esta?`;
const formatoInformal = (nombre) => `Que haces ${nombre}, ¿Todo bien?`;

console.log(saludar("Juan Cruz", formatoFormal));
console.log(saludar("Esteban", formatoInformal))

//Foreach recorre array de punta a punta

console.log("Catalogo con foreach:")
miListaPelis.forEach((pelicula) => console.log(pelicula))


const precios = [101, 1005, 5000, 8000 ];

precios.forEach((precio)=>{
    console.log(`Precio regular ${precio}, precio con iva ${precio*1.21}`)
})


//find, buscar uno solo


const primerDrama = miListaPelis.find(
    (pelicula) => pelicula.genero === "Drama"
);

console.log(primerDrama)

const primerPar = precios.find((numero) => numero%2 === 0);
console.log(primerPar)

//filter, filtra la cantidad que cumpla con lo solicitado

const pelisLargas = miListaPelis.filter(
    (pelicula) => pelicula.duracionMinutos > 100
);
console.log(pelisLargas)


const preciosBaratos = precios.filter((precio) => precio < 2000);
console.log(preciosBaratos)


//Some, si hay uno que cumple nos devuelve true

const hayDrama = miListaPelis.some(
    (pelicula) => pelicula.genero === "Drama"
);

console.log(hayDrama)

const hayTerror = miListaPelis.some(
    (pelicula) => pelicula.genero === "Terror"
);

console.log(hayTerror)

//map()

const titulosPelis = miListaPelis.map(
    (pelicula) => pelicula.titulo
)

document.write(titulosPelis)

const duracionEnHoras = miListaPelis.map(
    (pelicula) => (pelicula.duracionMinutos /60)
);
document.write(duracionEnHoras)


//reduce 

const duracionLista = miListaPelis.reduce(
   (acumulador,pelicula) => acumulador + pelicula.duracionMinutos, 0
);
console.log(`Mi lista dura ${duracionLista} minutos`)


//Pre-entrega

//Paso 1 Crear estructura

console.log("Catalogo listo", miListaPelis)

//Paso 2 y 3
//  un buscador

//Buscar con 1 find, algo puntual (Titulo)

//Filtrar, filtrar por estado (Visto o no visto) con filter

//Reduce, calcular los minutos que me quedan de contenido sin ver (Combinando filter, y reduce)


//promto para buscar a mano titulo




