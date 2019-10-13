$(document).ready(function () {
	/*导航*/
	$(function () {
		$(".header").after(
			'<div id="m-nav" class="m-nav"><div class="m-wrap"></div><div id="m-btn" class="m-btn"><i class="fa fa-remove"></i></div>'
		);
		$(".sub-menu").before(
			'<em class="dot"><i class="fa fa-angle-down"></i></em>'
		);
		$(".containers .nav")
			.clone(false)
			.appendTo(".m-wrap");
		$(".m-btn").click(function () {
			$("#m-nav")
				.toggleClass("m-open")
				.siblings("#m-nav")
				.removeClass("m-open");
			$("#mask")
				.slideToggle(0)
				.siblings("#mask")
				.slideToggle(0);
			$("body")
				.toggleClass("open")
				.siblings("body")
				.removeClass("open");
		});
		$(".dot").click(function (G) {
			f($(this), ".ul-subcates");
			G.stopPropagation();
		});

		function f(f, G) {
			f.next().slideToggle();
			f.parent()
				.siblings()
				.find(".fa")
				.removeClass("open");
			f.parent()
				.siblings()
				.find(G)
				.slideUp();
			var b = f.find(".fa");
			if (b.hasClass("open")) {
				b.removeClass("open");
			} else {
				b.addClass("open");
			}
		}

		$(".nav-bar li").hover(
			function () {
				$(this).addClass("on");
			},
			function () {
				$(this).removeClass("on");
			}
		);
		$(".s-btn").on("click", function () {
			var f = $(this);
			if (f.hasClass("off")) {
				f.removeClass("fa-search off").addClass("fa-remove no");
				$(".s-form").slideToggle(200);
			} else {
				f.removeClass("fa-remove no").addClass("fa-search off");
				$(".s-form").slideToggle(100);
			}
		});
		$("#mask").click(function () {
			$(this).hide();
			$(".search-bg").hide();
			$("#m-nav").removeClass("m-open");
			$("body").removeClass("open");
		});
	});
	/*滚动事件导航变化*/
	$(window).scroll(function () {
		var scrollTop = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop).toFixed(0);
		var clientWidth = document.body.clientWidth;
		if (scrollTop > 100 && clientWidth > 1024) {
			$(".languageSearch").css("opacity","0.8");
			$(".header").css("opacity","0.8");
		} else {
			$(".languageSearch").css("opacity","1");
			$(".header").css("opacity","1");
		}
	});
});


