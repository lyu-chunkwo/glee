$(function() {

	// Related products slider
	$('.product-related__list').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		infinite: false,

		prevArrow: '<button class="slick-btn slick-prev"><img src="images/ico/prev.svg" alt="prev"></button>',
	  nextArrow: '<button class="slick-btn slick-next"><img src="images/ico/next.svg" alt="next"></button>',

		responsive: [
			{
				breakpoint: 1201,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 901,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 651,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});



	//Product Tabs script
	$('.product-tabs__link').on('click', function (e) {
		e.preventDefault();
		$('.product-tabs__link').removeClass('product-tabs__link--active');
		$(this).addClass('product-tabs__link--active');

		$('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
		$($(this).attr('href')).addClass('product-tabs__content-item--active');
	})



	//Form styler script
	$('.product__input').styler();



	//Main slider
	$('.top-slider__list').slick({
		arrows: false,
		dots: true
	});

	

	//product details slider
	$('.product__slider-thumb').slick({
		asNavFor: '.product__slider-big',
		slidesToShow: 3,
		slidesToScroll: 1,
		focusOnSelect: true,
		vertical: true,
		draggable: false,
		arrows: false
	});
	$('.product__slider-big').slick({
		asNavFor: '.product__slider-thumb',
		draggable: false,
		arrows: false
	});


//Switch product grid to list
	$('.shop-content__view-btn').on('click', function () {
		$('.shop-content__view-btn').removeClass('shop-content__view-btn--active');
		$(this).addClass('shop-content__view-btn--active');
	});
	
	$('.button-list').on('click', function () {
		$('.products-item').addClass('products-item--list');
		$('.pagination').addClass('pagination--list');
		// $('.shop-content__inner').addClass('shop-content__nogrid');
	})
	$('.button-grid').on('click', function () {
		$('.products-item').removeClass('products-item--list');
		$('.pagination').removeClass('pagination--list');
		// $('.shop-content__inner').removeClass('shop-content__nogrid');
	})



//Filter price
	$('.filters__price-input').ionRangeSlider({
		type: "double",
		prefix: "$",
		postfix: " dollars",
		onStart: function (data){
			$('.filters__price-from').text(data.from);
			$('.filters__price-to').text(data.to);
		},
		onChange: function (data) {
			$('.filters__price-from').text(data.from);
			$('.filters__price-to').text(data.to);
		},
	});


	
	//Stars rating
	$(".stars").rateYo({
		starWidth: "12px",
		normalFill: "#d6d6d6",
		ratedFill: "#ffcc00",
		starSvg: '<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>'
  });

	$(".stars-list").rateYo({
		starWidth: "20px",
		normalFill: "#d6d6d6",
		ratedFill: "#ffcc00",
		starSvg: '<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>'
  });

	$(".stars-product__details").rateYo({
		starWidth: "20px",
		normalFill: "#d6d6d6",
		ratedFill: "#ffcc00",
		spacing: "15px",
		starSvg: '<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>'
  });




//Button for adaptive menu
	$('.menu__btn').on('click', function () {
		$('.menu__list').toggleClass('menu__list--active');
	});


	//Script for mixitup filter
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


	//Partners slider
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
				breakpoint: 851,
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