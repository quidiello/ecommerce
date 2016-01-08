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
  $('nav').parent().remove("tablet");
  $('nav').parent().addClass("mobile");
  if (!$('.menu').length) {
    var $menu = $('<div class="menu"><i class="fa fa-align-justify"></i></div>');
    $menu.prependTo($('header'));
    $('nav').css({
      display: "none"
    });
  }
}

function tablet() {
  $('nav').parent().remove("mobile");
  $('nav').parent().addClass("tablet");
  if (!$('.menu').length) {
    var $menu = $('<div class="menu"><i class="fa fa-align-justify"></i></div>');
    $menu.prependTo($('header'));
    $('nav').css({
      display: "none"
    });
  }
}

function computer() {
  $('nav').parent().removeClass("tablet mobile");
  $('nav').css({
    display: "block"
  });
  if ($('.menu').length) {
    $('.menu').remove();
    menu = false;
  }
}
