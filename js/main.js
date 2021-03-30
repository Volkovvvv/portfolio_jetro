$(function(){


    $('.slider__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow:'<button class="slick-arrow slick-prev"><img src="images/arrows/left-arrow.svg" alt=""></button>',
        nextArrow:'<button class="slick-arrow slick-next"><img src="images/arrows/right-arrow.svg" alt=""></button>',
        fade: true,
        asNavFor: '.slider__nav'
      });
      $('.slider__nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider__inner',
        dots: false,
        arrows:false,
        variableWidth:true,
        centerMode: false,
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 911,
            settings: {
              slidesToShow: 5,
            }
          },
        
      ]
        
      });
  $('.header__menu-btn').on('click',function(){
    $('.header__menu ul').slideToggle();
  });

  });