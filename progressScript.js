function addMinutesToToday(minutes) {
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = dayNames[new Date().getDay()];  
  
  // Ανάκτηση των δεδομένων από το localStorage ή δημιουργία νέου αντικειμένου αν δεν υπάρχουν
  let progress = JSON.parse(localStorage.getItem("progress")) || {
    "Sunday": 0,
    "Monday": 0,
    "Tuesday": 0,
    "Wednesday": 0,
    "Thursday": 0,
    "Friday": 0,
    "Saturday": 0
  };

  // Προσθέτουμε τα λεπτά στην τρέχουσα ημέρα
  progress[today] += minutes;
  
  // Αποθηκεύουμε το ενημερωμένο progress στο localStorage
  localStorage.setItem("progress", JSON.stringify(progress));
  
  // Ενημέρωση της λίστας στην HTML με τις ώρες για κάθε μέρα
  document.getElementById("mon").textContent = `Mon: ${progress.Monday} min`;
  document.getElementById("tue").textContent = `Tue: ${progress.Tuesday} min`;
  document.getElementById("wed").textContent = `Wed: ${progress.Wednesday} min`;
  document.getElementById("thu").textContent = `Thu: ${progress.Thursday} min`;
  document.getElementById("fri").textContent = `Fri: ${progress.Friday} min`;
  document.getElementById("sat").textContent = `Sat: ${progress.Saturday} min`;
  document.getElementById("sun").textContent = `Sun: ${progress.Sunday} min`;
}
