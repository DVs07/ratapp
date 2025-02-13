// import jsPDF from "jspdf";


export const divPDF = document.querySelector('#pdf');

document.addEventListener("DOMContentLoaded", function () {
    const deudor = JSON.parse(localStorage.getItem("deudorPDF"));

    if (!deudor) {
        divPDF.innerHTML = "<p>No hay datos para mostrar.</p>";
        return;
    }

    const { nombre, apodo, fecha, cantidad, pagado } = deudor;

    divPDF.innerHTML = `
        <h1>Informe</h1>
        <p>Nombre: ${nombre}</p>
        <p>Apodo: ${apodo}</p>
        <p>Fecha Préstamo: ${fecha}</p>
        <p>Cantidad Prestada: ${cantidad}</p>
        <p>Pagado: ${pagado}</p>
        <button id="btnDescargarPDF">Descargar PDF</button>
    `;

    // Evento para descargar PDF con jsPDF
    // document.getElementById("btnDescargarPDF").addEventListener("click", function () {
    //     const pdf = new jsPDF();
    //     pdf.setFontSize(12);
    //     pdf.text(`Nombre: ${nombre}`, 20, 20);
    //     pdf.text(`Apodo: ${apodo}`, 20, 30);
    //     pdf.text(`Fecha Préstamo: ${fecha}`, 20, 40);
    //     pdf.text(`Cantidad Prestada: ${cantidad}`, 20, 50);
    //     pdf.text(`Pagado: ${pagado}`, 20, 60);
    //     pdf.save("informe.pdf");
    // });
});