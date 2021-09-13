"use strict";

$(document).ready(function () {
  $('#fullpage').fullpage({
    navigation: false,
    navigationPosition: 'right',
    dragAndMove: true,
    // navigationTooltips: ['section1', 'section2','section3','section4',],1
    showActiveTooltip: true,
    slidesNavigation: true,
    slidesNavPosition: 'bottom',
    controlArrows: false
  });
});