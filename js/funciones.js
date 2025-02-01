import { agregarDeudor} from "./formulario.js";
import { noDeudor, formulario, alerta } from "./variables.js";



export function eventListeners(){
    const btnAgregar = document.getElementById('btn-agregar');
    if(btnAgregar){
        btnAgregar.addEventListener('click', agregarDeudor);
    }

    document.getElementById('tabla-deudores').addEventListener('click', function (e) {
        // Verificar si se hizo clic en el botón de eliminar
        const botonEliminar = e.target.closest('.btn-danger'); // Encuentra el botón más cercano con la clase 'btn-danger'
        
        if (botonEliminar) {
            const id = parseInt(botonEliminar.getAttribute('data-id')); // Obtener el ID
            eliminarDeudor(id);
            mostrarDeudores();  
        }
    });
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

    nuevoDeudor.innerHTML = `
        <td>${nombre}</td>
        <td>${apodo}</td>
        <td>${fecha}</td>
        <td>${cantidad}</td>
        <td>${pagado}</td>
        <td>${calcularResto(deudor)}</td>
        <td><button class="btn btn-success me-2"><i class="fa fa-pencil me-2" aria-hidden="true"></i>Editar</button><button class="btn btn-danger"  data-id="${id}"><i class="fa fa-trash-o" aria-hidden="true"></i>
    Eliminar</button></td>
    `;
    if(tablaDeudores){
        tablaDeudores.appendChild(nuevoDeudor);
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

export function calcularResto(deudor){
    const { cantidad, pagado } = deudor;
    const resto = cantidad - pagado;
    return resto;
}

export function eliminarDeudor(id){
    let deudores = obtenerDeudores();

     // Filtrar para excluir el deudor con el ID seleccionado
    deudores = deudores.filter(deudor => deudor.id !== id);

     // Guardar la nueva lista en localStorage
    localStorage.setItem('deudores', JSON.stringify(deudores));

     // Volver a renderizar la tabla
    mostrarDeudores();
}