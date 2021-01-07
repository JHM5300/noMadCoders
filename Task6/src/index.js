// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const choseText = document.getElementById("chose");
const wonAndLostText = document.getElementById("wonAndLost");
const choseNumber = document.getElementById("js-form");
const Generate = document.querySelector(".Generate");
const range = document.querySelector(".range");
const playBtn = document.querySelector(".sttled");

const input = choseNumber.querySelector("input");

function wonAndLost(you, mach) {
  if (you === mach) {
    wonAndLostText.innerText = "You Won!";
  } else {
    wonAndLostText.innerText = "You Lost!";
  }
}

function generateRandom(min, max) {
  const ranNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return ranNumber;
}

function playGame() {
  const youChose = parseInt(input.value);
  if (input.value == "") {
    choseText.innerText = "Chose please";
  } else {
    const randomnum = generateRandom(0, handleFormSubmit());
    choseText.innerText = `you Chose:${youChose} ,the machine chose: ${randomnum} `;

    wonAndLost(youChose, randomnum);
  }
}

function handleFormSubmit() {
  const maxValue = range.value;
  Generate.innerText = `Generate a number betwwen 0 and ${maxValue}`;
  return maxValue;
}

function init() {
  range.addEventListener("mousemove", handleFormSubmit);
  playBtn.addEventListener("click", playGame);
}
init();
