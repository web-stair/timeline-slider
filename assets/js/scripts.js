$(document).on('click', '.slider-navs .nav-item', function() {
	var $slider = $(this).parents('.slider-wrapper'),
		$self   = $(this),
		$navs 	= $(this).parent('.slider-navs'),
		index  	= $(this).index();

	$('.slider-item.active', $slider).addClass('fxSoftPulseOut').removeClass('fxSoftPulseIn active');
	$('.slider-item').eq(index).addClass('fxSoftPulseIn active');

	$('.nav-item.active', $slider).removeClass('active');
	$self.addClass('active');
	$navs.css({'margin-left': `${(index * 20)}%`});
});