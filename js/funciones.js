import { agregarDeudor} from "./formulario.js";
import { noDeudor, formulario, alerta, cardDeudores } from "./variables.js";



export function eventListeners(){
    const btnAgregar = document.getElementById('btn-agregar');
    if(btnAgregar){
        btnAgregar.addEventListener('click', agregarDeudor);
    }

    const tablaDeudores = document.getElementById('tabla-deudores');
    if(tablaDeudores){
    document.getElementById('tabla-deudores').addEventListener('click', function (e) {
        // Verificar si se hizo clic en el botón de eliminar
        const botonEliminar = e.target.closest('.btn-danger'); // Encuentra el botón más cercano con la clase 'btn-danger'
        
        if (botonEliminar) {
            const id = parseInt(botonEliminar.getAttribute('data-id')); // Obtener el ID
            eliminarDeudor(id);
            mostrarDeudores();  
        }
    });
    mostrarDeudores();
    }
}
export function mostrarAlerta(mensaje, tipo){
    
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

export function limpiarHtml(elemento){
    while(elemento.firstChild){
        elemento.removeChild(elemento.firstChild);
    }
}


export function mostrarDeudores(){
    const tablaDeudores = document.getElementById('tabla-deudores');

    const arrayDeudores = obtenerDeudores();
    tablaDeudores.innerHTML = '';

    arrayDeudores.forEach(deudor => {
        
    const { id,nombre, apodo, fecha, cantidad, pagado } = deudor;
    const nuevoDeudor = document.createElement('tr');
    const tdNombre = document.createElement('td');
    const tdApodo = document.createElement('td');
    const tdFecha = document.createElement('td');
    const tdCantidad = document.createElement('td');
    const tdPagado = document.createElement('td');
    const tdResto = document.createElement('td');
    const tdAcciones = document.createElement('td');

    tdNombre.textContent = nombre;
    tdApodo.textContent = apodo;
    tdFecha.textContent = fecha;
    tdCantidad.textContent = cantidad;
    tdPagado.textContent = pagado;
    
    const resto = calcularResto(deudor);

    tdResto.textContent = resto;

    // Boton para editar
    const btnEditar = document.createElement('button');
    btnEditar.classList.add('btn', 'btn-primary', 'me-2');
    btnEditar.innerHTML = `<i class="fa fa-pencil-square-o me-2" aria-hidden="true"></i>Editar`;
    
    // Boton para eliminar
    const btnEliminar = document.createElement('button');
    btnEliminar.classList.add('btn', 'btn-danger');
    btnEliminar.innerHTML = `<i class="fa fa-trash-o" aria-hidden="true"></i>
    Eliminar`;
    btnEliminar.setAttribute('data-id', id);

    // Boton para informe
    const btnInforme = document.createElement('button');
    btnInforme.classList.add('btn', 'btn-dark', 'border', 'me-2');
    btnInforme.innerHTML = `<i class="fa fa-file-text-o me-2 " aria-hidden="true"></i>Informe`;

    tdAcciones.appendChild(btnInforme);
    tdAcciones.appendChild(btnEditar);
    tdAcciones.appendChild(btnEliminar);
    
    nuevoDeudor.appendChild(tdNombre);
    nuevoDeudor.appendChild(tdApodo);
    nuevoDeudor.appendChild(tdFecha);
    nuevoDeudor.appendChild(tdCantidad);
    nuevoDeudor.appendChild(tdPagado);
    nuevoDeudor.appendChild(tdResto);
    nuevoDeudor.appendChild(tdAcciones);
    
    if(tablaDeudores){
        tablaDeudores.appendChild(nuevoDeudor);
        let porciento = 0;

        porciento = (resto / cantidad) * 100;

        if(porciento < 40){
            tdResto.classList.add('text-danger');
        }else if(porciento >= 40 && porciento < 60){
            tdResto.classList.add('text-warning');
        }else if(porciento >= 60){
            tdResto.classList.add('text-success');
        }
        ocultarDiv();
        }
    
    })

}

export function obtenerDeudores(){
    let deudores;
    if(localStorage.getItem('deudores') === null){
        deudores = [];
    } else {
        deudores = JSON.parse(localStorage.getItem('deudores'));
    }
    return deudores;
}

export function ocultarDiv(){
    if(noDeudor){
        noDeudor.style.display = 'none';
    }
}

export function mostrarDiv(){
    let deudores = obtenerDeudores();
    if(deudores.length === 0){
        noDeudor.style.display = 'block';
    }
}

export function calcularResto(deudor){
    const { cantidad, pagado } = deudor;
        return (parseInt(cantidad) - parseInt(pagado));
}

export function eliminarDeudor(id){
    let deudores = obtenerDeudores();

     // Filtrar para excluir el deudor con el ID seleccionado
    deudores = deudores.filter(deudor => deudor.id !== id);

     // Guardar la nueva lista en localStorage
    localStorage.setItem('deudores', JSON.stringify(deudores));

     // Volver a renderizar la tabla
    mostrarDiv();
    mostrarDeudores();
}

export function mostrarCards() {
    const deudores = obtenerDeudores();

    deudores.forEach(deudor => {
        const cardDeudor = document.createElement('div');
        cardDeudor.classList.add('col-sm-3', 'mb-3', 'mb-sm-0', 'mt-3');
        cardDeudor.innerHTML = `
            <div class="card text-bg-dark">
                <div class="card-body">
                    <h5 class="card-title">${deudor.nombre}</h5>
                    <p class="card-text">${deudor.cantidad}</p>
                    <a href="#" class="btn btn-info w-100">Ver más</a>
                </div>
            </div>
        `;
            if(cardDeudores){
                cardDeudores.appendChild(cardDeudor); 
            }
            
    });
}