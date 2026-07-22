let nombre = "Carlos";
let saludo = `Hola ${nombre}`;

console.log(saludo);

let producto = "Laptop";
let precio = 1200;

let mensaje = `El producto ${producto} cuesta $${precio}`
console.log(mensaje);

let a = 5;
let b = 10;

console.log(`La suma es ${a + b}`);


function obtenerIva(juanchito) {
    return juanchito *0.19;
}

let juanchito = 100;

console.log(`El IVA es ${obtenerIva(juanchito)}`);



let texto = `
Linea 1
Linea 2
Linea 3
`;

console.log(texto);

let usuario = {
    nombre: "Jose",
    edad: 25,
    pais: "Colombia"
};

let html = `
<div class="usuario">
    <h2>${usuario.nombre} </h2>
    <p>Edad: ${usuario.edad}</p>
    <p>País: ${usuario.pais}</p>
</div>
`;

let mostrador = ["Laptop", "Mouse", "Teclado"];

let lista = `
<ul>
    ${mostrador.map(p => `<li>${p}</li>`).join("")}
</ul>
`;

console.log(lista);

let persona ={
    nombre: "Luis",
    edad: 30,
    profesion: "Desarrollador"
};

let descripcion = `
Nombre: ${persona.nombre}
Edad: ${persona.edad}
Profesión: ${persona.profesion}
`;

console.log(descripcion);

let user = "admin";
let horita = new Date();

console.log(`El usuario ${user} inició sesión el ${horita}`);


let edad = 17;

let mensage = `El usuario es ${edad >= 18 ? "mayor" : "menor"} de edad`;

console.log(mensage);

let numeros = [1,2,3,4];

let resultado = `
Numeros:
${numeros.map(n => `Numero: ${n}`).join("\n")}
`;

console.log(resultado);


function etiqueta(strings, valor) {
    return `${strings[0]}${valor.toUpperCase()}${strings[1]}`;
}

let siuu = "juan";

let result = etiqueta `Hola ${siuu}!`;

console.log(result)


