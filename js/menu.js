$("#nav").addClass("js").before('<div id="menu">&#9776;</div>');
$("#nav").hide();
$("#menu").click(function(){
	$("#nav").slideToggle();
});
$("#nav a").click(function() {
    if(window.innerWidth < 700) {
        $("#nav").slideUp();
    }
});
function resizer(){
	if(window.innerWidth > 699) {
		$("#nav").css("display", "flex").show();
		$("#menu").hide();
	} else {
	    $("#nav").css("display", "block").hide();
	    $("#menu").show();
	}
};
$(window).ready(resizer).resize(resizer);

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - $("#nav").height()
        }, 1000);
        return false;
      }
    }
  });
});