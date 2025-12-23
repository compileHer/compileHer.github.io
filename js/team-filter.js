filterSelection("all");
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("single-team-member");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        x[i].classList.add("display-none");
        if (x[i].className.indexOf(c) > -1) x[i].classList.remove("display-none");
    }
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("team-filter-buttons-container");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function (ev) {
        for (var j = 0; j < btns.length; j++) {
            btns[j].classList.remove("active");
        }

        ev.target.classList.add("active");
    });
}
