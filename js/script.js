document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>');
//---------------------------------------------------

$(document).ready(function(){

        var $menu = $("#scroll");
        var $lll = $("#paralax");

        $(window).scroll(function(){
            if ( $(this).scrollTop() > ($('.container-5').offset().top) ){
				$lll.removeClass("default").addClass("fixed");
            } else if($(this).scrollTop() <= ($('.container-5').offset().top) ) {
                $lll.removeClass("fixed").addClass("default");
            }
        });
        $(window).scroll(function(){
            if ( $(this).scrollTop() > ($('.container-7').offset().top) ){
                $lll.removeClass("default-2").addClass("fixed-2");
            } else if($(this).scrollTop() <= ($('.container-8').offset().top) ) {
                $lll.removeClass("fixed-2").addClass("default-2");
            }
        });
    });

$(window).scroll(function() {
	var st = $(this).scrollTop();

	$(".header-text").css({
		"transform" : "translate(0%, " + st /20 + "%"
	});

    $(".astronaute").css({
        "transform" : "translate(0%, " + -st /10 + "%"
    });

    $(".astronaut-2").css({
        "transform" : "translate(0%, " + -st /5 + "%"
    });
});