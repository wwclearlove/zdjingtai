$(function(){
	$(".service-bot-sty1 li").mouseenter(function(){
		var i = $(this).index();
		i++;
		var path = '../../static/imgs/scientificcooperation/ser2_2.png';
		$(".service-bot-sty1 li").eq(i-1).children("img").attr('src',path); 
	})
	$(".service-bot-sty1 li").mouseleave(function(){
		var i = $(this).index();
		i++;
		var path = '../../static/imgs/scientificcooperation/ser2.png';
		$(".service-bot-sty1 li").eq(i-1).children("img").attr('src',path); 
	})
	$(".map iframe").load(function() {
		$(".map .loader").css("display", "none")
	})
})
