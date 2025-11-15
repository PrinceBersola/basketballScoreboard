const homeScore = document.getElementById("home-score");
const guestScore = document.getElementById("guest-score");
const add1HomeBtn = document.getElementById("add1-home");
const add2HomeBtn = document.getElementById("add2-home");
const add3HomeBtn = document.getElementById("add3-home");
const add1GuestBtn = document.getElementById("add1-guest");
const add2GuestBtn = document.getElementById("add2-guest");
const add3GuestBtn = document.getElementById("add3-guest");

let startScore = 0;

homeScore.textContent = startScore;
guestScore.textContent = startScore;

add1HomeBtn.addEventListener("click", plusOneHome);
add2HomeBtn.addEventListener("click", plusTwoHome);
add3HomeBtn.addEventListener("click", plusThreeHome);

add1GuestBtn.addEventListener("click", plusOneGuest);
add2GuestBtn.addEventListener("click", plusTwoGuest);
add3GuestBtn.addEventListener("click", plusThreeGuest);

// button functions
function plusOneHome() {
     startScore += 1;
     homeScore.textContent = startScore;
}

function plusTwoHome() {
     startScore += 2;
     homeScore.textContent = startScore;
}

function plusThreeHome() {
     startScore += 3;
     homeScore.textContent = startScore;
}

function plusOneGuest() {
     startScore += 1;
     guestScore.textContent = startScore;
}

function plusTwoGuest() {
     startScore += 2;
     guestScore.textContent = startScore;
}

function plusThreeGuest() {
     startScore += 3;
     guestScore.textContent = startScore;
}