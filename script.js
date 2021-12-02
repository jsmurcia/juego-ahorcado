// Contenedor de la palabra y palabras para el juego
const contenedor = document.querySelector('.contenedor__letras');
const palabras = ['gato', 'juego', 'plato', 'camino', 'jirafa', 'cooperar'];

// Botton para probar palabra
let probar = document.querySelector("#probar");
probar.addEventListener("click", procesar);

// Obtener palabra random de la lista
let palabra = palabras[Math.floor((Math.random() * palabras.length))];

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
    for(let i in indices){
        console.log(indices[i]);
        Posiciones[indices[i]].innerText = letra;
    }
    // Borra el formulario
    campoLetra.value = null;
}

// Dibuja las lineas en pantalla
console.log(palabra);
for(let p in palabra){
    contenedor.innerHTML += `<div class="contenedor__letras-o letra"><h1 value='${p}'></h1></div>`;
}
