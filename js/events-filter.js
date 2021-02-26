var btn = "all";
var dropdown = [];

let elem = [...document.querySelectorAll(".eventCheck")];
elem.forEach((item) => item.addEventListener("change", getChecked));

function getChecked() {
  let getChex = elem.filter((item) => item.checked).map((item) => item.value);
  console.log(getChex);
  dropdown = getChex;
  filterSelection(btn, dropdown);
}

function updateButton(f) {
  btn = f;
  filterSelection(btn, dropdown);
}

filterSelection(btn, dropdown);
function filterSelection(b, d) {
  var x, i;
  x = document.getElementsByClassName("event-card");
  if (b === "all" && d.length == 0) b = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  if (d.length == 0) {
    for (i = 0; i < x.length; i++) {
      x[i].classList.remove("show");
      if (x[i].className.indexOf(b) > -1) {
        x[i].classList.add("show");
      }
    }
  } else {
    if(b == "all") b = "";
    for (i = 0; i < x.length; i++) {
      x[i].classList.remove("show");
      for (j = 0; j < d.length; j++) {
        // console.log(x[i].className.indexOf(b))
        console.log(x[i].className.indexOf(d[j]))
        if ((x[i].className.indexOf(b) > -1) && (x[i].className.indexOf(d[j]) > -1))
          x[i].classList.add("show");
      }
    }
  }
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[1].className = current[1].className.replace(" active", "");
    this.className += " active";
  });
}
