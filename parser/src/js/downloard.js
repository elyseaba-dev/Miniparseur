function telechargerPDF() {

    const { jsPDF } = window.jspdf;
    
    // const title = document.getElementById("title").value;

    const pdf = new jsPDF();

    pdf.setFontSize(16);
    const title = document.getElementById("title").value;
    pdf.text(title, 14, 20);

    pdf.autoTable({
        html: "#resultTable",
        tartY: 30,
        styles: {
        fontSize: 10,
        cellPadding: 5,
        lineWidth: 0.2
    },

    headStyles: {
        fontStyle: "bold"
    },

    theme: "grid"
    });

    pdf.save("tableau.pdf");
}