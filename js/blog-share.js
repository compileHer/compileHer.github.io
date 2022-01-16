var share = document.getElementById("share-btn");
console.log(share);

var $url = $(location).attr('href');

function copy() {
  var urlCopied = window.location.href;
  console.log(urlCopied);
  navigator.clipboard.writeText(urlCopied);
}

function myFunction() {
  var popup = document.getElementById("myPopup");
  console.log(popup);
  popup.classList.toggle("show");
  copy();
}

function fadeOutNotification() {
  setTimeout(function () {
    console.log('hi');
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }, 2000);
}

share.addEventListener('click', fadeOutNotification);