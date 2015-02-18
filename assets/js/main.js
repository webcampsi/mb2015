$("window").load(function() {
	$("body").removeClass("preload");
});

jQuery(document).ready(function($) {
	if ($(window).width() > 768) {
		var headerHeight = $('#header').height();
		$(window).on('scroll', { previousScroll: 0 }, function () {
			var currentScroll = $(this).scrollTop();
			if (currentScroll > this.previousScroll) {
				if (currentScroll > headerHeight) {
					$('#header').slideUp(200);
				}
			} else {
				$('#header').slideDown(200);
			}
			this.previousScroll = currentScroll;
		});
	}
	$('#disapear-on-click').on('click', function () {
		$(this).hide();
	});	
});
