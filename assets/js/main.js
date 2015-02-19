$("window").load(function() {
	$("body").removeClass("preload");
});

jQuery(document).ready(function($) {
	if ($(window).width() > 768) {
		var headerHeight = $('#header').height();
		var handleScroll = true;

		$(window).on('scroll', { previousScroll: 0 }, function () {
			var currentScroll = $(this).scrollTop();
			if (currentScroll > this.previousScroll) {
				if (currentScroll > headerHeight) {
					$('#header').slideUp(200);
				}
			} else if (handleScroll){
				$('#header').slideDown(200);
			}
			else {
				//a bit of workaround to make header disappear 
				handleScroll = true;
			}
			this.previousScroll = currentScroll;
		});

		$('#header a').on('click', function(e){
			handleScroll = false;
			$('#header').slideUp(200);
		});
	}

	$('#disapear-on-click').on('click', function () {
		$(this).hide();
	});	
});
