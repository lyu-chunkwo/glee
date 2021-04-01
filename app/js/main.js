$(function() {
	$('.top-slider__list').slick({
		arrows: false,
		dots: true
	});

	$('.partners-slider__list').slick({
		arrows: false,
		slidesToShow: 5,
  	slidesToScroll: 1,
		autoplay: true,
	});

 
  var mixer = mixitup(".products__list");
  var mixer = mixitup(".design__list");
	


});