function convertir() {
    const texte = document.getElementById("inputText").value;
    const nombreColo = Number(document.getElementById("colomns").value);

    const lignes = texte.trim().split("\n").filter(Boolean);

    const table = document.getElementById("resultTable");

    table.innerHTML = "";

    for (let i = 0; i < lignes.length; i += nombreColo) {
        const row = document.createElement("tr");
        const groupe = lignes.slice(
            i,
            i + nombreColo
        );
        groupe.forEach(element => {
            const cellule = document.createElement("td");
            cellule.textContent = element;
            row.appendChild(cellule);
        });
        table.appendChild(row)
    }
}