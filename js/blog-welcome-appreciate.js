var appreciate = document.getElementById("appreciate");

var clickCount = document.getElementById("clickCount");

window.onload = function showAppreciations() {
  console.log("load");
  if (typeof Storage !== "undefined") {
    if (localStorage.welcomeCount) {
      localStorage.welcomeCount = Number(localStorage.welcomeCount);
    } else {
      localStorage.welcomeCount = 0;
    }
    clickCount.innerHTML = localStorage.welcomeCount;
  } else {
    clickCount.innerHTML = "0";
  }
}

function updateAppreciations() {
  if (typeof Storage !== "undefined") {
    if (localStorage.welcomeCount) {
      localStorage.welcomeCount = Number(localStorage.welcomeCount) + 1;
    } else {
      localStorage.welcomeCount = 1;
    }
    clickCount.innerHTML = localStorage.welcomeCount;
    appreciate.style.pointerEvents = "none";
  } else {
    clickCount.innerHTML = "1";
  }
}
