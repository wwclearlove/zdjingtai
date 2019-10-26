$(document).ready(function () {
	const moduleUl = $(".module-tab-box-ma");
	var conts = 0;
	var num = 0;
	$("#selectChooseType").change(function () {
		for (let i = 0; i < moduleUl.length; i++) {
			moduleUl.eq(i).hide();
		}
		moduleUl.eq($(this).val()).show();
		conts = parseInt($(this).val());
	});
	$("#selectChooseTime").change(function () {
		const liN01 = $('.module_ul1 li').length;
		const liN02 = $('.module_ul2 li').length;
		const liN03 = $('.module_ul3 li').length;
		const liN04 = $('.module_ul4 li').length;
		//module_ul1
		if ($(this).val() === "2" && conts === 1) {		//升序
			for (let i = liN01; i >= 1; i--) {
				$('.module_ul1').append('<li>' + $('.module_ul1 li').eq(i - 1).html() + '</li>');
				$('.module_ul1 li').eq(i - 1).remove();
			}
			num = 2;
		} else if ($(this).val() === "1" && conts === 1 && num === 2) {		//降序
			for (let i = liN01; i >= 1; i--) {
				$('.module_ul1').append('<li>' + $('.module_ul1 li').eq(i - 1).html() + '</li>');
				$('.module_ul1 li').eq(i - 1).remove();
			}
		}
		//module_ul2
		if ($(this).val() === "2" && conts === 2) {		//升序
			for (let i = liN02; i >= 1; i--) {
				$('.module_ul2').append('<li>' + $('.module_ul2 li').eq(i - 1).html() + '</li>');
				$('.module_ul2 li').eq(i - 1).remove();
			}
			num = 2;
		} else if ($(this).val() === "1" && conts === 2 && num === 2) {		//降序
			for (let i = liN02; i >= 1; i--) {
				$('.module_ul2').append('<li>' + $('.module_ul2 li').eq(i - 1).html() + '</li>');
				$('.module_ul2 li').eq(i - 1).remove();
			}
		}
		//module_ul3
		if ($(this).val() === "2" && conts === 3) {		//升序
			for (let i = liN03; i >= 1; i--) {
				$('.module_ul3').append('<li>' + $('.module_ul3 li').eq(i - 1).html() + '</li>');
				$('.module_ul3 li').eq(i - 1).remove();
			}
			num = 2;
		} else if ($(this).val() === "1" && conts === 3 && num === 2) {		//降序
			for (let i = liN03; i >= 1; i--) {
				$('.module_ul3').append('<li>' + $('.module_ul3 li').eq(i - 1).html() + '</li>');
				$('.module_ul3 li').eq(i - 1).remove();
			}
		}
		//module_ul4
		if ($(this).val() === "2" && conts === 4) {		//升序
			for (let i = liN04; i >= 1; i--) {
				$('.module_ul4').append('<li>' + $('.module_ul4 li').eq(i - 1).html() + '</li>');
				$('.module_ul4 li').eq(i - 1).remove();
			}
			num = 2;
		} else if ($(this).val() === "1" && conts === 4 && num === 2) {		//降序
			for (let i = liN04; i >= 1; i--) {
				$('.module_ul4').append('<li>' + $('.module_ul4 li').eq(i - 1).html() + '</li>');
				$('.module_ul4 li').eq(i - 1).remove();
			}
		}
	});
	$(".news_list_Div").click(function () {
		for (let i = 1; i < moduleUl.length; i++) {
			moduleUl.eq(i).hide();
		}
		$("#selectChooseType").val('0');
		$("#selectChooseTime").val('0');
		$(".module-tab-box-ma").eq(0).show();
		num = 0;
	})
});
