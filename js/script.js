$(document).ready(function () {
	$('.product__popup').each(function() {
		$(this).html($(this).parent().html());
	});
	$('.product__popup .product__about').show();
	$('.product__link').fancybox();

})