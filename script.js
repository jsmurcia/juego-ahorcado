

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
    
    // contador de fallos
    for(let i in indices){
        console.log(indices[i]);
<<<<<<< HEAD
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
=======
        posiciones[indices[i]].innerText = letra;
    }

>>>>>>> 021a8418f036c36cfdd2f2635c84d701d1e663bd
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
    contenedor.innerHTML += `<div class="contenedor__letras-o letra"></div>`;
}


<<<<<<< HEAD
=======

// ABCEDARIO
const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const contenedorAbc = document.getElementById('abc');

for(let abcedario in abc){
    contenedorAbc.innerHTML += `<input type="button" value="${abc[abcedario]}" onclick="procesar('${abc[abcedario]}')">`;
}
>>>>>>> 021a8418f036c36cfdd2f2635c84d701d1e663bd
