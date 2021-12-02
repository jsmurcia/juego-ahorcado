// Contenedor de la palabra y palabras para el juego
const contenedor = document.querySelector('.contenedor__letras');
const palabras = ['gato', 'juego', 'plato', 'camino', 'jirafa', 'cooperar'];

// Botton para probar palabra
let probar = document.querySelector("#probar");
probar.addEventListener("click", procesar);

// Obtener palabra random de la lista
let palabra = palabras[Math.floor((Math.random() * palabras.length))];

// Recuardros de las letras
let posiciones = document.getElementsByClassName('letra');
console.log(posiciones);

// Validar si la letra existe en la palabra y colocarla en la posicion
function procesar(letter){
    let campoLetra = document.querySelector("#text");
    // let letra = campoLetra.value.toLowerCase();
    let letra = letter;

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
        posiciones[indices[i]].innerText = letra;
    }

    // Borra el formulario
    campoLetra.value = null;
}

// Dibuja las lineas en pantalla
console.log(palabra);
for(let p in palabra){
    contenedor.innerHTML += `<div class="contenedor__letras-o letra"></div>`;
}



// ABCEDARIO
const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const contenedorAbc = document.getElementById('abc');

for(let abcedario in abc){
    contenedorAbc.innerHTML += `<input type="button" value="${abc[abcedario]}" onclick="procesar('${abc[abcedario]}')">`;
}