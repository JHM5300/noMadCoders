// <⚠️ DONT DELETE THIS ⚠️>
//import '../styles.css';
// <⚠️ /DONT DELETE THIS ⚠️>

function reSize() {
  const width = window.innerWidth;
  if (width > 1000) {
    document.body.style.background = "#F7FE2E";
  } else if (1000 > width && 550 < width) {
    document.body.style.background = "#CC2EFA";
  } else if (550 > width) {
    document.body.style.background = "#58ACFA";
  }
}

window.addEventListener("resize", reSize);
