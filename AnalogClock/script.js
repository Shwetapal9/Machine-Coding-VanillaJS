const secondHand = document.querySelector(".sec");
const minuteHand = document.querySelector(".min");
const hourHand = document.querySelector(".hour");
function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = 6 * seconds;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = 6 * minutes;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = 30 * hours + minutes / 2;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
