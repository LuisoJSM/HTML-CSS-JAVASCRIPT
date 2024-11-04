

let nombre ="Luis";
let apellidos ="Soriano";
let edad = 29;
let pais = "España";
let conocimientos = ["html","css","javascript","react"];

console.log(
    `Hola soy ${nombre} ${apellidos} tengo ${edad} años, vivo en ${pais}
    y tengo los siguientes conocimientos: ${conocimientos[0]} , ${conocimientos[1]} , ${conocimientos[2]} y ${conocimientos[3]}.`
);

edad = 67;

conocimientos.push("php");


console.log(
    `Hola soy ${nombre} ${apellidos} tengo ${edad} años, vivo en ${pais}
    y tengo los siguientes conocimientos: ${conocimientos[0]} , ${conocimientos[1]} , ${conocimientos[2]} , ${conocimientos[3]} y ${conocimientos[4]}.`
);