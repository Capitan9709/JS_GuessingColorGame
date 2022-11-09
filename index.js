// Funcion para generar numeros aleatorios (depende del parametro)
function generarNumero(numero){
    return (Math.random()*numero).toFixed(0);
}

// Funcion para generar el codigo rgb
function colorRGB(){
        var color = "("+generarNumero(255)+", " + generarNumero(255) + ", " + generarNumero(255) +")";
        return "rgb" + color;
    
}

window.onload = () => {
    let colores = [];
    console.log(colores);
    
    let boton = document.querySelector("a");
    let divs = document.getElementsByClassName("color");

    function cambiarColores(){
        for(let i = 0; i < divs.length; i++){
            let color = colorRGB();
            divs[i].style.backgroundColor = color;
            colores.push(color);
        }
    }
    cambiarColores();

// Elegir un color objetivo
    let seleccion = colores[generarNumero(5)];

    document.getElementById("RGB").innerHTML = seleccion;
    document.getElementById("resultado").innerHTML = "Aquí se mostrará tu resultado";

    boton.addEventListener("click",()=>{
        let indice = 0;
        colores.splice(indice,6);
        cambiarColores();
        let seleccion = colores[generarNumero(5)];
        // seleccion aqui no funciona -------------------
        document.getElementById("RGB").innerHTML = seleccion;
        document.getElementById("resultado").innerHTML = "Aquí se mostrará tu resultado";
    })
    for (let i = 0; i < divs.length; i++) {
        divs[i].addEventListener("click", (e) => {
            if (e.target.style.backgroundColor == seleccion) {
                document.getElementById("resultado").innerHTML = "¡Has acertado!";
            } 
            else {
                document.getElementById("resultado").innerHTML = "¡Sigue intentando!";
            }
        });
    }
    
}