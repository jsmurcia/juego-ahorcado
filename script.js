const contenedor = document.querySelector('.contenedor__letras');
const palabras = ['gato', 'juego', 'plato', 'camino', 'jirafa'];

// Obtener palabra random de la lista
let palabra = palabras[Math.floor((Math.random() * palabras.length))];

// Palabra dividida
let arrPalabra = new String(palabra);

// Botton para probar palabra
let probar = document.querySelector("#probar");
probar.addEventListener("click", procesar);

// Validar si la letra existe en la palabra
function procesar(){
    let letra = document.querySelector("#text").value;
    for(let a in arrPalabra){
        if(letra == arrPalabra[a]){
            console.log('Bien');
        }
    }
}



console.log(palabra);
// Dibuja las lineas en pantalla
for(let p in palabra){
    contenedor.innerHTML += `<div class="contenedor__letras-o"><h1></h1></div>`;
}




// alert("este es  tu juego")
// const palabra =["j","u","e","g","o"]




// function procesando(){
//     let letra = document.querySelector("#text").value;
//     for(const i in palabra){
//         if(letra == palabra[i]){
//             alert("la letra si se encuentra dentro de la palabra en la posicion")
//             break
//         }
//         else if ( letra !== palabra[i]){
//             alert("la letra no se encuentra dentro de la palabra")
//             break
//         }
//     }
//     console.log(letra)
// }

// alert("este es  tu juego")
// document.querySelector("#probar").addEventListener("click", ()=>{
//     alert("vamos bien")
// })


// function procesando(){
//     let letra=document.querySelector("#text").value;
//     switch (letra){
//         case letra=="j":
//             document.querySelector( "#contenedor__letras-j-h").innerHTML="j"
            
//     }

// }