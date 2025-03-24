// HAMBURGER MENU.js
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', (event) => {
  menu.classList.toggle('hidden');
  event.stopPropagation();
});


document.addEventListener('click', (event) => {
  if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
    menu.classList.add('hidden');
  }  
});


// OPEN TIMER POP UP 
function openTimerPopup() {
  document.querySelector(".overlay").style.display = "flex";
  document.querySelector(".timerPopup").style.display = "flex";
}


// CLOSE POP UP
function closeTimerPopup() {

  document.querySelector(".overlay").style.display = "none";
  document.querySelector(".timerPopup").style.display = "none";
  
}


let countdown;

function startTimer() {
  const timeInput = document.getElementById("timeInput");
  const minutes = parseInt(timeInput.value, 10);

  if (isNaN(minutes) || minutes <= 0) {
    alert("Παρακαλώ εισάγετε έναν έγκυρο αριθμό λεπτών.");
    return;
  }

  closeTimerPopup();

  let timeLeft = minutes * 60;
  const display = document.getElementById("display");

  
  clearInterval(countdown);

  countdown = setInterval(() => {
    const min = Math.floor(timeLeft / 60);
    const sec = timeLeft % 60;

    // Προσθέτει μηδενικά όπου χρειάζεται
    const formattedMin = min < 10 ? `0${min}` : min;
    const formattedSec = sec < 10 ? `0${sec}` : sec;

    display.textContent = `${formattedMin}:${formattedSec}`;

    if (timeLeft <= 0) {
      clearInterval(countdown);
      alert("Time is up!");
    }

    timeLeft--;
  }, 1000);
}


function stop() {
  clearInterval(countdown);
}


function reset() {
  clearInterval(countdown);
  document.getElementById("display").textContent = "00:00";
}



























