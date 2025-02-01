import { eventListeners, obtenerDeudores, mostrarDeudores } from "./funciones.js";

document.addEventListener('DOMContentLoaded', () => {
    eventListeners();
    mostrarDeudores();
})