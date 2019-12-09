$(function () {
	// Banner
	$.ajax({
		type: "GET",
		url: globalUrl("banner"),
		dataType: "json",
		success: function (data) {
			if (data.resultCode === 200){
				for (let i = 0; i < data.data.length; i++) {
					//banner1
					$(".slider .inner a").eq(i).css("background", "url(" + domainNameUrl() + data.data[i].img + ") no-repeat center");
					$(".slider .inner span").eq(i).text(data.data[i].descrip);
					//banner2
					$(".carousel-inner .item img").eq(i).attr("src", domainNameUrl() + data.data[i].img);
					$(".carousel-inner .item .carousel-caption p").eq(i).text(data.data[i].descrip);
				}
			}else {
				alert("图片参数错误！请刷新再试");
			}
		},
		error: function () {
			alert("服务器繁忙，请稍后再试！");
		}
	});
});


