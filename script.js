

//cantidad de vidas
let vidas = 6;
// Contenedor de la palabra y palabras para el juego
const contenedor = document.querySelector('.contenedor__letras');
const palabras = ['gato', 'juego', 'plato', 'camino', 'jirafa', 'cooperar'];

// Botton para probar palabra
let probar = document.querySelector("#probar");
probar.addEventListener("click", procesar);

// Obtener palabra random de la lista
let palabra = palabras[Math.floor((Math.random() * palabras.length))];

//cantidad de caracteres en palabra

let cant_carac=palabra.length;
console.log(cant_carac)

//cantidad de aciertos
// let aciertos = 0
// console.log(aciertos)

// Recuardros de las letras
let Posiciones = document.getElementsByClassName('letra');



// Validar si la letra existe en la palabra y colocarla en la posicion
function procesar(){
    let campoLetra = document.querySelector("#text");
    let letra = campoLetra.value.toLowerCase();

    //Buscar el indice donde se encuentra la letra
    let indices = [];
    let indice = palabra.indexOf(letra);
    while(indice != -1){
        indices.push(indice);
        indice = palabra.indexOf(letra, indice + 1);

    }

    // Coloca la palabra en el lugar que corresponde
    
    // contador de fallos
    for(let i in indices){
        console.log(indices[i]);
        Posiciones[indices[i]].innerText = letra;
        
    }
    if (indices.lenght==0){
        vidas--;
        console.log(vidas)
    }
    // if (indices.lenght!=0){
    //     aciertos++
    //     console.log("aciertos igual a "+aciertos)
    // }
    // Borra el formulario
    campoLetra.value = null;
    //vidas
    
    if(vidas==0){
        let anuncio=document.querySelector("#gameover");
        anuncio.textContent="GAME OVER"
    }

    // if(palabra.includes(letra)==false){
    //     vidas--
    // }
    
}



// Dibuja las lineas en pantalla
console.log(palabra);
for(let p in palabra){
    contenedor.innerHTML += `<div class="contenedor__letras-o letra"><h1 value='${p}'></h1></div>`;
}


