let container = document.getElementById('container')
let boton = document.getElementById('mostrar');

boton.addEventListener('click',mostrarApiData,true)

async function mostrarApiData() {

    const url = 'https://randomuser.me/api';
    const res = await fetch(url);
    const data = await res.json();
    
    container.innerHTML =`
                          <img src='${data.results[0].picture.large}'>
                            <p> celular: ${data.results[0].cell}</p>
                            <p> email: ${data.results[0].email}</p>
                            <p> genero: ${data.results[0].gender}</p>                
                            <p> Nombre: ${data.results[0].name.first}</p>
                            <p> apellido: ${data.results[0].name.last}</p>
    
    `;


}