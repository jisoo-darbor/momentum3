const clock = document.getElementById("clock");

function onClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const mins = String(date.getMinutes()).padStart(2, "0");
  const secs = String(date.getSeconds()).padStart(2, "0");
  clock.innerHTML = `<span>${hours}</span>:<span>${mins}</span>:<span>${secs}</span>`;
}

setInterval(onClock, 1000);