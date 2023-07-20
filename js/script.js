$(function () {
	
	$(".counter").counterUp({
		delay: 20,
		time: 2000,
	});
	
	$(".slick_slider").slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: ".prev_icon",
		nextArrow: ".next_icon",
		zIndex: 9999999,
		
	});

	
	$(window).scroll(function () {
		$("#navbar_main.nav_fixed").animate(500);

		let add_Fixed_Nav = $(this).scrollTop();
		if (add_Fixed_Nav > 1000) {
			$("#navbar_main").addClass("nav_fixed");
		} else {
			$("#navbar_main").removeClass("nav_fixed");
		}
	});
	
});




new WOW().init();


