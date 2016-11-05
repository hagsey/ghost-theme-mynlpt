$(function() {




// Table format

$('.site-footer tr').find('td:odd').css('background', '#424242');
$('.nlpt-fit-schedule tr').find('td:odd').css('background', '#f3f3f3');

// Toggle modal

  (function() {
    var $body = $('body'),
        $modal_layer = $('.modal-layer');

    var toggleModal = function(mode) {
      var modal = $(this).next('.modal'),
          close_button = $(modal).find('.close-button');

      if (mode === 'show') {
        modal.show();
        $modal_layer.show();
        $body.css('overflow', 'hidden');
      } else if (mode === 'hide') {
        modal.hide();
        $modal_layer.hide();
        $body.css('overflow', 'visible');
      }
    };

      // Contact modal

      $(".sign-up-button").on("click", function() {
        var self = this;

        toggleModal.call(this, 'show');

        $(".modal-layer").off().on("click", function() {
          toggleModal.call(self, 'hide');
        });
      });

      // Snapchat modal

      $("a.snapchat").click(function(e) {
        e.preventDefault();
        var self = this;

        toggleModal.call(this, 'show');

        $(".modal-layer").off().on("click", function() {
          toggleModal.call(self, 'hide');
        });
      });

    // Staff modal

    $('.staff-content').on('click', '.staff-box', function() {
      var self = this;

      toggleModal.call(this, 'show');

      $('.modal-layer, .close-button').off().on('click', function() {
        toggleModal.call(self, 'hide');
      });
    });

    // Picture modal

    $('.facilities-content').on('click', '.thumbnail', function() {
      var self = this;

      toggleModal.call(this, 'show');

      $('.modal-layer, .close-button').off().on('click', function() {
        toggleModal.call(self, 'hide');
      });

    });

  }());

  // Portal hover animation

  $('.portal').hover(function() {
    $(this).find('.portal-cover').fadeIn(100);
  }, function() {
    $(this).find('.portal-cover').fadeOut(100);
  });

  // Nav bar animation, but not on post page

   (function() {
     var post_page = ($('.post-page').length === 1 ) ? true : false;

     var addScrollStyle = function() {
       $('.nav-bar-wrapper').addClass('scroll-nav');
       $('.left-side-header').fadeIn();
      }

      var removeScrollStyle = function() {
        $('.nav-bar-wrapper').removeClass('scroll-nav');
        $('.left-side-header').fadeOut();
      }

      var toggleScrollStyle = function() {
        if (!post_page) {
          $(window).scroll(function() {
            if ($(document).scrollTop() > 100) {
              addScrollStyle();
            } else {
              removeScrollStyle();
            }
          });
        }
      }

      if (post_page) {
        console.log("yes");
        addScrollStyle();
      }
      toggleScrollStyle();
   }());

  //Drop cap first letter of post

  (function() {
    var $el = $(".post-content").find("p:first"),
        paragraph = $el.text(),
        first_letter = paragraph[0],
        chopped_paragraph = paragraph.slice(1);

    var new_paragraph = "<span class='first-letter'>" + first_letter + "</span>" + chopped_paragraph;
    $el.html(new_paragraph);
  })();

  //Replace subscribe text in footer

  $(".site-footer").find("label[for='mce-EMAIL']").text("Subscribe and don't miss a thing.")

  //Show and hide podcast meta data

  $(".podcast-page .content-preview-area").hover(function() {
    var $el = $(this);

    $el.find(".content-preview-text").hide();
    $el.find(".podcast-description").fadeIn(400);

  }, function() {
    var $el = $(this);

    $el.find(".content-preview-text").fadeIn(400);
    $el.find(".podcast-description").hide();

  });

  // Hamburger toggle
  (function() {
    var $hamb = $(".hamburger"),
        $menu = $(".nav-bar-links");

    $hamb.on("click", function() {
      $menu.slideToggle();
    });

    window.onresize = function() {
      if ($(window).width() > 630) {
        $menu.show();
      } else {
        $menu.hide();
      };
    }
  }());



// Testimonial ticker

  (function() {
    // Takes an object and updates ticker box
    var updateTicker = function(obj) {
      var name = obj.name,
          quote = obj.quote,
          age = obj.age,
          html = "<p class='animated fadeInUp'>" + quote + "<span> - " + name + ", " + age + "</span></p>";

      $(".testimonial-ticker").html(html);
    };

    // Only run function if ticker present on page
    if ($(".testimonial-ticker").length > 0) {
      // loopExecuter breaks Grunt's minification, it is located in default.hbs
      loopExecuter(testimonials, updateTicker, 6000);
    }

  }());



});