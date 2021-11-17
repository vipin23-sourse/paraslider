"use strict";

$(document).ready(function () {
  /*
  $("#fullpage").fullpage({
    navigation: true,
    dragAndMove: true,
    slidesNavigation: true,
    slidesNavPosition: "right",
    // sectionSelector: ".vertical-scrolling",
    slideSelector: ".horizontal-scrolling",
    controlArrows: false,
    // anchors: ["secondSection", "thirdSection", "fourthSection", "fifthSection"],
    navigationTooltips: ['', 'Central', 'North West', 'North', 'East', 'South West', 'South', 'South'],
  menu: "#menu",
  });
  */
  // fullpage customization
  // $("#fullpage-detail").fullpage({
  //   sectionsColor: ["#B8AE9C", "#348899", "#F2AE72", "#5C832F", "#B8B89F"],
  //   sectionSelector: ".vertical-scrolling",
  //   slideSelector: ".horizontal-scrolling",
  //   navigation: true,
  //   slidesNavigation: true,
  //   controlArrows: false,
  //   anchors: [
  //     "firstSection",
  //     "secondSection",
  //     "thirdSection",
  //     "fourthSection",
  //     "fifthSection",
  //   ],
  //   menu: "#menu",
  // });
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
  $('.slider-1').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1000
  });
  $('.slider-2').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1000
  });
  $('.radio-scroll').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    arrows: false,
    slidesToScroll: 4,
    autoplay: false,
    variableWidth: true
  });
  $('.select-drop').select2({
    minimumResultsForSearch: -1
  });

  function addPopup() {
    document.body.style.overflowY = 'hidden';

    function checkPosition() {
      if (window.matchMedia('(max-width: 767px)').matches) {} else {
        document.body.style.marginInlineEnd = '10px';
        document.querySelector('header').style.width = 'calc(100% - 10px)';
      }
    }

    checkPosition();
    return;
  }

  ;

  function removePopup() {
    document.body.style.overflowY = 'auto'; // document.querySelector('.home-page .detail-page').style.overflowY = 'hidden';

    function checkPosition() {
      if (window.matchMedia('(max-width: 767px)').matches) {} else {
        document.body.style.marginInlineEnd = '0';
        document.querySelector('header').style.width = '100%';
      }
    }

    checkPosition();
    return;
  }

  ;
  $('.menu-icon').click(function () {
    $('.popup-slide-1').addClass('popupVisible');
    addPopup();
  });
  $(".close-btn").click(function () {
    $('.popup-slide-1').removeClass('popupVisible');
    removePopup();
  });
  $('.icon-filter').click(function () {
    $('.popup-slide-3').addClass('popupVisible');
    addPopup();
  });
  $(".close-btn").click(function () {
    $('.popup-slide-3').removeClass('popupVisible');
    removePopup();
  });
  $('.settings-btn').click(function () {
    $('.popup-slide-1').removeClass('popupVisible');
    removePopup();
    $('.popup-slide-2').addClass('popupVisible');
    addPopup();
  });
  $(".close-btn").click(function () {
    $('.popup-slide-2').removeClass('popupVisible');
    removePopup();
  });
  $('.mapBtn').click(function () {
    $('.popup-slide-4').addClass('popupVisible');
    addPopup();
  });
  $(".close-btnmap").click(function () {
    $('.popup-slide-4').removeClass('popupVisible');
    removePopup();
  });
  $('.support-btn').click(function () {
    $('.popup-slide-1').removeClass('popupVisible');
    removePopup();
    $('.popup-slide-5').addClass('popupVisible');
    addPopup();
  });
  $(".close-btn").click(function () {
    $('.popup-slide-5').removeClass('popupVisible');
    removePopup();
  });
  $(".log-btn").click(function () {
    $('.popup-slide-1').removeClass('popupVisible');
    $("#login").show();
    addPopup();
  });
  $(".sign-up-btn").click(function () {
    $("#login").hide();
    removePopup();
    $("#createAccount").show();
    addPopup();
  });
  $(".place-item").click(function () {
    $(".list-wrap__end").show();
  });
  $('.place-item').click(function () {
    $('.list-wrap__end').addClass('animation-left');
  });
  $('.d-noneBtn').click(function () {
    $('.list-wrap__end').removeClass('animation-left');
  });
  $('.shareBtn').click(function () {
    $('.pop-up-notification-detail0').addClass('visible-notification');
    addPopup();
  });
  $('.shareBtnScr').click(function () {
    $('.pop-up-notification-detail0').addClass('visible-notification');
    removePopup();
  });
  $('.close-notf').click(function () {
    $('.pop-up-notification-detail0').removeClass('visible-notification');
    removePopup();
  });
  var search = document.querySelector(".search");
  var btnSearch = document.querySelector(".search .btn");
  var input = document.querySelector(".search .input");
  btnSearch.addEventListener('click', function () {
    search.classList.toggle('active');
    input.focus();
  });
});
window.addEventListener('mouseup', function (event) {
  var pol = document.getElementById('login');
  var pol1 = document.getElementById('createAccount');

  if (event.target != pol && event.target.parentNode != pol) {
    pol.style.display = 'none';
    document.body.style.overflowY = 'auto';
  }

  if (event.target != pol1 && event.target.parentNode != pol1) {
    pol1.style.display = 'none';
    document.body.style.overflowY = 'auto';
  }
});
var playBtn = document.querySelector('.play-btn'); //PLAYER FUNCTIONS

