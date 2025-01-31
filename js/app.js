import { eventListeners, obtenerDeudores, mostrarDeudores } from "./funciones.js";

document.addEventListener('DOMContentLoaded', () => {
    eventListeners();
    let deudores = obtenerDeudores();
    mostrarDeudores(deudores);
})