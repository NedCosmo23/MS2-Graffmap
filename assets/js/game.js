const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    if (lockBoard) return;

    if (this === firstCard) return;

    this.classList.add('flip');


    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;

    }


    secondCard = this;




    checkForMatch();

}


function checkForMatch() {

    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

    isMatch ? disableCards() : unflipCards();

}


function disableCards() {

    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();

}


function unflipCards() {
    lockBoard = true;

    setTimeout(() => {

        firstCard.classList.remove('flip');

        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);

}

function resetBoard() {

    [hasFlippedCard, lockBoard] = [false, false];

    [firstCard, secondCard] = [null, null];

}
//

(function shuffle() {

    cards.forEach(card => {

        let ramdomPos = Math.floor(Math.random() * 12);

        card.style.order = ramdomPos;

    });

})();


//game timer
var second = 0,
    minute = 0;
var timer = document.querySelector(".timer");
var interval;

function startTimer() {
    interval = setInterval(function () {
        timer.innerHTML = minute + "mins " + second + "secs";
        second++;
        if (second == 60) {
            minute++;
            second = 0;
        }
        if (minute == 60) {
            hour++;
            minute = 0;
        }
    }, 1000);
}

cards.forEach(card => card.addEventListener('click', flipCard));