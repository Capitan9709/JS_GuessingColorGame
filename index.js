// Funcion para generar numeros aleatorios (depende del parametro)
function generarNumero(numero){
    return (Math.random()*numero).toFixed(0);
}

// Funcion para generar el codigo rgb
function colorRGB(){
    
        var color = "("+generarNumero(255)+"," + generarNumero(255) + "," + generarNumero(255) +")";
        return "rgb" + color;
    
}

// Funcion para seleccionar un color de un div como objetivo
function seleccionarDivObjetivo(){
    let divs = document.getElementsByClassName("color");
    seleccion = divs[generarNumero(6)].style.backgroundColor;
    return seleccion;
}

window.onload = () => {

    let boton = document.querySelector("a");
    let divs = document.getElementsByClassName("color");

    function cambiarColores(){
        for(let i = 0; i < divs.length; i++){
            let color = colorRGB();
            divs[i].style.backgroundColor = color;
        }
    }
    cambiarColores();
    document.getElementById("RGB").innerHTML = seleccionarDivObjetivo();
    document.getElementById("resultado").innerHTML = "Aquí se mostrará tu resultado";

    boton.addEventListener("click",()=>{
        cambiarColores();
        document.getElementById("RGB").innerHTML = seleccionarDivObjetivo();
        document.getElementById("resultado").innerHTML = "Aquí se mostrará tu resultado";
    })

    
    for (let i = 0; i < divs.length; i++) {
        divs[i].addEventListener("click", () => {
            if (divs[i].style.backgroundColor == seleccionarDivObjetivo()) {
                document.getElementById("resultado").innerHTML = "¡Has acertado!";
            } 
            else {
                document.getElementById("resultado").innerHTML = "¡Sigue intentando!";
            }
        });
    }
    
}