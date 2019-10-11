$(document).ready(function () {
	$(window).scroll(function() {
		var scrollTop = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop).toFixed(0);
		if (scrollTop > 80){
			$("#header").addClass("scroll_header")
		}else {
			$("#header").removeClass("scroll_header");
		}
	});
});
