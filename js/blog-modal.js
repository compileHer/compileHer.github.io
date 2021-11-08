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
}