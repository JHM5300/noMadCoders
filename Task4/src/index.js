// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const fromList = document.querySelector(".fromlist");

function changeList(event) {
  const countryValue = event.target.value;
  const country = "country";
  localStorage.setItem(country, countryValue);
}

function init() {
  fromList.addEventListener("change", changeList);
}
init();
