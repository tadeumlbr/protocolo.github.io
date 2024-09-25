document.getElementById('gerarPDF').addEventListener('click', function() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const receivedBy = document.getElementById('receivedBy').value;
    const item = document.getElementById('item').value;

    doc.text(`Protocolo de Recebimento`, 10, 10);
    doc.text(`Recebido Por: ${receivedBy}`, 10, 20);
    doc.text(`Item: ${item}`, 10, 30);

    doc.save('protocolo_de_recebimento.pdf');
});

document.getElementById('receiptForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
    const receivedBy = document.getElementById('receivedBy').value;
    const item = document.getElementById('item').value;

    document.getElementById('protocolResponse').innerHTML = `
        <h2>Protocolo Gerado</h2>
        <p>Recebido Por: ${receivedBy}</p>
        <p>Item: ${item}</p>
    `;
});
