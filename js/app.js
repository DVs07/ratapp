const deudor = 
    {
        nombre: '',
        apodo: '',
        fecha: '',
        cantidad: '',
        pagado: ''
    }
;
const deudores = []

const btnAgregar = document.getElementById('btn-agregar');
const formulario = document.getElementById('formulario-deudor');

const alerta = document.createElement('div');


const nombre = document.getElementById('nombre-deudor');
const apodo = document.getElementById('apodo-deudor');
const fecha = document.getElementById('fecha');
const cantidad = document.getElementById('cantidad');
const pagado = document.getElementById('pagado');


document.addEventListener('DOMContentLoaded', () => {
    eventListeners();
})
function eventListeners(){

    btnAgregar.addEventListener('click', agregarDeudor);
}
function agregarDeudor(e){
    e.preventDefault();
    console.log('Agregando deudor');
    limpiarHtml(alerta);
    validarDeudor();

    

        deudor.nombre = nombre.value;
        deudor.apodo = apodo.value;
        deudor.fecha = fecha.value;
        deudor.cantidad = cantidad.value;
        deudor.pagado = pagado.value;
    
    deudores.push(deudor);
    console.log(deudores);
    mostrarDeudores(deudores);

}

function validarDeudor(){

    if( nombre.value === '' || apodo.value === '' || fecha.value === '' || cantidad.value === '' || pagado.value === '' ){
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

function mostrarDeudores(deudores){
    const tablaDeudores = document.getElementById('tabla-deudores');
    deudores.forEach(deudor => {
        const { nombre, apodo, fecha, cantidad, pagado } = deudor;
    const nuevoDeudor = document.createElement('tr');
    nuevoDeudor.innerHTML = `
        <td>${nombre}</td>
        <td>${apodo}</td>
        <td>${fecha}</td>
        <td>${cantidad}</td>
        <td>${pagado}</td>
    `;

    tablaDeudores.appendChild(nuevoDeudor);
    })
    
}