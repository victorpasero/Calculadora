let calculo = document.querySelector('.calculo');
let resultado = document.querySelector('.resultado');
let botones = document.querySelectorAll('button');
let borrar = document.querySelector('.funcion-DEL');
let limpiar = document.querySelector('.funcion-AC');
let igual = document.querySelector('.igual');

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        calculo.innerHTML += boton.value
    })
})
