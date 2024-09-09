// Fonction pour afficher le texte de l'input dans le paragraphe
function myDisplayText() {
    const inputText = document.getElementById('input-text').value;
    const textDisplayer = document.getElementById('text-displayer');
    textDisplayer.textContent = inputText;
}

// Fonction pour passer le texte en gras
function myTurnBold() {
    const textDisplayer = document.getElementById('text-displayer');
    textDisplayer.classList.add('bold');
}

// Fonction pour passer le texte en italique
function myTurnItalic() {
    const textDisplayer = document.getElementById('text-displayer');
    textDisplayer.classList.add('italic');
}

// Fonction pour enlever tous les effets appliqués au texte
function myClearText() {
    const textDisplayer = document.getElementById('text-displayer');
    textDisplayer.classList.remove('bold', 'italic');
    textDisplayer.textContent = ''; // Efface le texte également
}

// Ajouter des écouteurs d'événements
document.getElementById('input-text').addEventListener('input', myDisplayText);
document.getElementById('turn-text-bold').addEventListener('click', myTurnBold);
document.getElementById('turn-text-italic').addEventListener('click', myTurnItalic);
document.getElementById('clear-text').addEventListener('click', myClearText);
