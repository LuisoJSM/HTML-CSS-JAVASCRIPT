let sueldo = parseInt(prompt("¿Cuánto cobras?",0));


let resultado = document.getElementById("resultado");


switch (true) {
    case sueldo <= 500:
        
        resultado.innerHTML = "Trabajas a media Jornada";

    break;

    case sueldo <= 1000 && sueldo > 500:
        
        resultado.innerHTML = "Tienes el salario minimo";

    break;

    case 1700:
        
        resultado.innerHTML = "Tienes buen sueldo";

    break;

    case 2500:
        
        resultado.innerHTML = "Trabajas a media Jornada";

    break;


    default :

        resultado.innerHTML = "Eres un estudiante";


    break;

}