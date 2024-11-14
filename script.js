const cards = [
    { name: "6", value: 6 },
    { name: "7", value: 7 },
    { name: "8", value: 8 },
    { name: "9", value: 9 },
    { name: "10", value: 10 },
    { name: "Валет", value: 2 },
    { name: "Дама", value: 3 },
    { name: "Король", value: 4 },
    { name: "Туз", value: 11 },
];

const userNameEl = document.getElementById("user-name-display");
const userScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");
const userCardEl = document.getElementById("user-card");
const computerCardEl = document.getElementById("computer-card");
const generateBtn = document.getElementById("generate-btn");
const resetBtn = document.getElementById("reset-btn");
const resultEl = document.getElementById("result");

let userName = prompt("Введіть ваше ім'я:");

if (userName) {
    userNameEl.innerText = userName;
} else {
    userName = "User";
    userNameEl.innerText = userName;
}

let userTotalScore = 0;
let computerTotalScore = 0;
let attempts = 3;

function getRandomCard() {
    const randomIndex = Math.floor(Math.random() * cards.length);
    return cards[randomIndex];
}

function generateCards() {
    if (attempts > 0) {
        const userCard = getRandomCard();
        const computerCard = getRandomCard();

        userTotalScore += userCard.value;
        computerTotalScore += computerCard.value;

        userScoreEl.innerText = userTotalScore;
        computerScoreEl.innerText = computerTotalScore;

        userCardEl.src = `images/${userCard.name}.png`;
        computerCardEl.src = `images/${computerCard.name}.png`;

        attempts--;

        if (attempts === 0) {
            generateBtn.disabled = true;
            showResult();
            resetBtn.style.display = "inline-block";
        }
    }
}

function showResult() {
    if (userTotalScore > computerTotalScore) {
        resultEl.innerText = `${userName} виграв!`;
    } else if (userTotalScore < computerTotalScore) {
        resultEl.innerText = "Комп'ютер виграв!";
    } else {
        resultEl.innerText = "Нічия!";
    }
}

function resetGame() {
    userTotalScore = 0;
    computerTotalScore = 0;
    attempts = 3;

    userScoreEl.innerText = userTotalScore;
    computerScoreEl.innerText = computerTotalScore;
    userCardEl.src = "";
    computerCardEl.src = "";
    resultEl.innerText = "";
    
    generateBtn.disabled = false;
    resetBtn.style.display = "none";
}

generateBtn.addEventListener("click", generateCards);

resetBtn.addEventListener("click", resetGame);
