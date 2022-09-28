const calculo = document.querySelector('.calculo');
const resultado = document.querySelector('.resultado');
const botones = document.querySelectorAll('button');
const borrar = document.querySelector('.funcion-DEL');
const limpiar = document.querySelector('.funcion-AC');
const igual = document.querySelector('.igual');
let valorEnTiempoReal = [];

limpiar.addEventListener("click", () => {
    valorEnTiempoReal = [''];
    resultado.innerHTML = 0;
    calculo.className = 'calculo';
    resultado.className = 'resultado';
})

botones.forEach((boton) => {
    boton.addEventListener("click", () => {
        if (!boton.id.match('borrar')) {
            valorEnTiempoReal.push(boton.value)
            calculo.innerHTML = valorEnTiempoReal.join('');           
        }
        if (boton.id.match('borrar')) {
            valorEnTiempoReal.pop();
            calculo.innerHTML = valorEnTiempoReal.join('');
        }
        if (boton.id.match('igual')) {
            calculo.className = 'resultado';
            resultado.className = 'calculo';
            resultado.innerHTML = eval(valorEnTiempoReal.join(''));
        }    
    })
})