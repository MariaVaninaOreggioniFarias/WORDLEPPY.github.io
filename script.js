console.log('holamundo');
let intentos = 6;
let diccionario =  ["APPLE", "MOUSE", "SWOOD", "MAPLE", "TREES"];
//let palabra = "APPLE";
//let palabra = Math.random (diccionario)
let palabra = diccionario[Math.floor(Math.random() * diccionario.length)];

const API = 'https://random-word-api.herokuapp.com/word?length=5&lang=en'
fetch(API)
    .then(response => response.json ())
    .then (response => {
        console.log(response)
        palabra = response[0].toUpperCase()
    })
    .catch(err => console.error(err));
window.addEventListener('load', init)
function init(){
    console.log('Esto se ejecuta solo cuando se carga la pagina web')
}

const button = document.getElementById('guess-button');
button.addEventListener('click',intentar);
const input = document.getElementById("guess-input");
const valor = input.value;

function intentar (){
    console.log(palabra);
    const INTENTO = leerIntento ();
    const GRID = document.getElementById("grid");
    const ROW = document.createElement("div");
    ROW.className = "row";

    if(INTENTO.length != 5){
        alert('Debe ingresar una palabra de 5 letras')
        return
    }
    if(INTENTO === palabra){
        terminar('<h1> GANASTE!</h1>')
        //console.log("GANASTE")
        return
    }
    for (let i in palabra) {
        const SPAN = document.createElement("span");
        SPAN.className = "letter";
        if (INTENTO[i]===palabra[i]){
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = "#79b851";
            //console.log(INTENTO[i], "VERDE")
        } else if (palabra.includes(INTENTO[i]) ) {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor="#f3c237";
            //console.log(INTENTO[i], "AMARILLO")
        } else {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor="#a4aec4";
            //console.log(INTENTO[i], "GRIS")
        }
        ROW.appendChild(SPAN)
    }
    GRID.appendChild(ROW);
         intentos--
    if (intentos==0){
        terminar("<h1>PERDISTE</h1>")
}


function leerIntento(){
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase(); 
    return intento;
}

function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    button.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}}

Math.floor(Math.random() * 10) + 1;