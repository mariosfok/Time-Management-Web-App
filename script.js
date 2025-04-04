// HAMBURGER MENU
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


let timeLeft = 0;
let countdown = null;


function startTimer() {

  const timeInput = document.getElementById("timeInput");
  const display = document.getElementById("display");

  closeTimerPopup();
  if (!timeInput.value.trim()) {
      alert("Please enter a valid time.");
      return;
  }

  const minutes = parseInt(timeInput.value, 10);

  if (isNaN(minutes) || minutes <= 0) {
      alert("Please enter a valid time.");
      return;
  }

  clearInterval(countdown);
  timeLeft = minutes * 60;

  countdown = setInterval(() => {
      updateDisplay();
      if (timeLeft <= 0) {
          clearInterval(countdown);
          alert("Time is up!");
      }
      timeLeft--;
  }, 1000);
  document.querySelector("#stopBtn").style.display = "block";

}



function stop() {
  clearInterval(countdown);
  countdown = null;

  
  document.querySelector("#stopBtn").style.display = "none";
  document.querySelector("#startBtn").style.display = "block";
}


function continueTimer() {
  if (countdown) return; // Αν ήδη τρέχει, μην το ξεκινήσεις ξανά

  countdown = setInterval(() => {
      updateDisplay();
      if (timeLeft <= 0) {
          clearInterval(countdown);
          alert("Time is up!");
      }
      timeLeft--;
  }, 1000);
  
  
  document.querySelector("#startBtn").style.display = "none";
  document.querySelector("#stopBtn").style.display = "block";
}


function reset() {
  clearInterval(countdown);
  countdown = null;
  timeLeft = 0;
  document.getElementById("display").textContent = "00:00";
  console.log("Timer reset");
  document.querySelector("#startBtn").style.display = "none";
  document.querySelector("#stopBtn").style.display = "none";
}


function updateDisplay() {
  const display = document.getElementById("display");
  const min = Math.floor(timeLeft / 60);
  const sec = timeLeft % 60;
  display.textContent = `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
}
























