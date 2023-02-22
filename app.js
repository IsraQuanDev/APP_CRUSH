


const parrafoInicial = document.getElementById("#parrafoinicial")


console.log(parrafoInicial)

parrafoInicial.onclick = function(){
    cambiaColorAleatorio();
}


function cambiaColorAleatorio(){
    const colores = [
        "red",
        "blue",
        "black",
        "cyan"
    ];
    parrafoInicial.style.color = color[Math.floor(Math.random()*colores.length)];    
}