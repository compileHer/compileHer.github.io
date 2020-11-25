//Get the button:
mybutton = document.getElementById("missionBtn");

// When the user clicks on the button, scroll to the top of the document
function missionFunction() {
    $('html, body').animate({scrollTop:$('#mission').position().top-135}, 'slow');
}