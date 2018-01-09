/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document).ready(function(){

  // Sticky footer
  var bumpIt = function() {
      $('body').css('margin-bottom', $('.page__footer').outerHeight(true));
    },
    didResize = false;

  bumpIt();

  $(window).resize(function() {
    didResize = true;
  });
  setInterval(function() {
    if(didResize) {
      didResize = false;
      bumpIt();
    }
  }, 250);

  // FitVids init
  $("#main").fitVids();

  // Follow menu drop down
  $(".author__urls-wrapper button").on("click", function() {
    $(".author__urls").fadeToggle("fast", function() {});
    $(".author__urls-wrapper button").toggleClass("open");
  });

  // init smooth scroll
  $(".toc__menu a").smoothScroll({offset: -20});

  $.devKitExtends();

  // init backstretch
  $('.page__hero--overlay-full').backstretch();

  // add lightbox class to all image links
  $("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

  // Magnific-Popup options
  $(".image-popup").magnificPopup({
    // disableOn: function() {
    //   if( $(window).width() < 500 ) {
    //     return false;
    //   }
    //   return true;
    // },
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
    },
    removalDelay: 500, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open.
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-zoom-in',
    callbacks: {
      beforeOpen: function() {
        // just a hack that adds mfp-anim class to markup
        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
      }
    },
    closeOnContentClick: true,
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });

  // Show statement before download
  $('.statement-before-download').on('click', function(event) {
    showStatement(event.currentTarget.href);
    event.preventDefault();
  });
});

function showStatement(downloadLink) {
  var statement = '两只老虎，两只老虎，跑得快，跑得快……';
  var statementBox = document.createElement('div');
  statementBox.id = 'statement';
  statementBox.innerHTML = '<div>' +
  '<textarea readonly>' + statement + '</textarea>' +
  '<a href="' + downloadLink + '" class="click-action-tracker btn btn--success">Accept &amp; Download</a>' +
  '<a href="#" class="click-action-tracker btn btn--info">Close</a>' +
  '</div>';
  $('body').append(statementBox);
  setTimeout(function() {
    $('#statement .btn').on('click', function(event) {
      $('#statement').remove();
    });
  }, 0);
}