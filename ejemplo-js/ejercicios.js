let nombre = "Maria";

let productos = [
    "Laptop: $1200",
    "Mouse: $20"
];

let total = 1220;


let listaProductos = productos
    .map(product => `<li>${product}</li>`)
    .join("");


let factura = `
    <h2>Factura</h2>
    <p><strong>Cliente:</strong> ${nombre}</p>

    <h3>Productos</h3>
    <ul>
        ${listaProductos}
    </ul>

    <p><strong>Total:</strong> $${total}</p>
`;


console.log(`
===== FACTURA =====
Cliente: ${nombre}

Productos:
${productos.join("\n")}

Total: $${total}
`);


document.getElementById("factura").innerHTML = factura;