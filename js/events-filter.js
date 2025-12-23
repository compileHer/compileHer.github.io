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
function filterSelection(buttonName, dropdownState) {
    var eventElements = document.getElementsByClassName("event-card");

    if (buttonName === "all" && dropdownState.length == 0) buttonName = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    if (dropdownState.length == 0) {
        for (var i = 0; i < eventElements.length; i++) {
            const el = eventElements[i];

            if (el.className.indexOf(buttonName) > -1) {
                el.classList.remove("display-none");
            } else {
                el.classList.add("display-none");
            }
        }
    } else {
        if (buttonName == "all") buttonName = "";

        for (var i = 0; i < eventElements.length; i++) {
            const el = eventElements[i];

            el.classList.add("display-none");

            if (el.className.indexOf(buttonName) > -1) {
                dropdownState.forEach((dropdownFilter) => {
                    if (el.className.indexOf(dropdownFilter) > -1) {
                        el.classList.remove("display-none");
                    }
                });
            }
        }
    }
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("events-container");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[1].className = current[1].className.replace(" active", "");
        this.className += " active";
    });
}
