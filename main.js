document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("formulario");
    const tabelaContatos = document.getElementById("tabela-contatos");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const telefone = document.getElementById("telefone").value;

        if (nome && telefone) {
        const newRow = tabelaContatos.insertRow();
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);

        cell1.innerHTML = nome;
        cell2.innerHTML = telefone;

        form.reset();
        }
    });
});