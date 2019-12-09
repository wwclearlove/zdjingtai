//初始化调用
//dynamicNews(-1, 1);
// category
const moduleTabNav = $(".module-tab-nav li");
for (let i = 0; i < moduleTabNav.length; i++) {
	moduleTabNav[i].index = i;
	moduleTabNav.eq(i).click(function () {
		for (let i = 0; i < moduleTabNav.length; i++) {
			moduleTabNav.eq(i).removeClass("on");
		}
		$(this).addClass("on");
		$(".module-tab-box-ma li").remove();
		dynamicNews(this.index, 1);
		$(".module-tab-box-ma").show();
		$(".newsContent").hide();

	});
}
// category
$(".news_list_Div").click(function () {
	for (let i = 0; i < moduleTabNav.length; i++) {
		moduleTabNav.eq(i).removeClass("on");
	}
	$(".module-tab-box-ma li").remove();
	dynamicNews(-1, 1);
	$(".module-tab-box-ma").show();
	$(".newsContent").hide();
	$("#page").show();
});

// News
function dynamicNews(number, page) {
	let url = "";
	if (number === -1) {
		$(".module-tab-box-ma_Div h3").text($(".news_list_Div h2").text());
		url = globalUrl("dynamicNews") + "?page=" + page + "&limit=10";
	} else {
		$(".module-tab-box-ma_Div h3").text($(".module-tab-nav li span").eq(number).text());
		url = globalUrl("dynamicNews") + "?page=" + page + "&limit=10&keyword=" + $(".module-tab-nav li span").eq(number).text();
	}

	$.ajax({
		type: "POST",
		url: url,
		dataType: "json",
		success: function (data) {
			if (data.resultCode === 200) {
				for (let i = 0; i < data.data.list.length; i++) {
					$(".module-tab-box-ma").append("<li>\n" +
						"\t\t\t\t\t\t\t<div class=\"module-tab-title\">\n" +
						"\t\t\t\t\t\t\t\t<a href=\"../newsDetails/details_page.html?id=" + data.data.list[i].id + "\">\n" +
						"\t\t\t\t\t\t\t\t\t<div class=\"module-tab-title_DivSon01\">\n" +
						"\t\t\t\t\t\t\t\t\t\t<img class=\"img-responsive\" src=\"" + domainNameUrl() + data.data.list[i].firstPicture + "\" alt=\"\">\n" +
						"\t\t\t\t\t\t\t\t\t</div>\n" +
						"\t\t\t\t\t\t\t\t\t<div class=\"module-tab-title_DivSon02\">\n" +
						"\t\t\t\t\t\t\t\t\t\t<h4 class=\"module-tab-title_DivSon02_title\">" + "【" + data.data.list[i].kind.substring(0, 2) + "】" + data.data.list[i].title + "</h4>\n" +
						"\t\t\t\t\t\t\t\t\t\t<p class=\"module-tab-title_DivSon02_time\">时间：<span class=\"times\">" + data.data.list[i].createTime + "</span> &nbsp;|&nbsp;来源：本站</p>\n" +
						"\t\t\t\t\t\t\t\t\t\t<p class=\"module-tab-title_DivSon02_info\">" + data.data.list[i].description + "</p>\n" +
						"\t\t\t\t\t\t\t\t\t</div>\n" +
						"\t\t\t\t\t\t\t\t</a>\n" +
						"\t\t\t\t\t\t\t</div>\n" +
						"\t\t\t\t\t\t</li>");
				}
			} else {
				$(".module-tab-box-ma li").remove();
				alert("新闻参数错误！请刷新再试");
			}

			// 分页
			$("#page").bootstrapPaginator({
				bootstrapMajorVersion: 3, //对应的bootstrap版本
				currentPage: 1, //当前页数
				numberOfPages: 1, //每次显示页数
				totalPages: data.data.totalPage + 1, //总页数
				useBootstrapTooltip: true,
				//点击事件
				onPageClicked: function (event, originalEvent, type, page) {
					$(".module-tab-box-ma li").remove();
					let categorys = $(".module-tab-box-ma_Div h3").text();
					if (categorys === "新闻动态") {
						dynamicNews(-1, event | originalEvent | type | page);
					} else if (categorys === "科技合作") {
						dynamicNews(0, event | originalEvent | type | page);
					} else if (categorys === "教育合作") {
						dynamicNews(1, event | originalEvent | type | page);
					} else if (categorys === "企业合作") {
						dynamicNews(2, event | originalEvent | type | page);
					} else if (categorys === "语言中心") {
						dynamicNews(3, event | originalEvent | type | page);
					} else {
						dynamicNews(4, event | originalEvent | type | page);
					}
				}
			});
		},
		error: function () {
			$(".module-tab-box-ma li").remove();
			alert("服务器繁忙，请稍后再试！");
		}
	});
}

