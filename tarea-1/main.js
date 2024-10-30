let div1 = document.getElementById('container1');
let div2 = document.getElementById('container2');
let div3 = document.getElementById('container3');
let boton = document.getElementById('boton')


boton.addEventListener('click',texto1)
boton.addEventListener('click',texto2)
boton.addEventListener('click',texto3)

function texto1() {
    div1.innerHTML = 'Este es mi primera funcion'
    div1.style.margin = '50px'
    div1.style.background = 'gray'
    div1.style.padding = '10px'
    
}

function texto2() {
    div2.innerHTML = 'Este es mi Segunda funcion '
    div2.style.margin = '50px'
    div2.style.background = 'blue'
    div2.style.padding = '10px'
    
}

function texto3() {
    div3.innerHTML = 'Este es mi tercera funcion '
    div3.style.margin = '50px'
    div3.style.background = 'red'
    div3.style.padding = '10px'
    
}