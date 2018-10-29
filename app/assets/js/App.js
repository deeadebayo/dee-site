// All JS code - till I get down modules
import $ from 'jquery';

console.warn(`yes, we're still good`);


// For the footer animation
$(document).ready(($) => {
    $(window).on('scroll', () => {

        //ADD .TIGHT
        if ($(window).scrollTop() + $(window).height() > $('.wrapper').outerHeight()) {
            $('body').addClass('tight');
        } else {
            $('body').removeClass('tight');
        }
    });

    //BACK TO PRESENTATION MODE
    $('html').on('click', 'body.tight .wrapper', () => {
        $('html, body').animate({
            scrollTop: $('.wrapper').outerHeight() - $(window).height()
        }, 500);
    });
});

console.warn(`still good`);


// For button sex
$(function() {  
    $('.btn-6')
      .on('mouseenter', function(e) {
              var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
              $(this).find('span').css({top:relY, left:relX})
      })
      .on('mouseout', function(e) {
              var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
          $(this).find('span').css({top:relY, left:relX})
      });
    $('[href=#]').click(function(){return false});
  });

  /**
 *  Scroll window to an element
 */
$('a[href^="#"]').not('a[href="#"]').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500);
});