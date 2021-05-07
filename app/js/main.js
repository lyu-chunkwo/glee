$(function() {
	$('.top-slider__list').slick({
		arrows: false,
		dots: true
	});


	
	$(".stars").rateYo({
		starWidth: "40px",
		normalFill: "#A0A0A0",
		ratedFill: "#E74C3C"
  });

	$('.menu__btn').on('click', function () {
		$('.menu__list').toggleClass('menu__list--active');
	});


	const mix1 = document.querySelector('.products__list');
	const mix2 = document.querySelector('.design__list');

	if(mix1){
		mixitup('.products__list', {
			selectors: {
				control: '.filter1'
			}
		})
	}

	if(mix2){
		mixitup('.design__list', {
			selectors: {
				control: '.filter2'
			}
		})
	}

	$('.partners-slider__list').slick({
		arrows: false,
		slidesToShow: 5,
  	slidesToScroll: 1,
		autoplay: true,
		responsive: [
			{
				breakpoint: 951,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: false,
					dots: false
				}
			},

			{
				breakpoint: 861,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: false,
					dots: false
				}
			},
		]
	});

});