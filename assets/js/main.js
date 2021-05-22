/**
* Template Name: Restaurantly - v1.2.1
* Template URL: https://bootstrapmade.com/restaurantly-restaurant-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  // Preloader
  $(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });

  // Smooth scroll for the navigation menu and links with .scrollto classes
  var scrolltoOffset = $('#header').outerHeight() - 1;
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();

        var scrollto = target.offset().top - scrolltoOffset;

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('.mobile-nav').prepend('<button type="button" class="mobile-nav-close"><i class="icofont-close"></i></button>');
    $('#header').append('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav-close', function(e) {
      $('body').removeClass('mobile-nav-active');
      $('.mobile-nav-overly').fadeOut();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
      $('#topbar').addClass('topbar-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
      $('#topbar').removeClass('topbar-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
    $('#topbar').addClass('topbar-scrolled');
  }

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, .mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass('active');
      }
    });
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Menu list isotope and filter
  $(window).on('load', function() {
    var menuIsotope = $('.menu-container').isotope({
      itemSelector: '.menu-item',
      layoutMode: 'fitRows'
    });

    $('#menu-flters li').on('click', function() {
      $("#menu-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      menuIsotope.isotope({
        filter: $(this).data('filter')
      });
      aos_init();
    });
  });

  // Events carousel (uses the Owl Carousel library)
  $(".events-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    autoplayTimeout: 6000,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 3
      }
    }
  });

  // Initiate venobox lightbox
  $(document).ready(function() {
    $('.venobox').venobox();
  });

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
  $(window).on('load', function() {
    aos_init();
  });

})(jQuery);

function capitalize_inputs(str) { //function to capitalize inputs
  return str.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

function placeOrder() { //function for placing an order
  //get inputs from form
  var name = capitalize_inputs($("input#name").val());
  var flavor = $("#pizza-flavor").val();
  var size = $("#pizza-size").val();
  var crust = $("#pizza-crust").val();
  var toppings = [];
  $.each($('input[name="toppings"]:checked'),
      function() {
          toppings.push($(this).val());
      });
  var number = $("#pizza-number").val();
  var sizeCost; //set different prices for the different pizza flavors depending on their size
  if (flavor === "Barbeque Beef Pizza" || flavor === "Barbeque Chicken Pizza" || flavor === "Barbeque Pork Pizza" || flavor === "Chicken Tikka Pizza") {
      if (size === "Small") {
          sizeCost = 400;
      } else if (size === "Medium") {
          sizeCost = 650;
      } else if (size === "Large") {
          sizeCost = 900;
      }
  } else if (flavor === "Hawaiian Pizza" || flavor === "Margharita Pizza" || flavor === "Mushroom Pizza" || flavor === "Veggi Pizza" || flavor === "Pulled Pork Pizza") {
      if (size === "Small") {
          sizeCost = 450;
      } else if (size === "Medium") {
          sizeCost = 700;
      } else if (size === "Large") {
          sizeCost = 950;
      }
  } 
  var crustCost; //set prices for different crust types
  if (crust === "Gluten Free") {
      crustCost = 230;
  } else if (crust === "Hand Tossed") {
      crustCost = 200;
  } else if (crust === "Original") {
      crustCost = 150;
  } else if (crust === "Pan") {
      crustCost = 180;
  } else if (crust === "Stuffed") {
      crustCost = 250;
  } else if (crust === "Thin") {
      crustCost = 100;
  }
  var checkboxes = $('input[name="toppings"]:checked').length; //get number of checkboxes checked
  if (checkboxes <= 3) { //limit number of checkboxes allowed to not more than 3
      if (size === "Small") {
          var toppingsCost = checkboxes * 70;
      } else if (size === "Medium") {
          var toppingsCost = checkboxes * 100;
      } else if (size === "Large") {
          var toppingsCost = checkboxes * 130;
      }
      $("input[type='checkbox']:not(:checked)").prop({ //disable unchecked boxes
          disabled: true
      });
      $('#placeorder').prop('disabled', true); //deactivate button after order is made to prevent client from changing order once the order is placed
      $("#yourorder").show();
      var price = (sizeCost + crustCost + toppingsCost);
      var totalPrice = parseInt(price * number);
      $(".salutation").text("Hey" + " " + name + ". Here's your order:");
      $(".pizza-size").append('<tr><td id="pizza-size">' + size);
      $(".number").append('<tr><td id="number">' + number);
      $(".pizza-crust").append('<tr><td id="pizza-crust">' + crust);
      $(".pizza-flavor").append('<tr><td id="pizza-flavor">' + flavor);
      $(".pizzaTotal1").append('<tr><td id="pizzaTotal1">' + totalPrice);
      arrayTotal.push(totalPrice); //create an array for all total prices
      if (toppings == "") {
          $(".toppings").append('<tr><td id="pizza-toppings">' + "-");
      }
      if (toppings != "") {
          $(".toppings").append('<tr><td id="pizza-toppings">' + toppings);
      }
      $(".name").text(name);
  } else {
      document.getElementById("pizza-toppings-help").innerHTML = "Please select a maximum of 3!";
      document.getElementById("pizza-toppings-help").style.cssText = 'color:red !important' //overrides previous color styling
  }
}

function makeDelivery() {
  $("#deliveryConfirmation").show();
  var location = capitalize_inputs($("input#location").val()); //get delivery details
  var phone = $("input#phone").val();
  $(".location").text(location);
  $(".phone").text(phone);
  $("#delivery").hide();
}

$(document).ready(function() {
  $("#orders").submit(function(event) {
      event.preventDefault();
      placeOrder();
  });
  $("#deliveryDetails").submit(function(event) {
      event.preventDefault();
      makeDelivery();
  });
});

function cancelOrders() {
  location.reload(); //reload contents of page to original status
}

var arrayTotal = []; //global array used to store all total prices for each order

function deliveryOptions() {
  $("#deliveryOptions").show();
  $("#orderDetails").hide();
  document.getElementById("orders").reset(); //reset form
  $('#placeorder').prop('disabled', false); //enable place order button
  var checkoutTotal = 0;
  arrayTotal.forEach(function(index) {
      checkoutTotal = checkoutTotal + index;
  });
  $(".totalPick").text(checkoutTotal);
  var checkoutTotalDel = checkoutTotal + 200; //add Ksh.200 to checkout total when delivery is chosen
  $(".totalDel").text(checkoutTotalDel);
}

function pickUp() {
  $("#pickUpConfirmation").show();
  $("#yourorder").hide();
}

function deliver() {
  $("#delivery").show();
  $("#yourorder").hide();
}

function reloadPage() {
  location.reload(); //reload contents of page to original status
}

function clearTextarea() {
  $("#messageForm").reset(); //reset textarea inputs
}

function addOrder() {
  $('#placeorder').prop('disabled', false); //enable button
  $("input[type='checkbox']").prop({ //enable checkboxes
      disabled: false
  });
  $("input[type='checkbox']").prop({ //uncheck previously checked checkboxes
      checked: false
  });
} 