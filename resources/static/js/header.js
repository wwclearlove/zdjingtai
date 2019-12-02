$(document).ready(function () {
	/*时间*/
	setInterval(function () {
		$("#times").html(new Date().toLocaleString());
	}, 1000);
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
	/*导航透明*/
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
	/*添加网页头部Icon*/
	$("head").append("<link rel=\"shortcut icon\" type=\"images/x-icon\" href=\"../static/imgs/logoIcon.png\">");
	$("head").append("<link rel=\"shortcut icon\" type=\"images/x-icon\" href=\"../../static/imgs/logoIcon.png\">");
	$("head").append("<link rel=\"shortcut icon\" type=\"images/x-icon\" href=\"../../../static/imgs/logoIcon.png\">");

	/*图片查看大图*/
	/*$("section div img").click(function () {
		$('#myModal').modal('show');
		$("body").css("padding-right", "0px");
		$("#largerVersion").attr("src",$(this).attr("src"));
	});
	$(".modal-content").click(function () {
		$('#myModal').modal('hide');
	});*/
});
