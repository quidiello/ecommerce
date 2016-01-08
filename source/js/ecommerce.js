var MOBILE_WIDHT = 480;
var TABLET_WIDHT = 768;
var menu = false;

$(document).on('click', '.menu i', function() {
  if (menu === false) {
    $('nav').css({
      display: "block"
    });
    menu = true;
  } else {
    $('nav').css({
      display: "none"
    });
    menu = false;
  }
});

$(function() {
  if($(window).width() <= MOBILE_WIDHT) {
    mobile();
  }
  else if($(window).width() <= TABLET_WIDHT) {
    tablet();
  }
  else {
    computer();
  }

  $(window).on('resize', function() {
    if($(window).width() <= MOBILE_WIDHT) {
      mobile();
    }
    else if($(window).width() <= TABLET_WIDHT) {
      tablet();
    }
    else {
      computer();
    }
  });

});

function mobile() {
  $('nav').parent().css({
    padding: 0
  });
  if (!$('.menu').length) {
    var $menu = $('<div class="menu"><i class="fa fa-align-justify"></i></div>');
    $menu.prependTo($('header'));
  }
}

function tablet() {
  $('nav').parent().css({
    padding: 0
  });
  if (!$('.menu').length) {
    var $menu = $('<div class="menu"><i class="fa fa-align-justify"></i></div>');
    $menu.prependTo($('header'));
  }
}

function computer() {
  if ($('.menu').length) {
    $('.menu').remove();
  }
}
