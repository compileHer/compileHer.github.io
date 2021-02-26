var img;
var imgArray = new Array();
var i = 0;

var index = 0;
var index2 = 1;
var index3 = 2;

var itin = "true";

// var folder;

$("#exampleModal").on("show.bs.modal", function (event) {
  var button = $(event.relatedTarget); // Button that triggered the modal
  var recipient = button.data("name");
  var sub_title = button.data("subtitle");
  var logo = button.data("logo");
  var folder = button.data("folder");
  itin = button.data("itinerary");
  //get other values using .find..
  var description = button.find(".event-info").text();
  var date = button.find(".events-date p").text();
  var place = button.find(".events-place p").text();
  console.log(itin);
  console.log(folder);
  var modal = $(this);
  revealItinerary();
  modal.find(".modal-header-img").attr("src", folder+"/1.jpg");
  modal.find(".modal-img").attr("src", logo);
  modal.find(".modal-title").text(recipient);
  modal.find(".modal-subtitle").text(sub_title);
  modal.find(".modal-blurb").text(description);
  modal.find(".modal-itinerary-img").attr("src", folder+"/schedule.png");
  modal.find(".modal-events-date p").text(date);
  modal.find(".modal-events-place p").text(place);

  var bCheckEnabled = true;
  var bFinishCheck = false;

  imgArray = new Array();
  i = 1;

  var myInterval = setInterval(loadImage, 1);

  function loadImage() {
    // console.log(i);
    // console.log(bCheckEnabled);
    if (bFinishCheck) {
      clearInterval(myInterval);
      // alert("Loaded " + i + " image(s)!)");
      // console.log(imgArray);
      // addImage(imgArray);
      index = 0;  
      index2 = 1;
      index3 = 2;
      show_image("right");
      return;
    }

    if (bCheckEnabled) {
      bCheckEnabled = false;

      img = new Image();
      img.onload = fExists;
      img.onerror = fDoesntExist;
      img.src = folder + "/" + i + ".jpg";
      // img.classList.add("modal-gallery-img");
    }
  }

  function fExists() {
    imgArray.push(img);
    i++;
    bCheckEnabled = true;
  }

  function fDoesntExist() {
    bFinishCheck = true;
  }

  $.ajax({
    url: folder,
    success: function (data) {
      $(data)
        .find("a")
        .attr("href", function (i, val) {
          if (val.match(/\.(jpe?g|png|gif)$/)) {
            $("body").append("<img src='" + folder + val + "'>");
          }
        });
    },
  });
});

console.log(imgArray)

var the_image = document.getElementById("main-image1");
var the_image2 = document.getElementById("main-image2");
var the_image3 = document.getElementById("main-image3");
the_image.src = imgArray[index];
the_image2.src = imgArray[index2];
the_image3.src = imgArray[index3];

function show_image(direction) {
  if (direction == "left") {
    index--;
    index2--;
    index3--;
  } else {
    index++;
    index2++;
    index3++;
    index %= imgArray.length;
    index2 %= imgArray.length;
    index3 %= imgArray.length;
  }

  if (index < 0) {
    index = imgArray.length - 1;
  }
  if (index2 < 0) {
    index2 = imgArray.length - 1;
  }
  if (index3 < 0) {
    index3 = imgArray.length - 1;
  }
  console.log(index);
  console.log(index2);
  console.log(index3);
  the_image.src = imgArray[index].src;
  the_image2.src = imgArray[index2].src;
  the_image3.src = imgArray[index3].src;
}

function revealImg() {
  var x = document.getElementById('modal-itinerary-img');
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function revealItinerary(){
  console.log(itin);
  var x = document.getElementById("modal-itinerary");
  if (itin == true) {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


let interstellher = new Event(
  "interstellHer",
  "2021 Hackathon",
  "hackathon",
  ["img/logos/interstellher.png"],
  "The &ltinterstell/her&gt hackathon is an 8-hour event taking place \
    over the course of two days on Saturday, February 6th and Sunday, \
    February 7th which is intended to help middle school girls understand \
    the impact they can make on the world by combining creative thinking with \
    technology. The goal of this event is to have our attendees design a \
    mobile application that accomplishes a simple, yet empowering goal: to help \
    us explore 'interstellher' space. All students will have the opportunity to \
    work in teams to design a product and present their creation in front of \
    University of Chicago professors at the end of the day. We hope that each and \
    every one of our hackers will leave the event feeling confident in \
    their ability to better the communities they are a part of.\
    Registration is open to all 6th-8th grade middle school students\
    who identify as female or gender non-binary in the Chicagoland area.",
  "February 6-7, 2021",
  "Virtual over Zoom"
);
