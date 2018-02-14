$(document).ready(function(){

	//Animation

	$("#headerwrap .btn_down").animated("pulse", "pulse");
	$(".about div").animated("bounceInRight", "bounceOutLeft");
	$("#portfolio a").animated("fadeInUp", "fadeOutDown");
	
		function myFunction() {
		    document.getElementByClass(".about div").style.WebkitAnimationDuration = "3s";  // Code for Chrome, Safari, and Opera
		    document.getElementByClass(".about div").style.animationDuration = "3s";
		}

	$("#contakt form").animated("zoomIn", "zoomOut");

	// Smooth scroll to anchor
  $('#menu a').click(function(){
      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 700);
      if($(window).width() <= 992) {
       menu.slideToggle();
      }
      return false;
  });

  	//Smooth scroll to anchor
  $('.btn_down').click(function(){
       $('html, body').animate({scrollTop:$('#services').position().top}, 1000);
});

});