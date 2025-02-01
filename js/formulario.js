import { mostrarAlerta, limpiarHtml, obtenerDeudores } from "./funciones.js";
import { nombre, apodo, fecha, cantidad, pagado, alerta} from "./variables.js";



export function agregarDeudor(e){
    e.preventDefault();
    console.log('Agregando deudor');
    limpiarHtml(alerta);  
    
// Si la validación falla, detenemos la ejecución
if (!validarDeudor()) {
    return;
}

    const nuevoDeudor = {
        id: Date.now(),
        nombre: nombre.value,
        apodo: apodo.value,
        fecha: fecha.value,
        cantidad: cantidad.value,
        pagado: pagado.value
    };
    
    // Recuperar la lista actual de deudores desde localStorage
    let deudores = obtenerDeudores();

    
    // Agregar el nuevo deudor a la lista
    deudores.push(nuevoDeudor);
    
    // Guardar la lista actualizada en localStorage
    localStorage.setItem('deudores', JSON.stringify(deudores));

    window.location.href = 'index.html';
}

export function validarDeudor(){
    if( nombre.value === '' || apodo.value === '' || fecha.value === '' || cantidad.value === '' || pagado.value === '' ){
        mostrarAlerta('Todos los campos son obligatorios', 'error');
        return false;  
    } 
    mostrarAlerta('Agregado correctamente', 'correcto');
    return true; 

}

