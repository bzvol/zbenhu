$(document).ready(function(){

  $("#top-centerbox-image").delay(300).animate({marginBottom: 0}, 1500);
  $("#animated-namedesc-box").delay(300).animate({marginBottom: 0}, 1500);
  $(".animated-desc-box").delay(1800).fadeIn(6000);  

  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top + "px"
      }, 1000);
    } // End if
  });

});

