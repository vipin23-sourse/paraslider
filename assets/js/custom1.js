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
    $.fn.fullpage.setAutoScrolling(false);
    document.body.style.overflowY = 'hidden';
    return;
  }

  ;

  function removePopup() {
    $.fn.fullpage.setAutoScrolling(true);
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
  });
  $(".close-btnmap").click(function () {
    $('.popup-slide-4').removeClass('popupVisible');
  });
  $('.support-btn').click(function () {
    $('.popup-slide-1').removeClass('popupVisible');
    removePopup();
    $('.popup-slide-5').addClass('popupVisible');
    addPopup();
  });
  $('.btn-feedback').click(function () {
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
  window.addEventListener('mouseup', function (event) {
    var pol = document.getElementById('login');
    var pol1 = document.getElementById('createAccount');

    if (event.target != pol && event.target.parentNode != pol) {
      pol.style.display = 'none';
      $.fn.fullpage.setAutoScrolling(true);
    }

    if (event.target != pol1 && event.target.parentNode != pol1) {
      pol1.style.display = 'none';
      $.fn.fullpage.setAutoScrolling(true);
    }
  }); // drag and drop image

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