//初始化调用
//dynamicNews(-1, 1);
//category
const navcon = $(".navcon li");
for (let i = 0; i < navcon.length; i++) {
	navcon[i].index = i;
	navcon.eq(i).click(function () {
		for (let n = 0; n < navcon.length; n++) {
			navcon.eq(n).removeClass("cur");
		}
		navcon.eq(this.index).addClass("cur");
		$(".module-tab-box-ma_Div h3").text(navcon.eq(this.index).text());
		$("#getback").html("<p>您所在的位置：<a href=\"../index.html\">首页</a> > <a href=\"./news.html\">新闻动态</a> > <a href=\"javascript:void (0)\">" + navcon.eq(this.index).text() + "</a></p>");
		//$("#content01 li").remove();
		$("#content01 h2").remove();
		$("#loading").show();
		$(".info01").show();
		$(".newsContent").hide();
		dynamicNews(this.index, 1);
	})
}
// News
function dynamicNews(number, page) {
	let url = "";
	let currentPages = 1;
	if (number === -1) {
		url = globalUrl("dynamicNews") + "?page=" + page + "&limit=10";
	} else {
		url = globalUrl("dynamicNews") + "?page=" + page + "&limit=10&keyword=" + $(".navcon a").eq(number).text();
	}

	$.ajax({
		type: "POST",
		url: url,
		dataType: "json",
		success: function (data) {
			if (data.resultCode === 200) {
				$("#loading").hide();
				$("#content01 li").remove();
				currentPages = data.data.currPage;
				for (let i = 0; i < data.data.list.length; i++) {
					$("#content01").append("<li>\n" +
						"\t\t\t\t\t\t\t<div class=\"module-tab-title\">\n" +
						"\t\t\t\t\t\t\t\t<a href=\"../newsDetails/details_page.html?id=" + data.data.list[i].id + "\">\n" +
						"\t\t\t\t\t\t\t\t\t<div class=\"module-tab-title_DivSon01\">\n" +
						"\t\t\t\t\t\t\t\t\t\t<img class=\"img-responsive\" src=\"" + domainNameUrl() + data.data.list[i].firstPicture + "\" alt=\"\">\n" +
						"\t\t\t\t\t\t\t\t\t</div>\n" +
						"\t\t\t\t\t\t\t\t\t<div class=\"module-tab-title_DivSon02\">\n" +
						"\t\t\t\t\t\t\t\t\t\t<h4 class=\"module-tab-title_DivSon02_title\">" + "【" + data.data.list[i].kind.substring(0, 2) + "】" + data.data.list[i].title + "</h4>\n" +
						"\t\t\t\t\t\t\t\t\t\t<p class=\"module-tab-title_DivSon02_time\">时间：<span class=\"times\">" + data.data.list[i].createTime.substring(0, 10) + "</span>&nbsp;&nbsp;|&nbsp;&nbsp;来源：本站</p>\n" +
						"\t\t\t\t\t\t\t\t\t\t<p class=\"module-tab-title_DivSon02_info\">" + data.data.list[i].description + "</p>\n" +
						"\t\t\t\t\t\t\t\t\t</div>\n" +
						"\t\t\t\t\t\t\t\t</a>\n" +
						"\t\t\t\t\t\t\t</div>\n" +
						"\t\t\t\t\t\t</li>");
				}
			} else {
				$("#loading").hide();
				$("#content01 li").remove();
				$("#content01").append("<h2 style=\"text-align: center;\">暂无新闻</h2>");
			}

			// 分页
			$("#page").bootstrapPaginator({
				bootstrapMajorVersion: 3, //对应的bootstrap版本
				currentPage: currentPages, //当前页数
				numberOfPages: 1, //每次显示页数
				totalPages: Math.ceil(parseInt(data.data.totalCount) / 10), //总页数
				useBootstrapTooltip: true,
				//点击事件
				onPageClicked: function (event, originalEvent, type, page) {
					$("html,body").animate({scrollTop: $("#news").offset().top - 100}, 300);
					//$("#content01 li").remove();
					$("#content01 h2").remove();
					$("#loading").show();
					let categorys = $(".module-tab-box-ma_Div h3").text();
					if (categorys === "新闻动态") {
						dynamicNews(-1, page);
					} else if (categorys === "科技合作") {
						dynamicNews(0, page);
					} else if (categorys === "教育合作") {
						dynamicNews(1, page);
					} else if (categorys === "企业合作") {
						dynamicNews(2, page);
					} else if (categorys === "语言中心") {
						dynamicNews(3, page);
					} else {
						dynamicNews(4, page);
					}
				}
			});
		},
		error: function () {
			alert("服务器繁忙，请稍后再试！");
			$("#loading").hide();
		}
	});
}

