

let marca = "audi",
    velocidad = 200,
    stock = 45,
    modelos = ["r8", "a3", "a7"];




let frase = `Tenemos coches de la marca ${marca},
 van a una velocidad máxima de ${velocidad}km/h.
 Dispones de estos modelos en stock: <br/>`


modelos.forEach(modelo => {

    frase += `- ${modelo} <br/>`;

});

let caja = document.querySelector("#caja");
caja.innerHTML = frase;


/*
let marca = "Mercedes";
let velocidad = 90;
let stock = 45;
let modelos = ["AMG", "CLS", "BHH", "PEPINO"];

leerArray(modelos);

function leerArray(modelos) {
    // Concatenar los modelos en una sola cadena, separados por comas
    let cadenaConcatenada = modelos.join(', ');

    // Imprimir la información concatenada
    console.log(`Marca: ${marca}`);
    console.log(`Velocidad: ${velocidad} km/h`);
    console.log(`Stock: ${stock}`);
    console.log(`Modelos disponibles: ${cadenaConcatenada}`);
}

*/
