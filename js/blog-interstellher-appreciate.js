var appreciate = document.getElementById("appreciate");

var clickCount = document.getElementById("clickCount");

window.onload = function showAppreciations() {
  console.log("load");
  if (typeof Storage !== "undefined") {
    if (localStorage.interstellherCount) {
      localStorage.interstellherCount = Number(localStorage.interstellherCount);
    } else {
      localStorage.interstellherCount = 0;
    }
    clickCount.innerHTML = localStorage.interstellherCount;
  } else {
    clickCount.innerHTML = "0";
  }
}

function updateAppreciations() {
  if (typeof Storage !== "undefined") {
    if (localStorage.interstellherCount) {
      localStorage.interstellherCount = Number(localStorage.interstellherCount) + 1;
    } else {
      localStorage.interstellherCount = 1;
    }
    clickCount.innerHTML = localStorage.interstellherCount;
    appreciate.style.pointerEvents = "none";
  } else {
    clickCount.innerHTML = "1";
  }
}
