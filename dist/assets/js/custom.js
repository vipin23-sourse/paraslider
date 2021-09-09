"use strict";

$(document).ready(function () {
  $('#fullpage').fullpage({
    navigation: true,
    navigationPosition: 'right',
    dragAndMove: true,
    navigationTooltips: ['section1', 'section2', 'section3', 'section4'],
    showActiveTooltip: true,
    slidesNavigation: true,
    slidesNavPosition: 'bottom',
    controlArrows: false
  });
});