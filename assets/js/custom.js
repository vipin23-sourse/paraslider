"use strict";

$(document).ready(function () {
  $("#fullpage").fullpage({
    dragAndMove: true,
    slidesNavigation: true,
    slidesNavPosition: "right",
    controlArrows: false,
    menu: "#menu",
    anchors: ["secondSection", "thirdSection", "fourthSection", "fifthSection"]
  });
  $(".skipVideo").on("click", function () {
    $.fn.fullpage.moveTo(2);
  }); // fullpage customization

  $("#fullpage-detail").fullpage({
    sectionsColor: ["#B8AE9C", "#348899", "#F2AE72", "#5C832F", "#B8B89F"],
    sectionSelector: ".vertical-scrolling",
    slideSelector: ".horizontal-scrolling",
    navigation: true,
    slidesNavigation: true,
    controlArrows: false,
    anchors: ["firstSection", "secondSection", "thirdSection", "fourthSection", "fifthSection"],
    menu: "#menu"
  });
});
$('.read-more').click(function () {
  $('.readMore-content').slideToggle();

  if ($('.read-more').text() == "Read More") {
    $(this).text("");
  } else {
    $(this).text("Read More");
  }
});