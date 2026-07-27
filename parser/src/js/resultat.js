const texte = localStorage.getItem("texte");
const nombreColonnes = Number(localStorage.getItem("colonnes"));

const lignes = texte.trim().split("\n").filter(Boolean);

const table = document.getElementById("resultTable");

for (let i = 0; i < lignes.length; i += nombreColonnes) {

    const tr = document.createElement("tr");

    const groupe = lignes.slice(i, i + nombreColonnes);

    groupe.forEach(valeur => {

        const td = document.createElement("td");

        td.textContent = valeur;

        tr.appendChild(td);

    });

    table.appendChild(tr);

}


const input = document.getElementById("title").value;
const titre = document.getElementById("titre");
inputTitle.addEventListener("input", () => {
    titre.textContent = input;
});






