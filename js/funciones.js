import { agregarDeudor} from "./formulario.js";
import { noDeudor } from "./variables.js";

export const formulario = document.getElementById('formulario-deudor');

export function eventListeners(){
    const btnAgregar = document.getElementById('btn-agregar');
    if(btnAgregar){
        btnAgregar.addEventListener('click', agregarDeudor);
    }
}
export function mostrarAlerta(mensaje, tipo){
    const alerta = document.createElement('div');
    
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


export function mostrarDeudores(deudores){
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
        <td>${calcularResto(deudor)}</td>
        <td><button class="btn btn-danger"><i class="fa fa-trash-o" aria-hidden="true"></i>
Eliminar</button> <button class="btn btn-success"><i class="fa fa-pencil me-2" aria-hidden="true"></i>Editar</button></td>

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