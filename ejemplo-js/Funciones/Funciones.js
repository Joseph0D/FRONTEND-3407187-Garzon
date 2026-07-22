function saludar (nombre) {//Parametro
    console.log("Hola "+ nombre)
}
saludar("Sergio")//Argumento



//Funcion con metodo

const persona ={
    nombre:"Joseph",
    saludar(){
        return "Hola " + this.nombre
    }
}
console.log(persona.saludar())


//Funcion flecha

//Forma corta
const multiplicar = (a,b) =>{
    return a * b
}

console.log(multiplicar(9,3))

//Funcion tipo expresion

//La funcion se guarda en una variable 
const restar = function (a,b) {
    return a-b
}
console.log(restar (50,10))


//LLamado de funcion antes de definir

//Se puede llamar antes de definirse (Hoisting)

console.log(sumar(3,5))
function sumar (a , b){
    return a + b
}

//Funcion Constructora

//Funcion que permite crear una especie de clase con sus atributos y luego instanciar
function Persona(nombre, edad){

    this.nombre = nombre 
    this.edad = edad
}
const usuario = new Persona ("Juan", 30)
console.log(usuario.nombre, usuario.edad)

//Funcion anonima

setTimeout(function() {
    console.log ("Ejecutado despues de 2 segundos");
}, 2000);