function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }

  playBtn.classList.toggle('paused');
}

function togglePlayBtn() {
  playBtn.classList.toggle('playing');
} // //EVENT LISTENERS
// // playBtn.addEventListener('click', togglePlay);
// video.addEventListener('click', togglePlay);
// video.addEventListener('play', togglePlayBtn);
// video.addEventListener('pause', togglePlayBtn);
// video.addEventListener('ended', togglePlayBtn);
// video.addEventListener('timeupdate', updateProgress);
// video.addEventListener('canplay', updateProgress);
// volumeBtn.addEventListener('click', toggleMute);
// window.addEventListener('mousedown', () => isMouseDown = true)
// window.addEventListener('mouseup', () => isMouseDown = false)
// // volumeSlider.addEventListener('mouseover', changeVolume);
// volumeSlider.addEventListener('click', changeVolume);
// progressSlider.addEventListener('click', setProgress);
// fullscreenBtn.addEventListener('click', toggleFullscreen);
// speedBtns.forEach(speedBtn => {
// 	speedBtn.addEventListener('click', setSpeed);
// })
// window.addEventListener('keydown', handleKeypress);
// $(".close-btn").click(function () {
//   $(".popup-slide-1").hide();
// });
// $('body').click(function(e) {
//   if (!$(e.target).closest('.popup-slide').length){
//       $(".popup-slide").hide();
//   }
// });
// $(document).mouseup(function (e) {
//   var popup = $("#popup");
//   if (!$('#open').is(e.target) && !popup.is(e.target) && popup.has(e.target).length == 0) {
//       popup.hide(500);
//   }
// });
// drag and drop image


var $fileInput = $('.file-input');
var $droparea = $('.file-drop-area'); // highlight drag area

$fileInput.on('dragenter focus click', function () {
  $droparea.addClass('is-active');
}); // back to normal state

$fileInput.on('dragleave blur drop', function () {
  $droparea.removeClass('is-active');
}); // change inner text

$fileInput.on('change', function () {
  var filesCount = $(this)[0].files.length;
  var $textContainer = $(this).prev();

  if (filesCount === 1) {
    // if single file is selected, show file name
    var fileName = $(this).val().split('\\').pop();
    $textContainer.text(fileName);
  } else {
    // otherwise show number of files
    $textContainer.text(filesCount + ' files selected');
  }
}); // drag and drop image end

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
// $(document).ready(function () {
//   $('.filter-categories').slick({
//     dots: false,
//     infinite: false,
//     speed: 300,
//     slidesToShow: 4,
//     arrows: false,
//     slidesToScroll:4,
//     autoplay: false,
//     variableWidth:true,
//   });
// });
//js slider