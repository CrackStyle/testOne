$(function () {
  var mixer = mixitup('.directions__list');

  $('.directions__filter-btn').on('click', function (){
  $('.directions__filter-btn').removeClass('directions__filter-btn--active')
  $(this).addClass('directions__filter-btn--active')
})

$('.team__slider').slick({
    arrows: false,
    slidesToShow: 4,
    infinite: true,
    draggable: false,
    waitForAnimate: false,
    responsive:
    [
    {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
        },
      },
      {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        draggable: true,
        dots: true,
      }
    },
  ],
})
$('.team__slider-prev').on('click', function (e) {
  e.preventDefault()
  $('.team__slider').slick('slickPrev')
})
$('.team__slider-next').on('click', function(e) {
  e.preventDefault()
  $('.team__slider').slick('slickNext')
})


$('.testimonials__slider').slick({
  arrows: false,
  dots: true,
  appendDots: $('.testimonials__dots'),
  waitForAnimate: false,
})
$('.testimonials__prev').on('click', function (i) {
  i.preventDefault()
  $('.testimonials__slider').slick('slickPrev')
})
$('.testimonials__next').on('click', function (i) {
  i.preventDefault()
  $('.testimonials__slider').slick('slickNext')
})

$('.course__lessons').on('click', function(e){
  e.preventDefault()
  if ($(this).hasClass('course__lessons--active')) {
    $(this).removeClass('course__lessons--active')
    $(this).children('.course__lesson-text').slideUp()
  } else {
    $('.course__lessons').removeClass('course__lessons--active')
    $('.course__lesson-text').slideUp()
    $(this).addClass('course__lessons--active')
    $(this).children('.course__lesson-text').slideDown()
  }
})

$(".header__nav-list a, .header__top-btn, .footer__go-top").on("click", function (e) {
  e.preventDefault()
  var id = $(this).attr('href'),
    top = $(id).offset().top
  $('body,html').animate({ scrollTop: top }, 800)
})

setInterval(() => {
  if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
    $('.burger').addClass('burger--follow')
  } else {
    $('.burger').removeClass('burger--follow')
  }
}, 0)
$('.burger, .overlay, .header__top a').on('click', function (e) {
  e.preventDefault()
  $('.header__top').toggleClass('header__top--open')
  $('.overlay').toggleClass('overlay--show')
})


})