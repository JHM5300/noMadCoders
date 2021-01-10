// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const number = document.querySelectorAll("button"),
  input = document.querySelector(".text");

let result = "";
let operbool = false;
let numberbool = true;
let equlasbool = true;
let Continuous = false;

function displayNumber(number) {
  operbool = true;
  const current = input.value;

  if (equlasbool) {
    if (numberbool) {
      input.value = current === "0" || 0 ? number : input.value + number;
    } else {
      input.value = number;
      numberbool = true;
      Continuous = true;
    }
    result += number;
  } else {
    equlasbool = true;
    input.value = number;
    result = number;
  }
}
function calc() {
  if (input.value === "0") {
    clear();
  } else {
    if (!operbool) {
    } else {
      if (equlasbool) {
        console.log("555");
        const final = eval(result);
        input.value = `RESULT : ${final}`;
        result = "";
        equlasbool = false;
        operbool = false;
      } else {
        clear();
      }
    }
  }
}
function clear() {
  operbool = false;
  numberbool = true;
  equlasbool = true;
  Continuous = false;
  result = "";
  input.value = "0";
}
function operator(oper) {
  if (!operbool) {
  } else if (Continuous) {
    const final = eval(result);
    result += oper;
    input.value = `RESULT : ${final}`;
    console.log(result);
    Continuous = false;
    operbool = false;
    numberbool = false;
  } else {
    operbool = false;
    result += oper;
    numberbool = false;
  }
}

function init() {
  number.forEach((button) => {
    button.addEventListener("click", () => {
      switch (button.dataset.type) {
        case "operator":
          const oper = button.innerText;
          operator(oper);
          break;
        case "c":
          clear();
          break;
        case "equals":
          calc();
          break;
        default:
          const number = button.innerText;
          displayNumber(number);
          break;
      }
    });
  });
}
init();
