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
  $(".set > a").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).siblings(".content").slideUp(200);
      $(".set > a > span:last-child").removeClass("minus-icon").addClass("plus-icon");
    } else {
      $(".set > a > span:last-child").removeClass("minus-icon").addClass("plus-icon");
      $(this).find("span:last-child").removeClass("plus-icon").addClass("minus-icon");
      $(".set > a").removeClass("active");
      $(this).addClass("active");
      $(".content").slideUp(200);
      $(this).siblings(".content").slideDown(200);
    }
  });
  $('.read-more').click(function () {
    $('.readMore-content').slideToggle();

    if ($('.read-more').text() == "Read More") {
      $(this).text("");
    } else {
      $(this).text("Read More");
    }
  });
});
$(".menu-icon").click(function () {
  $(".popup-slide").show();
});
$(".close-btn").click(function () {
  $(".popup-slide").hide();
}); // $('body').click(function(e) {
//   if (!$(e.target).closest('.popup-slide').length){
//       $(".popup-slide").hide();
//   }
// });

$(document).mouseup(function (e) {
  var popup = $("#popup");

  if (!$('#open').is(e.target) && !popup.is(e.target) && popup.has(e.target).length == 0) {
    popup.hide(500);
  }
});

function addClassAll(el, cls) {
  for (var i = 0; i < el.length; ++i) {
    if (!el[i].className.match('(?:^|\\s)' + cls + '(?!\\S)')) {
      el[i].className += ' ' + cls;
    } // if input element (.mask) does not have a class of cls (filter-mask-active) (REGEX to find a match btn other classes (or no other classes btn)).. if not there.... add the class

  }
}

function delClassAll(el, cls) {
  for (var i = 0; i < el.length; ++i) {
    el[i].className = el[i].className.replace(new RegExp('(?:^|\\s)' + cls + '(?!\\S)'), '');
  }
}

function contentFilter(filterID, filterType) {
  var id = filterID;

  document.querySelector(id + ' .filter-categories').onclick = function (evt) {
    var elem = evt.target || evt.srcElement,
        // .target --> get the element that triggered the event
    wrap = document.querySelectorAll(id + ' .filter-wrap'),
        // card container
    items = document.querySelectorAll(id + ' .filter-item'),
        // card
    inputs = document.querySelectorAll(id + ' .filter-input'),
        filters = [],
        noitem = document.querySelectorAll(id + ' .filter-no-item'),
        mask = document.querySelectorAll(id + ' .filter-mask'),
        // hide cards (covers filter wrap... when filter-mask-active (defined in CSS))
    type = filterType;
    addClassAll(mask, 'filter-mask-active'); // mask all cards, animated in CSS

    setTimeout(function () {
      delClassAll(mask, 'filter-mask-active');
    }, 1000); // create some delay (animation) when unveiling cards

    if (elem.className.match('(?:^|\\s)filter-all(?!\\S)')) {
      //  if filter-all checkbox clicked...
      for (var i = 1; i < inputs.length; ++i) {
        // loop through inputs but ignore [0] (skip 1st input in loop) - filter-all
        inputs[i].checked = false; // uncheck all  inputs (excl. filter all)
      }

      delClassAll(items, 'selected'); // remove selected class from all items 

      delClassAll(wrap, 'filtered-' + type);
      delClassAll(noitem, 'filter-no-item-active'); // make sure no-filter item message does not show (display: none)
    } else {
      // ----> another filter is checked.... -------------> WHEN A FILTER OTHER THAN ALL IS CHECKED <----------------------
      inputs[0].checked = false; // uncheck #filter-all

      for (var i = 1; i < inputs.length; ++i) {
        // loop through inputs but ignore [0] - #filter-all
        if (inputs[i].checked) {
          filters.push(inputs[i].id);
        } // add checked inputs to filters array 

      }

      delClassAll(items, 'selected'); // remove selected from all items (will display:none;)

      addClassAll(wrap, 'filtered-' + type);

      for (var i = 0; i < filters.length; ++i) {
        // LOOOPING THROUGH FILTER array
        // if there was at least one checked input (other than all...)  run the addClassAll function adds selected class to filter-items that match checked (checkbox) class
        if (filters.length > 0) {
          addClassAll(document.querySelectorAll(id + ' .filter-item.' + filters.join('.')), 'selected');
        } // build css selector from filters array (add selected class to filter items (all except show all))


        document.querySelectorAll(id + ' .selected').length == 0 ? addClassAll(noitem, 'filter-no-item-active') : delClassAll(noitem, 'filter-no-item-active'); // if no checkboxes (other than all) are checked, display no matches message
      }

      var checkCount = 0;

      for (var i = 0; i < inputs.length; ++i) {
        checkCount += inputs[i].checked ? 1 : 0; // if inputs[i].checked is true --> add 1, else add 0 
      }

      if (checkCount == 0) {
        inputs[0].checked = true;
      }

      if (inputs[0].checked) {
        delClassAll(wrap, 'filtered-' + type);
        delClassAll(noitem, 'filter-no-item-active');
      }
    }
  };
}

contentFilter('#gridCardsWithFilter', 'inclusive'); // unique wrapper id, filter type (inclusive/exclusive)

$('.slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 1000
});
$(function () {
  var top = $('#sidebar').offset().top - parseFloat($('#sidebar').css('marginTop').replace(/auto/, 0));
  var footTop = $('#footer').offset().top - parseFloat($('#footer').css('marginTop').replace(/auto/, 0));
  var maxY = footTop - $('#sidebar').outerHeight();
  $(window).scroll(function (evt) {
    var y = $(this).scrollTop();

    if (y >= top - $('#fixedHeader').height()) {
      if (y < maxY) {
        $('#sidebar').addClass('fixed').removeAttr('style');
      } else {
        $('#sidebar').removeClass('fixed').css({
          position: 'absolute',
          top: maxY - top + 'px'
        });
      }
    } else {
      $('#sidebar').removeClass('fixed');
    }
  });
});