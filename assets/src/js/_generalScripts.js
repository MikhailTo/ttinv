
class General {
	constructor() {
		this.init();
	}

	init() {
		$(document).ready(function () {
			const speed = 900;
			
			$('.brands__slider').slick({
				dots: true,
				infinite: false,
				speed: 300,
				slidesToShow: 4,
				slidesToScroll: 4,
				responsive: [
				  {
					breakpoint: 1024,
					settings: {
					  slidesToShow: 3,
					  slidesToScroll: 3,
					  infinite: true,
					  dots: true
					}
				  },
				  {
					breakpoint: 600,
					settings: {
					  slidesToShow: 2,
					  slidesToScroll: 2
					}
				  },
				  {
					breakpoint: 480,
					settings: {
					  slidesToShow: 1,
					  slidesToScroll: 1
					}
				  }
				  // You can unslick at a given breakpoint now by adding:
				  // settings: "unslick"
				  // instead of a settings object
				]
			  });

			$('#linkToggleMenu').on('click', (event) => {
				event.preventDefault();
				$('#site-navigation').toggleClass('responsive');
				if ($('#masthead').css('height') === '40px') {
					if ($('#site-navigation').hasClass('responsive')) {
						$('#site-navigation').css({
							top: '40px'
						});
					}
				} else if ($('#site-navigation').hasClass('responsive')) {
					$('#site-navigation').css({
						top: '72px'
					});
				}
			});

			$('#site-navigation').on('click', 'a',
				function (event) {
					event.preventDefault();
					const id = $(this).attr('href');
					const top = $(id).offset().top - 100;
					$('body,html').animate({
						scrollTop: top
					}, speed);
				});

			$('#linkTop').on('click', () => {
				$('body,html').animate({
					scrollTop: 0
				}, speed);
			});

			$('#linkFeedback').on('click', () => {
				const bottom = $('#feedback').offset().top - 100;
				$('body,html').animate({
					scrollTop: bottom
				}, speed);
			});

			$('#linkFeedbackFromCard').on('click', () => {
			
				var text = $('#cardTitle').text();
				
				//$('#message').val('Интересует ' + text);
				$("#message").attr("placeholder", "Интересует " + text + " ...");

				const bottom = $('#feedback').offset().top - 100;
				$('body,html').animate({
					scrollTop: bottom
				}, speed);
			});

			$(window).scroll(() => {
				const scrollDistance = $(window).scrollTop() - 100;

				$('.page-section').each(function (i) {
					if ($(this).position().top <= scrollDistance) {
						$('.main-navigation ul li.current-menu-item').removeClass('current-menu-item');
						$('.main-navigation ul li').eq(i).addClass('current-menu-item');
						if ($('.main-navigation').hasClass('responsive')) {
							$('.main-navigation').removeClass('responsive');
						}
					}
				});
			}).scroll();
		});
	}
}

export default General;
