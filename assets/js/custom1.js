"use strict";

$(document).ready(function () {
  $(".skipVideo").on("click", function () {
    $.fn.fullpage.moveTo(2);
  });
  $(".scroll-arrow").on("click", function () {
    $.fn.fullpage.moveTo(2);
  });
  $(".cenBtn").on("click", function () {
    $.fn.fullpage.moveTo(2);
  });
  $(".nwBtn").on("click", function () {
    $.fn.fullpage.moveTo(3);
  });
  $(".nBtn").on("click", function () {
    $.fn.fullpage.moveTo(4);
  });
  var btn = $('.bordrBtn');
  btn.click(function () {
    $(this).siblings().children('.side-nav__small-img').css('border', '0px solid #fff');
    $(this).children('.side-nav__small-img').css('border', '1px solid #fff');
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
    // $.fn.fullpage.setAutoScrolling(false);
    $.fn.fullpage.setMouseWheelScrolling(false);
    $.fn.fullpage.setAllowScrolling(false);
    return;
  }

  ;

  function removePopup() {
    $.fn.fullpage.setMouseWheelScrolling(true);
    $.fn.fullpage.setAllowScrolling(true); // $.fn.fullpage.setAutoScrolling(true);

    return;
  }

  ;
  $('.menu-icon').click(function () {
    $('.popup-slide-1 .popupC-bg').addClass('popupbg-show');
    $('.popup-slide-1 .menu').addClass('popupVisible');
    addPopup();
  });
  $(".close-btn").click(function () {
    $('.popup-slide-1 .popupC-bg').removeClass('popupbg-show');
    $('.popup-slide-1 .menu').removeClass('popupVisible');
    removePopup();
  });
  $('.icon-filter').click(function () {
    $('.popup-slide-3 .popupC-bg').addClass('popupbg-show');
    $('.popup-slide-3 .menu').addClass('popupVisible');
    addPopup();
  });
  $(".close-btn").click(function () {
    $('.popup-slide-3 .popupC-bg').removeClass('popupbg-show');
    $('.popup-slide-3 .menu').removeClass('popupVisible');
    removePopup();
  });
  $('.settings-btn').click(function () {
    $('.popup-slide-1 .popupC-bg').removeClass('popupbg-show');
    $('.popup-slide-1 .menu').removeClass('popupVisible');
    removePopup();
    $('.popup-slide-2 .popupC-bg').addClass('popupbg-show');
    $('.popup-slide-2 .menu').addClass('popupVisible');
    addPopup();
  });
  $(".close-btn").click(function () {
    $('.popup-slide-2 .popupC-bg').removeClass('popupbg-show');
    $('.popup-slide-2 .menu').removeClass('popupVisible');
    removePopup();
  });
  $('.mapBtn').click(function () {
    $('.popup-slide-4 .menu').addClass('popupVisible');
    addPopup();
  });
  $(".close-btnmap").click(function () {
    $('.popup-slide-4 .menu').removeClass('popupVisible');
    removePopup();
  });
  $('.support-btn').click(function () {
    $('.popup-slide-1 .popupC-bg').removeClass('popupbg-show');
    $('.popup-slide-1 .menu').removeClass('popupVisible');
    removePopup();
    $('.popup-slide-5 .popupC-bg').addClass('popupbg-show');
    $('.popup-slide-5 .menu').addClass('popupVisible');
    addPopup();
  });
  $('.btn-feedback').click(function () {
    $('.popup-slide-5').addClass('popupbg-show');
    $('.popup-slide-5 .menu').addClass('popupVisible');
    addPopup();
  });
  $(".close-btn").click(function () {
    $('.popup-slide-5 .popupC-bg').removeClass('popupbg-show');
    $('.popup-slide-5 .menu').removeClass('popupVisible');
    removePopup();
  });
  $(".log-btn").click(function () {
    $('.popup-slide-1 .popupC-bg').removeClass('popupbg-show');
    $('.popup-slide-1 .menu').removeClass('popupVisible');
    $("#login").show();
    $("#createAccount").hide();
 
    document.body.style.marginInlineEnd = '0';
    document.querySelector('header').style.width = '100%';
  });
  $(".sign-up-btn").click(function () {
    $("#login").hide();
    $("#createAccount").show();
 
    document.body.style.marginInlineEnd = '0';
    document.querySelector('header').style.width = '100%';
  });
  $(".place-item").click(function () {
    $(".list-wrap__end").show();
  });
  $('.place-item').click(function () {
    $('.list-wrap__end').addClass('animation-left');
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
/*
  $(document).mouseup(function (e) {
    var container = $("#login");
    var container1 = $("#createAccount"); // if the target of the click isn't the container nor a descendant of the container

    if (!container.is(e.target) && container.has(e.target).length === 0) {
      container.hide();
      removePopup();
    }

    if (!container1.is(e.target) && container1.has(e.target).length === 0) {
      container1.hide();
      removePopup();
    }
   
  });
  */
/*
  function loginClick1() {
    if (document.querySelector('#login').style.display === 'block' || document.querySelector('#createAccount').style.display === 'block') {
      $.fn.fullpage.setMouseWheelScrolling(false);
      $.fn.fullpage.setAllowScrolling(false);
    } else {
      $.fn.fullpage.setMouseWheelScrolling(true);
      $.fn.fullpage.setAllowScrolling(true);
    }
  }
*/
  ; // window.addEventListener('mouseup', function (event) {
  //   var pol = document.getElementById('login');
  //   var pol1 = document.getElementById('createAccount');
  //   if (event.target != pol && event.target.parentNode != pol) {
  //     pol.style.display = 'none';
  //     $.fn.fullpage.setAutoScrolling(true);
  //   }
  //   if (event.target != pol1 && event.target.parentNode != pol1) {
  //     pol1.style.display = 'none';
  //     $.fn.fullpage.setAutoScrolling(true);
  //   }
  // }); // drag and drop image

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
});