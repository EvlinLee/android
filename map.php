<?php
require dirname(__FILE__).'/config.php';
$lng = isset($lng)?$lng:'118.749392';
$lat = isset($lat)?$lat:'31.967836';
$sql = "SELECT * FROM #@__camera WHERE enable=1";

$dosql->Execute($sql);
?>
<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,minimal-ui" name="viewport">
<meta name="format-detection" content="telephone=no" searchtype="map">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<title>高德地图</title>
<style type="text/css">
html{height:100%}
body{height:100%;margin:0px;padding:0px}
#container{height:100%}
</style>
<link rel="stylesheet" type="text/css" href="templates/<?php echo $cfg_template;?>/css/list.css" />
<script type="text/javascript" src="http://webapi.amap.com/maps?v=1.3&key=71c955ab527896b046fad6a431994c5b"></script>
<script type="text/javascript">
var mapObj,toolBar;
//初始化地图对象，加载地图
function mapInit(){
	mapObj = new AMap.Map("container",{
		//二维地图显示视口
		view: new AMap.View2D({
			center:new AMap.LngLat(<?php echo $lng;?>,<?php echo $lat;?>),//地图中心点
			zoom:13 //地图显示的缩放级别
		})
	});
	console.log(mapObj);
	//地图中添加地图操作ToolBar插件
	/*mapObj.plugin(["AMap.ToolBar"],function(){
		toolBar = new AMap.ToolBar();
		mapObj.addControl(toolBar);
	});*/
	
	//地图初始化时，在地图上添加一个marker标记,鼠标点击marker可弹出自定义的信息窗体
	<?php 
	while($row = $dosql->GetArray()){
	?>
	var marker<?php echo $row['id'];?> = new AMap.Marker({	 
	map:mapObj,
	position:new AMap.LngLat(<?php echo $row['lng'];?>,<?php echo $row['lat'];?>), //位置 
	<?php 
	if($row['lng'] == $lng && $row['lat'] == $lat){
		echo 'icon:"/map/img/1.png"';
	}else{
		echo 'icon:"/map/img/0.png"';
	}
	?>
	//复杂图标
	});
	AMap.event.addListener(marker<?php echo $row['id'];?>,'click',function(){ //鼠标点击marker弹出自定义的信息窗体
		//实例化信息窗体
		var infoWindow = new AMap.InfoWindow({
			isCustom:true,  //使用自定义窗体
			content:createInfoWindow('<?php echo $row['title'];?>',"<a href='http://218.94.4.146:19000/RESTfull/cc_api.php?req=hlsdemoex'><img src='/map/img/monitor.jpg' style='position:relative;float:left;margin:0 5px 5px 0;'>地址：<?php echo $row['address'];?></a>"),
			offset:new AMap.Pixel(16, -45)//-113, -140		
			});
		infoWindow.open(mapObj,marker<?php echo $row['id'];?>.getPosition());
	});
	<?php
	}
	?>
}

//添加marker标记
function addMarker(lng,lat){
  // mapObj.clearMap();
  
}


	
//构建自定义信息窗体
function createInfoWindow(title,content){
	var info = document.createElement("div");
	info.className = "info";

	//可以通过下面的方式修改自定义窗体的宽高
	//info.style.width = "400px";

	// 定义顶部标题
	var top = document.createElement("div");
	top.className = "info-top";
	  var titleD = document.createElement("div");
	  titleD.innerHTML = title;
	  var closeX = document.createElement("img");
	  closeX.src = "http://webapi.amap.com/images/close2.gif";
	  closeX.onclick = closeInfoWindow;
	
	top.appendChild(titleD);
	top.appendChild(closeX);
	info.appendChild(top);
	
	// 定义中部内容
	var middle = document.createElement("div");
	middle.className = "info-middle";
	middle.style.backgroundColor='white';
	middle.innerHTML = content;
	info.appendChild(middle);
	
	// 定义底部内容
	var bottom = document.createElement("div");
	bottom.className = "info-bottom";
	bottom.style.position = 'relative';
	bottom.style.top = '0px';
	bottom.style.margin = '0 auto';
	var sharp = document.createElement("img");
	sharp.src = "http://webapi.amap.com/images/sharp.png";
	bottom.appendChild(sharp);	
	info.appendChild(bottom);
	return info;
}

//关闭信息窗体
function closeInfoWindow(){
	mapObj.clearInfoWindow();
}
</script>
</head>
 
<body onload="mapInit()">
<style>
.scroll_wrap { width:100%;}
.scroller { height: 40px; overflow: hidden; text-align:center;}

</style>
<nav>
        <div class="channel_nav scroll_wrap">
            <div class="scroller">
            	<a style=" position:absolute; left:0px;" href="javascript:window.history.back();">返回</a>
            	<a>地图</a>
            </div>
        </div>
    </nav>


<div id="container"></div>

</body>
</html>