const scoreBtn = document.querySelector(".score-btn");
const homeScore = document.getElementById("home-score");
const guestScore = document.getElementById("guest-score");
const homeBtn = document.getElementById("home-btn");
const guestBtn = document.getElementById("guest-btn");
const homeEl = document.querySelector('.home');
const guestEl = document.querySelector('.guest');
const resetBtn = document.getElementById('reset');
const statusEl = document.getElementById('status-el');
let count = 0;
let start = 0;
homeScore.innerText = count;
guestScore.innerText = start;

function statusDisplay() {
    if (homeScore.innerText > guestScore.innerText){
        statusEl.innerText = 'HOME IS WINING';
    } else if (guestScore.innerText > homeScore.innerText) {
        statusEl.innerText = 'GUEST IS WINING';
    } else if (homeScore.innerText == guestScore.innerText) {
        statusEl.innerText = 'DRAW';
    }
}


resetBtn.addEventListener('click', () => {
    count = 0;
    start = 0;
    homeScore.innerText = count;
    guestScore.innerText = start;
})


homeEl.addEventListener('click', (e) => {
    let btnValue = +e.target.innerText;
    if (btnValue == 1) {
      count += 1;
      homeScore.innerText = count;
    } else if (btnValue == 2){
        count += 2;
      homeScore.innerText = count;
    } else if (btnValue == 3){
        count += 3;
      homeScore.innerText = count;
    }
    statusDisplay();
});

guestEl.addEventListener('click', (e) => {
    let btnValue = +e.target.innerText;
    if (btnValue == 1) {
      start += 1;
      guestScore.innerText = start;
    } else if (btnValue == 2){
        start += 2;
      guestScore.innerText = start;
    } else if (btnValue == 3){
        start += 3;
      guestScore.innerText = start;
    }
});