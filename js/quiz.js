
function calculateScore() {
    // Logique de calcul du score en fonction des réponses
    // Assurez-vous de personnaliser cette fonction en fonction de vos besoins
    var score = 0;

    // Exemple : si la réponse à la première question est correcte, ajoutez 1 au score
    if (document.querySelector('input[name="q1"]:checked').value === "a") {
        score++;
    }
    if (document.querySelector('input[name="q2"]:checked').value === "a") {
        score++;
    }
    if (document.querySelector('input[name="q3"]:checked').value === "a") {
        score++;
    }
    if (document.querySelector('input[name="q4"]:checked').value === "a") {
        score++;
    }
    if (document.querySelector('input[name="q5"]:checked').value === "c") {
        score++;
    }
    if (document.querySelector('input[name="q6"]:checked').value === "a") {
        score++;
    }
    if (document.querySelector('input[name="q7"]:checked').value === "a") {
        score++;
    }

    // Répétez pour les autres questions

    // Affichez le score et les réponses correctes
    var resultContainer = document.getElementById("result-container");
    resultContainer.innerHTML = "<h2>Résultat</h2>" +
        "<p>Votre note est : " + score + "</p>" +
        "<p>Réponses correctes :</p>" +
        "<ul id='correct-answers'></ul>";

    // Ajoutez les réponses correctes à la liste
    var correctAnswersList = document.getElementById("correct-answers");
    correctAnswersList.innerHTML = "<li>1. HyperText Markup Language</li>" +
        "<li>2. CSS</li>" +
        "<li>3. &lt;a&gt;</li>" +
        "<li>4. color</li>" +
        "<li>5. Programmation côté client</li>" +
        "<li>6. &lt;script&gt;</li>"+
        "<li>7. JavaScript </li>";

    // Vous pouvez personnaliser davantage cette fonction en fonction de votre quiz
}

