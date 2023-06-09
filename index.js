const year = document.querySelector(".year");
const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const updateCounter = () => {
  const currentYear = new Date().getFullYear();
  const birthDate = new Date(`March 05  ${currentYear + 1} 00:00:00`);
  year.innerText = currentYear;
  const curretTime = new Date();
  const diff = birthDate - curretTime;
  const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
  const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
  const secondsLeft = Math.floor(diff / 1000) % 60;
  days.innerText = daysLeft;
  hours.innerText = hoursLeft < 10 ? "0" + hoursLeft : hoursLeft;
  minutes.innerText = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;
  seconds.innerText = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;
};
setInterval(updateCounter, 1000);
