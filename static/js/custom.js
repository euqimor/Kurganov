$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        autoplay: true,
        autoplayTimeout: 2000,
        autoplaySpeed: 1000,
        lazyLoad: true,
        loop: true,
        center: true,
        margin: 0,
        stagePadding: 50,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
});

$(function() {
		$('.pop').on('click', function() {
			$('.imagepreview').attr('src', $(this).find('img').attr('data-url'));
			$('#imagemodal').modal('show');
		});
});

window.addEventListener("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - 100);
});
