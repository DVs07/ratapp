const btnAgregar = document.getElementById('btn-agregar');

btnAgregar.addEventListener('click', agregarDeudor);

function agregarDeudor(e){
    e.preventDefault();
    console.log('Agregando deudor');
}