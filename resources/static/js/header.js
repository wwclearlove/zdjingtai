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
	/*导航*/
	const opacity = 0.9;
	const opacitys = 1;
	const clientWidth = document.body.clientWidth;
	$("#title").mouseover(function () {
		if (clientWidth > 1024) {
			$(".languageSearch").css("opacity", opacitys);
			$(".header").css("opacity", opacitys);
		}
	});
	$("#title").mouseout(function () {
		if (clientWidth > 1024) {
			$(".languageSearch").css("opacity", opacity);
			$(".header").css("opacity", opacity);
		}
	});
	$(".li-cate_a").eq(6).css("width", "146px");
	/*公共背景色*/
	$("body").css("background-color", "#e6e6e6");
	/*页面头部高亮*/
	var date = new Date();
	date.setTime(date.getTime() + 60 * 1000);
	let liCateA = $(".li-cate_a");
	for (let i = 0; i < liCateA.length; i++) {
		liCateA[i].index = i;
		liCateA.eq(i).click(function () {
			$.cookie('active', this.index, {path: '/', expires: date});
		});
	}
	let subdirectories01 = $(".subdirectories01");
	for (let s = 0; s < subdirectories01.length; s++) {
		subdirectories01.eq(s).click(function () {
			$.cookie('active', "3", {path: '/', expires: date});
		})
	}
	let subdirectories02 = $(".subdirectories02");
	for (let s = 0; s < subdirectories02.length; s++) {
		subdirectories02.eq(s).click(function () {
			$.cookie('active', "4", {path: '/', expires: date});
		})
	}
	let subdirectories03 = $(".subdirectories03");
	for (let s = 0; s < subdirectories03.length; s++) {
		subdirectories03.eq(s).click(function () {
			$.cookie('active', "5", {path: '/', expires: date});
		})
	}
	let subdirectories04 = $(".subdirectories04");
	for (let s = 0; s < subdirectories04.length; s++) {
		subdirectories04.eq(s).click(function () {
			$.cookie('active', "6", {path: '/', expires: date});
		})
	}
	let subdirectories05 = $(".subdirectories05");
	for (let s = 0; s < subdirectories05.length; s++) {
		subdirectories05.eq(s).click(function () {
			$.cookie('active', "7", {path: '/', expires: date});
		})
	}
	$(".li-cate-1").eq($.cookie('active')).addClass("active");

	/*时间*/
	setInterval(function () {
		$("#times").html(new Date().toLocaleString());
	}, 1000);
});


