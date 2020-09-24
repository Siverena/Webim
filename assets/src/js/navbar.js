"use strict";
(function() {

  var btnOpen = document.querySelector(".nav-btn--open");
  var btnClose = document.querySelector(".nav-btn--close");
  var navBody = document.querySelector(".page-header__nav");



  var navOpen = function(evt) {
    navBody.classList.toggle("nav-show");
    document.addEventListener('keydown', navClose);
  }
  var navClose = function(evt) {
    navBody.classList.toggle("nav-show");
    if (evt.keycode == 27 && navBody.classList.contains("nav-show")) {
      navClose();
      document.removeEventListener('keydown');
    }
    document.removeEventListener('keydown');
  }

  btnOpen.addEventListener('click', navOpen);
  btnClose.addEventListener('click', navClose);


})();