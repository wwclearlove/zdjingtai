$(document).ready(function () {
	// 时间
	setInterval(function () {
		$("#times").html(new Date().toLocaleString());
	}, 1000);
	// 导航
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
	// 导航透明
	$("#title").mouseover(function () {
		if (document.body.clientWidth > 1024) {
			$(".languageSearch").removeClass("opacity");
			$(".header").removeClass("opacity");
		}
	});
	$("#title").mouseout(function () {
		if (document.body.clientWidth > 1024) {
			$(".languageSearch").addClass("opacity");
			$(".header").addClass("opacity");
		}
	});
	// 公共背景色
	$("body").css("background-color", "#e6e6e6");
	// 图片查看大图
	for (let i = 0; i < $("section img").length; i++) {
		$("section img").eq(i).click(function () {
			if ($(this).attr("src").substring(0, 4) !== "http") {
				window.open(imgPath() + $(this).attr("src").substring(6, $(this).attr("src").length));
			}
		})
	}
	// 返回顶部
	$("section").append("<a id=\"totop\" href=\"javascript:void (0);\"><i class=\"fa fa-angle-up\"></i></a>");
	$(document).scroll(function() {
		const scrollTop = parseInt($(document).scrollTop());
		if (scrollTop >= 100){
			$("#totop").show();
		} else {
			$("#totop").hide();
		}
	});
	$("#totop").click(function () {
		$("html,body").animate({scrollTop: 0}, 300);
	});
});

/*配置全站请求接口URL*/
function globalUrl(theModule) {
	const url = "http://www.sczdkc.cn:8888/";
	const banner = "banner"; // 轮播图
	const indexNews = "indexNews"; // 首页热点新闻
	const dynamicNews = "dynamicNews"; // 新闻动态
	const dynamicNewsID = "dynamicNewsID"; // 新闻动态详情文章
	const activityNews = "activityNews"; // 活动计划
	const cooperativeResources = "cooperativeResources"; // 合作资源
	const interestGermany = "interestGermany"; // 趣味德国
	const interestGermanyID = "interestGermanyID"; // 趣味德国详情文章
	const contactUs = "contactUs"; // 联系我们
	const search = "search"; // 全局搜索
	const developmentCourse = "developmentCourse"; // 发展历程

	if (banner === theModule) {
		// 轮播图 GET
		return url + "banner/list";
	} else if (indexNews === theModule) {
		// 首页热点新闻 GET
		return url + "news/topic";
	} else if (dynamicNews === theModule) {
		// 新闻动态 POST
		return url + "news/list";
	} else if (dynamicNewsID === theModule) {
		// 新闻动态详情文章 POST
		return url + "news/newsByid";
	} else if (activityNews === theModule) {
		// 活动计划 POST
		return url + "activity/list";
	} else if (cooperativeResources === theModule) {
		// 合作资源 POST
		return url + "resources/list";
	} else if (interestGermany === theModule) {
		// 趣味德国 POST
		return url + "germany/list";
	} else if (interestGermanyID === theModule) {
		// 趣味德国详情文章 POST
		return url + "germany/listByid";
	} else if (contactUs === theModule) {
		// 联系我们 POST
		return url + "contact/save";
	} else if (search === theModule) {
		// 全局搜索 GET
		return url + "search/list";
	} else if (developmentCourse === theModule) {
		// 发展历程 GET
		return url + "";
	}
	else {
		return "";
	}
}

/*配置全站请求URL*/
function domainNameUrl() {
	return "http://www.sczdkc.cn:8888/";
}

/*配置全站静态IMG URL*/
function imgPath() {
	return "http://www.sczdkc.cn:80/";
}

/*配置页面传参*/
function getParameters() {
	const url = window.location.search;
	let urlResult = [];
	const arrUrl = url.substr(1).split("&");
	for (let i = 0; i < arrUrl.length; i++) {
		urlResult[i] = decodeURI(arrUrl[i].split("=")[1]);
	}
	return urlResult;
}
