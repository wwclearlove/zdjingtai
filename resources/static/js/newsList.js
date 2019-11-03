$(document).ready(function () {
	const moduleUl = $(".module-tab-box-ma");
	//类型
	var conts = 0;
	//监听类型选择
	$("#selectChooseType").change(function () {
		for (let i = 0; i < moduleUl.length; i++) {
			moduleUl.eq(i).hide();
		}
		for (let i = 0; i < $(".module-tab-box-ma li").length; i++) {
			$(".module-tab-box-ma li").eq(i).show();
		}
		moduleUl.eq($(this).val()).show();
		conts = parseInt($(this).val());
	});
	$(".news_list_Div").click(function () {
		for (let i = 1; i < moduleUl.length; i++) {
			moduleUl.eq(i).hide();
		}
		for (let i = 0; i < $(".module-tab-box-ma li").length; i++) {
			$(".module-tab-box-ma li").eq(i).show();
		}
		$("#selectChooseType").val('0');
		$("#date-range1").val("请选择日期");
		moduleUl.eq(0).show();
	});

	//多选日期
	/*$('#date-range1').dateRangePicker({
		minDays: 1,
		showShortcuts: false
	});*/

	//单选日期
	$('#date-range1').dateRangePicker({
		singleDate: true,
		showShortcuts: false
	});

	//时间对比筛选
	$(".apply-btn").click(function () {
		const module_ul1 = $('.module_ul1 li');
		const module_ul2 = $('.module_ul2 li');
		const module_ul3 = $('.module_ul3 li');
		const module_ul4 = $('.module_ul4 li');
		const time = $("#date-range1").val();
		if (conts === 1 && time !== "") {
			for (let i = 0; i < module_ul1.length; i++) {
				if (time === $('.module_ul1 .times').eq(i).text()) {
					module_ul1.eq(i).show();
				} else {
					module_ul1.eq(i).hide();
				}
			}
		}
		if (conts === 2 && time !== "") {
			for (let i = 0; i < module_ul2.length; i++) {
				if (time === $('.module_ul2 .times').eq(i).text()) {
					module_ul2.eq(i).show();
				} else {
					module_ul2.eq(i).hide();
				}
			}
		}
		if (conts === 3 && time !== "") {
			for (let i = 0; i < module_ul3.length; i++) {
				if (time === $('.module_ul3 .times').eq(i).text()) {
					module_ul3.eq(i).show();
				} else {
					module_ul3.eq(i).hide();
				}
			}
		}
		if (conts === 4 && time !== "") {
			for (let i = 0; i < module_ul4.length; i++) {
				if (time === $('.module_ul4 .times').eq(i).text()) {
					module_ul4.eq(i).show();
				} else {
					module_ul4.eq(i).hide();
				}
			}
		}
	});
});
