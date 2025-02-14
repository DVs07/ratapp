// import jsPDF from "jspdf";


export const divPDF = document.querySelector('#main-pdf');
export const headerPDF = document.querySelector('#header-pdf');
export const footerPDF = document.querySelector('#footer-pdf');

document.addEventListener("DOMContentLoaded", function () {
    const deudor = JSON.parse(localStorage.getItem("deudorPDF"));

    if (!deudor) {
        divPDF.innerHTML = "<p>No hay datos para mostrar.</p>";
        return;
    }

    const { nombre, apodo, fecha, cantidad, pagado } = deudor;

    const titulo = document.createElement("h1");
    titulo.classList.add("text-center", 'py-3','mb-4','border-bottom');
    titulo.textContent = "Informe";
    headerPDF.appendChild(titulo);

    divPDF.classList.add("text-center");
    divPDF.innerHTML = `
        <p>Nombre: ${nombre}</p>
        <p>Apodo: ${apodo}</p>
        <p>Fecha Préstamo: ${fecha}</p>
        <p>Cantidad Prestada: ${cantidad}</p>
        <p>Pagado: ${pagado}</p>
    `;

    const btnDescargarPDF = document.createElement("button");
    btnDescargarPDF.classList.add("btn", "btn-primary");
    btnDescargarPDF.id = "btnDescargarPDF";
    btnDescargarPDF.textContent = "Descargar PDF";
    footerPDF.classList.add('flex', 'mt-4','justify-center','align-items-center');
    footerPDF.appendChild(btnDescargarPDF);

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