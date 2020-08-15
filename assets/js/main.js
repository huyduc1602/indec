// fixed menu top: 
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("header_menu");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
// end fixed

$(function() {

    "use strict";
    
    //===== Prealoder
    
    $(window).on('load', function(event) {
        $('#preloader').delay(500).fadeOut(500);
    });
    
    
    //===== Sticky
    
    $(window).on('scroll', function(event) {    
        var scroll = $(window).scrollTop();
        if (scroll < 110) {
            $(".navigation").removeClass("sticky");
        } else{
            $(".navigation").addClass("sticky");
        }
    });
    
    //===== Search
    
    $('#search').on('click', function(event) {    
        $(".search_bar").slideToggle(500);
    });
    
    
    //===== Mobile Menu
    
    $(".navbar-toggler").on('click', function() {
        $(this).toggleClass("active");
    });
    
    var subMenu = $('.sub-menu-bar .navbar-nav .sub-menu');
    
    if(subMenu.length) {
        subMenu.parent('li').children('a').append(function () {
            return '<button class="sub-nav-toggler"> <span></span> </button>';
        });
        
        var subMenuToggler = $('.sub-menu-bar .navbar-nav .sub-nav-toggler');
        
        subMenuToggler.on('click', function() {
            $(this).parent().parent().children('.sub-menu').slideToggle();
            return false
        });
        
    }
        
    function mainSlider() {
        var BasicSlider = $('.slider-active');
        BasicSlider.on('init', function (e, slick) {
            var $firstAnimatingElements = $('.single_slider:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.single_slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        BasicSlider.slick({
            autoplay: true,
            autoplaySpeed: 10000,
            dots: false,
            fade: true,
            arrows: true,
            prevArrow: '<span class="prev"><i class="fa fa-angle-left"></i></span>',
            nextArrow: '<span class="next"><i class="fa fa-angle-right"></i></span>',
            responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false
                }
            }
            ]
        });

        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function () {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function () {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    mainSlider();
    
    
    //===== Counter Up
    
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });
    
    
    //====== Slick Testimonial
    
    $('.testimonial_items').slick({
        dots: true,
        dotClass: 'slick-dots',
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        adaptiveHeight: true,
    });
    
    //===== Slick Slider
    $('#slick-content').not('.slick-initialized').slick({
        arrows: true,
        infinite: true,
        dots:false,
        pauseOnHover: true,
        Swipe: true,
        speed:800,
        autoplay:true,
        autoplaySpeed :3000,
        slidesToShow: 1,
        prevArrow: '<span class="prev"><i class="fa fa-angle-left"></i></span>',
        nextArrow: '<span class="next"><i class="fa fa-angle-right"></i></span>'
    });
     //===== Slick Slider chương trình
    $('#slick-program').not('.slick-initialized').slick({
        arrows: true,
        infinite: true,
        dots:false,
        pauseOnHover: true,
        Swipe: true,
        speed:800,
        autoplay:true,
        autoplaySpeed :3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<span class="prev"><i class="fa fa-angle-left"></i></span>',
        nextArrow: '<span class="next"><i class="fa fa-angle-right"></i></span>'
    });
    //===== Slick Slider Đối tác
    $('#slider-doi-tac').not('.slick-initialized').slick({
        dots: false,
        arrows:false,
       infinite: false,
       speed: 300,
       slidesToShow: 5,
       slidesToScroll: 5,
       autoplay: true,
       autoplaySpeed: 1000,
       responsive: [
       {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
        }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
    }
},
{
  breakpoint: 480,
  settings: {
    slidesToShow: 1,
    slidesToScroll: 1
}
}
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
});
    
    //====== Slick Testimonial 
    
    $('.testimonial_items_2').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        adaptiveHeight: true,
    });
    
    
    //====== Count Down
    
    $('[data-countdown]').each(function() {
      var $this = $(this), finalDate = $(this).data('countdown');
      $this.countdown(finalDate, function(event) {
        $this.html(event.strftime('<div class="register_countdown d-flex flex-wrap"><div class="single_countdown"><div class="countdown_wrapper"><span class="count">%D</span><p>Days</p></div></div><div class="single_countdown"><div class="countdown_wrapper"><span class="count">%H</span><p>Days</p></div></div><div class="single_countdown"><div class="countdown_wrapper"><span class="count">%M</span><p>Days</p></div></div><div class="single_countdown"><div class="countdown_wrapper"><span class="count">%S</span><p>Days</p></div></div></div>'));
    });
  });
    
    
    //====== slick Testimonial
    
    $('.testimonial_content_active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        speed: 800,
        asNavFor: '.testimonial_author_active',
    });
    $('.testimonial_author_active').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.testimonial_content_active',
        arrows: false,
        dots: false,
        speed: 800,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '0',
        responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
        }
    },
    ]
});
    
    
    //====== slick Event
    
    $('.event_active_3').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.testimonial_content_active',
        arrows: false,
        dots: false,
        speed: 800,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '0',
        responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
        }
    },
    ]
});
    

    
    //====== slick Testimonial
    
    $('.testimonial_content_active_3').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        speed: 800,
        asNavFor: '.testimonial_author_active_3',
    });
    $('.testimonial_author_active_3').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.testimonial_content_active_3',
        arrows: false,
        dots: false,
        speed: 800,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '0',
    });
    
    
    
    ///===== Progress Bar

    if ($('.progress_line').length) {
        $('.progress_line').appear(function () {
            var el = $(this);
            var percent = el.data('width');
            $(el).css('width', percent + '%');
        }, {
            accY: 0
        });
    }
    
    
    //====== Magnific Popup
    
    $('.video-popup').magnificPopup({
        type: 'iframe'
        // other options
    });
    
    
    //===== Magnific Popup
    
    $('.image-popup').magnificPopup({
      type: 'image',
      gallery:{
        enabled:true
    }
});
    
    
    //===== Nice Select
    
    $('select').niceSelect();
    
    
    
    //===== Back to top
    
    // Show or hide the sticky footer button
    $(window).on('scroll', function(event) {
        if($(this).scrollTop() > 600){
            $('.back-to-top').fadeIn(200)
        } else{
            $('.back-to-top').fadeOut(200)
        }
    });
    
    
    //Animate the scroll to yop
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });
    //===== 
});

// <!-- Application Form Validation Start-->
  $("#reservation_form").validate({
    submitHandler: function(form) {
      var form_btn = $(form).find('button[type="submit"]');
      var form_result_div = '#form-result';
      $(form_result_div).remove();
      form_btn.before('&amp;lt;div id="form-result" class="alert alert-success" role="alert" style="display: none;"&amp;gt;&amp;lt;/div&amp;gt;');
      var form_btn_old_msg = form_btn.html();
      form_btn.html(form_btn.prop('disabled', true).data("loading-text"));
      $(form).ajaxSubmit({
        dataType:  'json',
        success: function(data) {
          if( data.status == 'true' ) {
            $(form).find('.form-control').val('');
        }
        form_btn.prop('disabled', false).html(form_btn_old_msg);
        $(form_result_div).html(data.message).fadeIn('slow');
        setTimeout(function(){ $(form_result_div).fadeOut('slow') }, 6000);
    }
});
  }
});
// <!-- Application Form Validation Start -->