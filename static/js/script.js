var swiper = new Swiper(".slide-content", {
  slidesPerView: 4,
  spaceBetween: 15,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
      1024: {
        slidesPerView: 3,
    },
  },
});

/*Dropdown Menu*/
$('.dropdown_case').click(function () {
  $(this).attr('tabindex', 1).focus();
  $(this).toggleClass('active');
  $(this).find('.dropdown_case-menu').slideToggle(300);
});
$('.dropdown_case').focusout(function () {
  $(this).removeClass('active');
  $(this).find('.dropdown_case-menu').slideUp(300);
});
$('.dropdown_case .dropdown_case-menu li').click(function () {
  $(this).parents('.dropdown_case').find('span').text($(this).text());
  $(this).parents('.dropdown_case').find('input').attr('value', $(this).attr('id'));
});
/*End Dropdown Menu*/


$('.dropdown_case-menu li').click(function () {
var input = '<strong>' + $(this).parents('.dropdown_case').find('input').val() + '</strong>',
msg = '<span class="msg">Hidden input value: ';
$('.msg').html(msg + input + '</span>');
}); 