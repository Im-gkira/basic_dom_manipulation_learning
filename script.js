'use strict';

let correctNumber = Math.trunc(Math.random() * 20) + 1;
let guessedNumber = Number.NEGATIVE_INFINITY;
let score = 0;
let highScore = 0
document.querySelector(".check").addEventListener("click", function () {
        guessedNumber = Number(document.querySelector(".guess").value);
        score = Number(document.querySelector(".score").textContent);
        if (!guessedNumber) {
            alert("bruh! ig ya forgot to enter a number🤔");
        } else if (guessedNumber < correctNumber) {
            document.querySelector(".message").textContent = "Too Low😢";
            document.querySelector(".score").textContent = (score - 1).toString();
        } else if (guessedNumber > correctNumber) {
            document.querySelector(".message").textContent = "Too High😒";
            document.querySelector(".score").textContent = (score - 1).toString();
        } else {
            document.querySelector(".message").textContent = "Yo! You got some insane mind reading skills😎";
            if (score > highScore) {
                document.querySelector(".highscore").textContent = score.toString();
                highScore = score
            }
            document.querySelector("body").style.backgroundColor = "green";
            document.querySelector(".number").style.width = "21rem"
            document.querySelector(".number").textContent = correctNumber.toString();
            correctNumber = Math.trunc(Math.random() * 20) + 1;
            score = 20

        }
        if (score === 0) {
            alert("Game Over😭😭");
        }
    }
)
document.querySelector(".again").addEventListener("click", function () {
    correctNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20
    document.querySelector("body").style.backgroundColor = "#333";
    document.querySelector(".number").style.width = "15rem";
})