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
	// 添加网页头部Icon
	$("head").append("<link rel=\"shortcut icon\" type=\"images/x-icon\" href=\"../static/imgs/logoIcon.png\">");
	$("head").append("<link rel=\"shortcut icon\" type=\"images/x-icon\" href=\"../../static/imgs/logoIcon.png\">");
	$("head").append("<link rel=\"shortcut icon\" type=\"images/x-icon\" href=\"../../../static/imgs/logoIcon.png\">");

	// 图片查看大图
	/*$("section div img").click(function () {
		$('#myModal').modal('show');
		$("body").css("padding-right", "0px");
		$("#largerVersion").attr("src",$(this).attr("src"));
	});
	$(".modal-content").click(function () {
		$('#myModal').modal('hide');
	});*/


});

/*配置全站请求URL*/
function globalUrl(theModule) {
	const url = "http://106.52.3.235:8888/";
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

	if (banner === theModule) {
		// 轮播图 GET
		return url + "banner/list";
	} else if (indexNews === theModule) {
		// 首页热点新闻 GET
		return url + "news/topic";
	} else if (dynamicNews === theModule) {
		// 新闻动态 POST
		return url + "news/list";
	}else if (dynamicNewsID === theModule) {
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
	} else {
		return "";
	}
}

/*配置全站URL*/
function domainNameUrl() {
	return "http://106.52.3.235:8888/";
}

/*参数配置*/
function getParameters() {
	let url = window.location.search;
	let urlResult = [];
	let arrUrl = url.substr(1).split("&");
	for (let i = 0; i < arrUrl.length; i++) {
		urlResult[i] = decodeURI(arrUrl[i].split("=")[1]);
	}
	return urlResult;
}
