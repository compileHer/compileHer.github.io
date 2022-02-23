var appreciate = document.getElementById("appreciate");

var clickCount = document.getElementById("clickCount");

window.onload = function showAppreciations() {
  console.log("load");
  if (typeof Storage !== "undefined") {
    if (localStorage.ss1Count) {
      localStorage.ss1Count = Number(localStorage.ss1Count);
    } else {
      localStorage.ss1Count = 0;
    }
    clickCount.innerHTML = localStorage.ss1Count;
  } else {
    clickCount.innerHTML = "0";
  }
}

function updateAppreciations() {
  if (typeof Storage !== "undefined") {
    if (localStorage.ss1Count) {
      localStorage.ss1Count = Number(localStorage.ss1Count) + 1;
    } else {
      localStorage.ss1Count = 1;
    }
    clickCount.innerHTML = localStorage.ss1Count;
    appreciate.style.pointerEvents = "none";
  } else {
    clickCount.innerHTML = "1";
  }
}
