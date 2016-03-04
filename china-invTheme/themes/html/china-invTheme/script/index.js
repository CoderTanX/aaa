/*********导航栏下拉菜单显示**************/
$(document).ready(function() {
	var nav = $(".nav_con");
	var navlinks = $(".nav_con li");
	var subnav = $(".nav_pull");
	var subnavs = subnav.find(".hide_pull");
	var cons = subnav.find(".pull_con");
	var bgs = subnav.find(".bg");
	var curIndex = -1;
	navlinks.each(function() {
		$(this).bind("mouseenter", function() {
			var nav_index = navlinks.index(this);
			if (nav_index == curIndex) { return false; }
			var lastIndex = curIndex;
			curIndex = nav_index;
			navlinks.find("i").stop(true, true).fadeOut(500);
			$(this).find("i").stop(true, true).fadeIn(500);
			subnav.slideDown();
			subnavs.css("z-index", 0);
			subnavs.eq(nav_index).css("z-index", 10);
			cons.hide();
			cons.eq(nav_index).show();
			bgs.eq(lastIndex).stop(true, true);
			bgs.eq(nav_index).stop(true, true).fadeIn(500, function() {
				if (lastIndex > -1) {
					bgs.eq(lastIndex).fadeOut(0);
				}
			});
		});
	});
	nav.bind("mouseleave", function(e) {
		if (!subnav.has(e.relatedTarget).length) {
			navlinks.find("i").stop(true, true).fadeOut(500);
			subnav.stop(true, false).slideUp();
			curIndex = -1;
		}
	});
	subnav.bind("mouseleave", function(e) {
		if (!nav.has(e.relatedTarget).length) {
			navlinks.find("i").stop(true, true).fadeOut(500);
			subnav.stop(true, false).slideUp();
			curIndex = -1;
		}
	});
	/*var nav = $(".nav_con");
	var navlinks = $(".nav_con li");
	var subnav = $(".nav_pull");
	var subnavs = subnav.find(".hide_pull");
	var cons = subnav.find(".pull_con");
	var bgs = subnav.find(".bg");
	var curIndex = -1;
	navlinks.each(function() {
	  //	if(!$(navlinks).is(":animated")) {
			$(this).bind("mouseenter", function() {
				var nav_index = navlinks.index(this);
				var lastIndex = curIndex;
				curIndex = nav_index;
				subnav.stop(true,false).slideDown();
				subnavs.stop(true,false).css("z-index", 0);
				subnavs.eq(nav_index).stop(true,true).css("z-index", 10);
				cons.stop(true,true).hide();
				cons.eq(nav_index).stop(true,true).show();
				bgs.eq(nav_index).stop(true,true).fadeIn(500, function() {
					if (lastIndex > -1) {
						bgs.eq(lastIndex).stop(true,false).fadeOut(0);
					}
				});
			});
		//}
	});
	nav.bind("mouseleave", function(e) {
		//if(!$(nav).is(":animated")) {
			if (!subnav.has(e.relatedTarget).length) {
				$(".nav_pull").stop(true,false).slideUp();
				bgs.hide();
				$(".pull_con").hide();
				$(".hide_pull").hide();
				curIndex = -1;
			}
		//}	
	});
	subnav.bind("mouseleave", function(e) {
		//if(!$(subnav).is(":animated")) {
			if (!nav.has(e.relatedTarget).length) {
				$(".nav_pull").stop(true,false).slideUp();
				bgs.hide();
				$(".pull_con").hide();
				$(".hide_pull").hide();
				curIndex = -1;
			}
		//}
	});*/
/*****主页新闻翻滚******/
 $(".news").Scroll({line:1,speed:500,timer:3000,up:"up_btn",down:"down_btn"});
/*****主页公司简介和投资业务切换*****/
	var intro_business = $(".intro_business");
$(".intro_title").click(function() {
	intro_business.removeClass("business_bg");
	intro_business.addClass("intro_bg");
	$(this).siblings(".business_title").find(".intro_main").hide();
	$(this).find(".intro_main").show();
	$(".bg_map").hide();
});
$(".business_title").click(function() {
	intro_business.removeClass("intro_bg");
	intro_business.addClass("business_bg");
	$(this).siblings(".intro_title").find(".intro_main").hide();
	$(this).find(".intro_main").show();
	$(".bg_map").show();
});
/********下载中心********/
/*********投资组合********/
	var down_li = $(".down_menu_ul li");
	var down = $(".down");
	down_li.click(function() {
		var menu_index = down_li.index(this);
		$(this).siblings("li").removeClass("current");
		$(this).siblings("li").find("i").hide();
		$(this).addClass("current");
		$(this).find("i").show();
		down.children("div").hide().eq(menu_index).show();
		/*portfolio_con.children("div").eq(menu_index).show();*/
	});
/*********投资组合********/
	var menu_li = $(".menu_ul li");
	var portfolio_con = $(".portfolio_con");
	menu_li.click(function() {
		var menu_index = menu_li.index(this);
		$(this).siblings("li").removeClass("current");
		$(this).siblings("li").find("i").hide();
		$(this).addClass("current");
		$(this).find("i").show();
		portfolio_con.children("div").hide().eq(menu_index).show();
		/*portfolio_con.children("div").eq(menu_index).show();*/
	});
/*********投资组合********/
	var committee = $(".committee li");
	var sub_mechanism =  $(".sub_mechanism");
	committee.click(function() {
		var committee_index = committee.index(this);
		$(this).siblings("li").removeClass("current");
		$(this).siblings("li").find("i").hide();
		$(this).addClass("current");
		$(this).find("i").show();
		$(".committee_intro").hide();
		sub_mechanism.children("div").hide().eq(committee_index).show();
		/*sub_mechanism.children("div").eq(committee_index).show();*/
	});	
/**********中投国际切换效果********/
	$(".CICInternational .more").click(function(){
		$(this).siblings('div').show();
		$(this).hide();
	});
	$(".CICInternational .hide_btn").click(function(){
		$(this).parent('div').hide();
		$(this).parent('div').siblings(".more").show();
	});
/**********常见问题***********/
$(".cut").click(function() {
	$(this).parent('h2').find(".cut").toggle();
	$(this).parent('h2').siblings(".hide").toggle();
});
/**分页**/
$(".paging li .paging_num").hover(function(){
	$(this).toggleClass("cur");
})

//视频弹出层
	var video =$(".high_level_events_details .down_btn1");
	var video1 =$(".news .down_btn1");
	var videowrap = $(".videowrap");
	video.click(function(event) {
		event.preventDefault();
		videowrap.show();
		$(".black_overlay").show();
		var videocover = $(this).attr('video-cover');
		var videourl = $(this).attr('video-url');
		videowrap.find('div.video').attr('id', 'videoid');
		
		jwplayer("videoid").setup({
			stretching: "fill",
			image: videocover,
			flashplayer: "/china-invTheme/themes/html/china-invTheme/jwplayer/player.swf",
			levels: [
				{file: videourl}
			],
			control: false,
			width: 658,
			height: 348
		});
	});
	video1.click(function(event) {
		videowrap.show();
		$(".black_overlay").show();
		var videocover = $(this).attr('video-cover');
		var videourl = $(this).attr('video-url');
		videowrap.find('div.video').attr('id', 'videoid');
		
		jwplayer("videoid").setup({
			stretching: "fill",
			image: videocover,
			flashplayer: "/china-invTheme/themes/html/china-invTheme/jwplayer/player.swf",
			levels: [
				{file: videourl}
			],
			control: false,
			width: 658,
			height: 348
		});
	});

	$(".videowrap .close").click(function() {
	    jwplayer("videoid").stop();
		videowrap.hide();
		$(".black_overlay").hide();
	});

changeWdith();

       $(window).resize(function(event) {

                   changeWdith();

         });

});
function changeWdith(){

         var $width = $(document.body).width();

         if($width < 960){

                   $(".page").css("width",960);

                   $(".content").css("width",960);

         }else{

                   $(".page").css("width",'100%');

                   $(".content").css("width",'100%');

         }

}
/******banner开始********/
var n = 0;
function autoroll() {
	var ul = $(".lxfscroll ul");
	var li = $(".lxfscroll li");
	if(n >= 4) {
		n = 0;
	}
	li.css("display","none");	
	li.eq(n).css({"display":"block","z-index":"88"});	
	n++;
	
	};
setInterval("autoroll()", 3000);

/***banner结束***/
/********提交需求******/
function checkForm(){
	var $name = $(".name");
	var $phone = $(".phone");
	var $mail = $(".mail");
	var $demand = $(".demand");
	var $msg_form = $(".msg_form");
	var name = $(".name").val();
	var phone = $(".phone").val();
	var mail = $(".mail").val();
	var demand = $(".demand").val();
	var msg_form = $(".msg_form");
	if(name.trim().length == 0){
		$name.focus().siblings(".warn").show();
		$name.keydown(function() {
			$(".warn").hide();
		});
		return false;
	}
	if(phone.trim().length == 0){
		$phone.focus().siblings(".warn").show();
		$phone.keydown(function() {
			$(".warn").hide();
		});
		return false;
	}
	if(mail.trim().length == 0){
		$mail.focus().siblings(".warn").show();
		$mail.keydown(function() {
			$(".warn").hide();
		});
		return false;
	}
	if(demand.trim().length == 0){
		$demand.focus().siblings(".warn").show();
		$demand.keydown(function() {
			$(".warn").hide();
		});
		return false;
	}
	return true;
}





















