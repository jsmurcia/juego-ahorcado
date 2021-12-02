const contenedor = document.querySelector('.contenedor__letras');
const palabras = ['gato', 'juego', 'plato', 'camino', 'jirafa'];
const palabra = palabras[Math.ceil((Math.random() * palabras.length))];

console.log(palabra);
for(let p in palabra){
    contenedor.innerHTML += `<div class="contenedor__letras-o"><h1></h1></div>`;
}



// alert("este es  tu juego")
// const palabra =["j","u","e","g","o"]

// let probar=document.querySelector("#probar")
// probar.addEventListener("click", procesando);


function procesando(){
    let letra = document.querySelector("#text").value;
    for(const i in palabra){
        if(letra == palabra[i]){
            alert("la letra si se encuentra dentro de la palabra en la posicion")
            break
        }
        else if ( letra !== palabra[i]){
            alert("la letra no se encuentra dentro de la palabra")
            break
        }
    }
    console.log(letra)
}

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