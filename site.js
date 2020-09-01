// By CSSTricks.com
$.fn.shuffleChildren = function() {
  $.each(this.get(), function(index, el) {
      var $el = $(el);
      var $find = $el.children();

      $find.sort(function() {
          return 0.5 - Math.random();
      });

      $el.empty();
      $find.appendTo($el);
  });
};

$(document).ready(function(){

  var $break = $("#maillinkbr")[0];
  $break.remove();
  var $maillink = $(".maillink");
  $maillink.remove();
  $(".social-links").shuffleChildren();
  $(".social-links").append($break);
  $(".social-links").append($maillink[0]);

  $("#top-centerbox-image").delay(300).animate({marginBottom: 0}, 1500);
  $("#animated-namedesc-box").delay(300).animate({marginBottom: 0}, 1500);
  $(".animated-desc-box").delay(1800).fadeIn(6000);  

  // By w3schools.com
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

function loadPage(url){
  window.open(url);
}

// By Simon Adcock
function hoverdiv(e,divid){

  var left  = e.clientX + "px";
  var top  = e.clientY + "px";

  var div = document.getElementById(divid);

  div.style.left = left;
  div.style.top = top;

  $("#"+divid).toggle();

}

function rollthen2003() {
  $("html").toggleClass("barrelroll-first");
  setTimeout(function (){
    $("html").toggleClass("barrelroll-first");
    $("html").toggleClass("barrelroll");
  }, 1000)
  setTimeout(function (){
    location.href = "2003.html"
  }, 2800)
}