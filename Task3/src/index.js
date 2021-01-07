
// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;

const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h2"),
  clockTitle2 = clockContainer.querySelector("h1");

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  const date = new Date();
  var qDay = date.getTime();
  var dDay = xmasDay - qDay;

  var d = Math.floor(dDay / (1000 * 60 * 60 * 24));
  var h = Math.floor((dDay / (1000 * 60 * 60)) % 24);
  var m = Math.floor((dDay / (1000 * 60)) % 60);
  var s = Math.floor((dDay / 1000) % 60);

  clockTitle.innerText = `${d < 10 ? `0${d}` : d}d ${h < 10 ? `0${h}` : h}h ${
    m < 10 ? `0${m}` : m
  }m ${s < 10 ? `0${s}` : s}s`;
}

function init() {
  setInterval(getTime, 1000);
}
init();
