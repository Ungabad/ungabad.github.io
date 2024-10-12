function updateClock() {
  const clockElement = document.getElementById("clock");
  const now = new Date();

  const hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");

  const amPm = hours >= 12 ? "PM" : "AM";
  const hours12 = hours % 12 || 12; // the percent symbol ensures it's 12 when 0

  const timeString = `${hours12}:${minutes} ${amPm}`;
  clockElement.textContent = timeString;
}

function startClock() {
  const clockElement = document.getElementById("clock");

  function update() {
    updateClock();
  }

  setInterval(update, 1000);
  update(); // Initial call to display the time immediately
}

startClock();
