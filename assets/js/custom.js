"use strict";

$(document).ready(function () {
  $('#fullpage').fullpage({
    dragAndMove: true,
    slidesNavigation: true,
    slidesNavPosition: 'right',
    controlArrows: false,
    menu: '#menu',
    anchors: ['secondSection', 'thirdSection', 'fourthSection', 'fifthSection']
  });
  $(".skipVideo").on('click', function () {
    $.fn.fullpage.moveTo(2);
  });
});