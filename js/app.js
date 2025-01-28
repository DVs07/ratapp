const btnAgregar = document.getElementById('btn-agregar');
const formulario = document.getElementById('formulario-deudor');

const alerta = document.createElement('div');

const nombre = document.getElementById('nombre-deudor');
const apellido = document.getElementById('apellido-deudor');
const fecha = document.getElementById('fecha');
const cantidad = document.getElementById('cantidad');
const pagado = document.getElementById('pagado');

eventListeners();

function eventListeners(){

    btnAgregar.addEventListener('click', agregarDeudor);
}
function agregarDeudor(e){
    e.preventDefault();
    console.log('Agregando deudor');
    limpiarHtml(alerta);
    validarDeudor();
}

function validarDeudor(){

    if( nombre.value === '' || apellido.value === '' || fecha.value === '' || cantidad.value === '' || pagado.value === '' ){
        mostrarAlerta('Todos los campos son obligatorios', 'error');
        return;
    } else {
        mostrarAlerta('Agregado correctamente', 'correcto');
    }

}

function mostrarAlerta(mensaje, tipo){
    
    
    alerta.classList.add('text-center', 'alert', 'alert-danger', 'mt-4');
    alerta.textContent = mensaje;

    
    if(tipo === 'correcto'){
        alerta.classList.remove('alert-danger');
        alerta.classList.add('alert-success');
    }
    formulario.appendChild(alerta);
    setTimeout(() => {
        alerta.remove();
    }, 3000);
}

function limpiarHtml(elemento){
    while(elemento.firstChild){
        elemento.removeChild(elemento.firstChild);
    }
}