import { mostrarAlerta, limpiarHtml } from "./funciones.js";
import { nombre, apodo, fecha, cantidad, pagado, deudor, deudores } from "./variables.js";

const alerta = document.createElement('div');

export function agregarDeudor(e){
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

    localStorage.setItem('deudores', JSON.stringify(deudores));

}

export function validarDeudor(){

    if( nombre.value === '' || apodo.value === '' || fecha.value === '' || cantidad.value === '' || pagado.value === '' ){
        mostrarAlerta('Todos los campos son obligatorios', 'error');
        return;
    } else {
        mostrarAlerta('Agregado correctamente', 'correcto');
    }

}

