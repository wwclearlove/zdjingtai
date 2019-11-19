$(document).ready(function () {
	const moduleUl = $(".module-tab-box-ma");
	const moduleTabNav = $(".module-tab-nav li");
	for (let i = 0; i < moduleTabNav.length; i++) {
		moduleTabNav[i].index = i;
		moduleTabNav.eq(i).click(function () {
			for (let i = 0; i < moduleTabNav.length; i++) {
				moduleTabNav.eq(i).removeClass("on");
			}
			for (let i = 0; i < moduleUl.length; i++) {
				moduleUl.eq(i).hide();
			}
			$(this).addClass("on");
			moduleUl.eq(this.index + 1).show();
		});
	}
	$(".news_list_Div").click(function () {
		for (let i = 1; i < moduleUl.length; i++) {
			moduleUl.eq(i).hide();
		}
		for (let i = 0; i < moduleTabNav.length; i++) {
			moduleTabNav.eq(i).removeClass("on");
		}
		moduleUl.eq(0).show();
	});
});
