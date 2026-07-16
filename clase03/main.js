//Repaso de clase 2
//condicionales if, else if, else

    /*
console.log("hola mundo!")
const edad = 25;

if(edad < 18){
    console.log("No puedes ingresar");
}else{
    console.log("Bienvenido a mi sitio!")
}


//nota = parseInt(prompt("Ingrese su nota: "));

//console.log("Su nota es: " + nota)
nota =0;
if(nota>=0 && nota<4){
    console.log("Desaprobado")
}else if(nota>=4 && nota<7){
    console.log("Aprobado")
}else if(nota>=7 && nota<10){
    console.log("Promocionado")
}else{
    console.log("Nota invalida, ingrese un numero entre 0 y 10")
}


//bucles while, do while, for

console.log("Lista del supermercado")

let lista = ["yerba", "cafe", "harina", "azucar", "leche"]

for(let i=0; i<lista.length; i++){
    console.log(lista[i])
}


console.log("Cuenta regresiva")

contador = 10;
while(contador>0){
    console.log(contador)
    contador--;
}

console.log("despegue!")


//Funciones!

//Como se define

function saludar(){
    console.log("Hola mundo!!!!")
}

//Como se invoca
saludar();
saludar();
saludar();
saludar();

//Ejemplito

function sumarBasico(){
    console.log(2+5)
}

sumarBasico();

//Parametro, son las variables que definimos dentro de la funcion, y que se utilizan dentro de la misma
//nombre es un parametro, que se utiliza dentro de la funcion
function saludarPersona(nombre){ 
    console.log("Hola " + nombre + ", bienvenido a mi sitio web!")
}

//Argumento, es el valor que le pasamos a la funcion cuando la invocamos
//Arturo y esteban son argumentos, que se pasan a la funcion cuando la invocamos

saludarPersona("Arturo")
saludarPersona("Esteban")

function sumaDeNumeros(num1, num2){
    console.log("El total es " + (num1 + num2))
}

sumaDeNumeros(5,3)


//Funcion con retorno, es decir que devuelve un valor, que puede ser utilizado en otra parte del codigo

function duplicar(numero){
    return numero * 2; //Enviando el resultado hacia afuera de la funcion, para que pueda ser utilizado en otra parte del codigo
}

let resultadoDuplicar = duplicar(100);
document.write("El resultado de duplicar 100 es: " + resultadoDuplicar)

//Funcion sin retorno especifica, es decir que no devuelve un valor, pero si realiza una accion dentro de la funcion

function mostrarMensaje(mensaje){
    document.write("<p>" + mensaje + "</p>")
//NO HAY RETURN
}

const resultadoSinReturn = mostrarMensaje("Hola, este es un mensaje desde la funcion sin retorno especifica")
console.log(resultadoSinReturn) //undefined, porque la funcion no tiene return

//Funcion flecha, una nueva forma de definir funciones en JavaScript, mas corta y concisa

const sumarFlecha = (a, b) =>  a+b; //return implicito, no hace falta escribir return, ni llaves

console.log("El resultado de la suma usando funcion flecha es: " + sumarFlecha(25, 10))



function dividir(numero1, numero2){
    if(numero2 === 0){  
        return "No se puede dividir por cero"
    }   
    return numero1 / numero2
}

console.log("El resultado de la division es: " + dividir(10, 0))



//Indice de masa corporal 
function calcularIMC(peso, altura){
    let imc = peso / (altura * altura);
    if(imc < 18.5){     
        return "Tu indice de masa corporal es " + imc + ", esto indica que tienes bajo peso";
    }
    if(imc >= 18.5 && imc < 25){
        return "Tu indice de masa corporal es " + imc + ", esto indica que tienes un peso normal";
    }
    if(imc > 25){
        return "Tu indice de masa corporal es " + imc + ", esto indica que tienes sobrepeso";
    }
    return imc;
}


console.log(calcularIMC(85,1.82))

function pedirIMC(){
    let peso = parseFloat(prompt("Ingrese su peso en kg: "));
    let altura = parseFloat(prompt("Ingrese su altura en metros: "));
    let resultado = calcularIMC(peso, altura);
    alert(resultado);
}

pedirIMC();




//Scope es el alcance de las variables, es decir, donde se pueden utilizar las variables dentro del codigo

let variableGlobal = "Soy una variable global, puedo ser utilizada en cualquier parte del codigo"

console.log(variableGlobal)

function mostrarVariableGlobal(){
    console.log(variableGlobal)
}

mostrarVariableGlobal()

variableGlobal = "me modificaron y ahora tengo otro valor"

console.log(variableGlobal)

//Scope local, esto solo funciona, dentro de la funcion, no se puede acceder desde afuera de la funcion


//console.log(variableLocal1)

function variableLocal(){
    let variableLocal1 ="Hola soy una variable local a ver como funciono"
    console.log(variableLocal1)
}


variableLocal()//esto funciona, porque estamos invocando la funcion, que devuelve el valor de la variable local

console.log(variableLocal1) //esto no funciona, porque la variable local solo existe dentro de la funcion, y no se puede acceder desde afuera de la funcion


*/



//Indice de masa corporal 
function calcularIMC(peso, altura){
    let imc = peso / (altura * altura);
    if(imc < 18.5){     
        return "Tu indice de masa corporal es " + imc + ", esto indica que tienes bajo peso";
    }
    if(imc >= 18.5 && imc < 25){
        return "Tu indice de masa corporal es " + imc + ", esto indica que tienes un peso normal";
    }
    if(imc > 25){
        return "Tu indice de masa corporal es " + imc + ", esto indica que tienes sobrepeso";
    }
    return imc;
}


//console.log(calcularIMC(85,1.82))

function pedirIMC(){
    let peso = parseFloat(prompt("Ingrese su peso en kg: "));
    let altura = parseFloat(prompt("Ingrese su altura en metros: "));
    let resultado = calcularIMC(peso, altura);
    alert(resultado);
}

//pedirIMC();

//funcion flecha para calcular el peso ideal 

const calcularPesoIdeal = (altura) => {
    let pesoIdeal = 22.5 * (altura * altura);
    return "Tu peso ideal es: " + pesoIdeal + " kg";
}

console.log(calcularPesoIdeal(1.82))

