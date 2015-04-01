<?php /* Smarty version 2.6.26, created on 2015-04-01 02:06:14
         compiled from header.html */ ?>
<script type="text/javascript" src="templates/<?php echo $this->_tpl_vars['cfg_template']; ?>
/js/iscroll.js?v=4.0"></script>
<nav>
	
    <a href="index.php" class="logo">聚合视频<em><b></b></em></a>
    
    <div class="nav_menus">
        <form class="item search" id="item search" action="search.php" method="get">
            <button type="submit">搜索</button>
            
            <span id="s_wrap"><input type="search" id="top_search" name="wd" value="" autocomplete="off" />
            <b class="icon icon_search"><em></em></b>
            </span>
            
        </form>
        <a class="item icon_history"><span><b class="icon"><em><em></em></em></b><b class="num"></b></span></a>
    </div>
    
    <!-- 频道导航 -->
    <div class="channel_nav scroll_wrap">
    	<div class="scroller" id="wrapper">
            <ul>
                <li><a href="index.php" position="index">首页</a></li>
                <li><a href="screen.php" position="screen">多屏</a></li>
                <li><a href="tvlive.php" position="tvlive">直播</a></li>
                <li><a href="monitor.php" position="zongyi">监控</a></li>
                <li><a href="channel.php?class=2" position="movie">电影</a></li>
                <li><a href="channel.php?class=1" position="tv">电视剧</a></li>
                <li><a href="channel.php?class=3" position="zongyi">综艺</a></li>
                <li><a href="channel.php?class=4" position="dongman">动漫</a></li>
                <li><a href="news.php" position="news">新闻</a></li>
                <li><a href="music.php" position="music">音乐</a></li>
            </ul>
        </div>
    </div>
</nav>
<div class="hot_wrap" id="hot_wrap">
</div>


<style>
.scroll_wrap { width:100%;}
.scroller { height: 40px; }
.scroller ul { display: block; width:460px}
@media only screen and (min-width:460px) {
.scroller ul { width:800px}
}
.scroller li { float: left; display:block; }
</style>

<script type="text/javascript">
$(function(){
	//var Scroll = new iScroll('wrapper',{vScroll: true,vScroll: false,hScrollbar:false,vScrollbar:false});
	var myscroll;
	function loaded(){
		myscroll=new iScroll("wrapper",{hScrollbar:false,vScrollbar:false});
	}
   	window.addEventListener("DOMContentLoaded",loaded,false);
	
	
	//当前页面导航高亮
	var href = window.location.href.split('/')[window.location.href.split('/').length-1].substr(0,20);
	
	if(href.length > 0){
		$(function(){
			$(".scroller a[href^='"+href+"']").attr("class","c");
		});
	}else{
		$(function(){$(".scroller a[href^='index']").attr("class","c")});
	}
		
	$("#top_search").focus(function(){
		$("#s_wrap").animate({width:'110px'});
		//$("#top_search").placeholder = '';
	});
	$("#top_search").blur(function(){
		var keyword = $("#top_search").val();
		if(keyword == ""){
			$("#s_wrap").animate({width:'50px'},"slow");
			$("#hot_wrap").hide();
		}
	});
	$("form").submit(function(e){
	  
		var keyword = $("#top_search").val();
		if(keyword != ""){
			return true;
		}else{
			return false;	
		}
	});
	
	$("#top_search").keyup(function(){

		var keyword = $("#top_search").val();
		loadXMLDoc(keyword);
		/*if(keyword == ""){
			$("#hot_wrap").hide();
		}else{
			loadXMLDoc(keyword);
		}*/
  	});
	
	//输入法异步联想
	function loadXMLDoc(key)
	{
	var xmlhttp;
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
		if(xmlhttp.responseText != ''){
			document.getElementById("hot_wrap").innerHTML=xmlhttp.responseText;
			$("#hot_wrap").show();
		}
		}
	  }
	xmlhttp.open("GET","search_from.php?action=think&key="+key,true);
	xmlhttp.send();
	}
	
});

</script>