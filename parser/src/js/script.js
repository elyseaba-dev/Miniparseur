function convertir() {

    const texte = document.getElementById("inputText").value.trim();
    const nombreColonnes = document.getElementById("columns").value.trim();


    const message = document.getElementById("message");

    if (nombreColonnes === "" || texte === "") {
        message.textContent = "Complétez tous les champs avant de convertir.";
        message.style.color = "red";
        return;
    }


    localStorage.setItem("texte", texte);
    localStorage.setItem("colonnes", nombreColonnes);

    window.location.href = "/src/page/table.html";
}