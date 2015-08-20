$(document).ready(function(){
	$("ul.left-name>li").click(function(){
		var name_list=new Array("one","two","three","four","five","six");
		
		//获取当前被触发的标题对应的标示其位置的class的值
		var $curr_li=$(".name-clicked").eq(0);
		var curr_name=$curr_li.attr("class").split(" ")[0];
		
		//获取下一个即将显示内容的class的值
		var next_name=$(this).attr("class");
		
		var curr_pos=name_list.indexOf(curr_name);
		console.log("current position:"+curr_pos);
		
		var next_pos=name_list.indexOf(next_name);
		console.log("next position:"+next_pos);
		
		if(next_pos>curr_pos){
			//左边标题样式变化
			$(this).attr("class",next_name+" name-clicked");
			$curr_li.attr("class",curr_name);
		
			//图片由上向下滑动
			$(".right-content1").css("top","-316px");
			$(".right-content0").css("top","0px");
			$(".right-content-wrapper").css("top","0px");
			$(".right-content-wrapper").animate({top:"316px",transform:"translate(0px,316px)"},1000);
			//$(".right-content").animate({"top":"316px"},1000);
		}else if(next_pos<curr_pos){
			//左边标题样式变化
			$(this).attr("class",next_name+" name-clicked");
			$curr_li.attr("class",curr_name);
		
			//图片由下向上滑动
			$(".right-content1").css("top","316px");
			$(".right-content0").css("top","0px");
			$(".right-content-wrapper").css("top","0px");
			$(".right-content-wrapper").animate({top:"-316px"},1000);
		}
	});
});