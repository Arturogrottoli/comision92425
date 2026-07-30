//arrays repaso clase 04
/*
const colores = ["rojo", "verde", "azul", "amarillo", "naranja"];
console.log(colores)


console.log(colores[3]) // amarillo
console.log(colores[-1])//undefined

colores[1] = "Blanco"
console.log(colores)

console.log("Recorrer con un for")
for( let i=0; i<colores.length;i++){
    console.log(`${i} ${colores[i]}`)
}

console.log("recorrer con un forof")

for(const color of colores){
    console.log(color)
}*/

//Objetos
//Sus variables son propiedades
//Sus funciones son metodos

const perro ={
    nombre: "Isabel",
    edad: 2,
    raza: "mestiza",
    genero: "hembra",

    ladrar: function(){
        console.log("guau, guau")
    },
    correr: function(a,b){
        console.log(`${this.nombre} corre por el patio, ${a+b}`)
    } 
}

console.log(perro)
console.log(perro.nombre)

perro.ladrar()
perro.correr(1,3)


const auto = {marca: "gol"}
auto.marca = "trend"
auto.color = "rojo"
auto.modelo = 2020

console.log(auto)

delete auto.modelo;
console.log(auto.modelo)



function Auto(marca,modelo){
    this.marca = marca;
    this.modelo = modelo;
}

const miAuto = new Auto("gol", "trend")
console.log(miAuto)


function Persona(nombre,edad,genero){
    this.nombre = nombre,
    this.edad = edad,
    this.genero = genero
}

const persona1 = new Persona("Arturo", 40, "Masculino")
const persona2 = new Persona("Esteban", 20, "Masculino")

console.log(persona1)
console.log(persona2.nombre)

const datosPersonas = [
    {nombre: "Misael", edad:25, genero:"Masculino"},
    {nombre: "Juana", edad:22, genero:"Femenino"},
    {nombre: "David", edad:45, genero:"Masculino"},
]

const arrayPersonas = [];
for (const dato of datosPersonas){
    arrayPersonas.push(new Persona(dato.nombre, dato.edad, dato.genero))
}

console.log(arrayPersonas)

//estructura de clases mediante javascript

class Usuario{
    constructor(nombre, email, edad){
        this.nombre = nombre;
        this.email = email;
        this.edad = edad;
    }

    saludar(){
    console.log("Hola, soy el usuario " + this.nombre + ", mi correo es " + this.email + " y tengo " + this.edad + " años")
}
}


const usuario1 = new Usuario("Arturo", "arturo@gmail.com", 40);
const usuario2 = new Usuario("Lionel", "liomessi@gmail.com", 39);

usuario1.saludar()
usuario2.saludar()



//ejemplo completo

class Producto{
    constructor(id, nombre, precio, categoria,stock ){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.stock = stock;
    }

    vender(cantidad){
        if(cantdad > this.stock){
            console.log(`No hay suficiente stock de "${this.nombre}" para vender ${cantidad}`);
            return;
        }
        this.stock -= cantidad;
        console.log(`Se vendieron ${cantidad} unidades de "${this.nombre}". Stock actual: ${this.stock}`)
    }
}

const producto1 = new Producto(1,"Remera futbol", 50000, "deportes", 100);
const producto2 = new Producto(2,"Pantalon futbol", 10000, "deportes", 100);
const producto3 = new Producto(3,"Botines futbol", 150000, "deportes", 100);