
function getUrls(u,iid) {
	var r = [];
	var stbid = window.stbid || undefined;
	if (stbid) {
		stbid = stbid.slice(6);
	}
	var stburl = false; //stbid ? false : 'api://getStbid:' + window.location.href ;
	
	// HLS
	r.push('http://api-dev.vsea.tv:8080/app/reveal/?u='+encodeURIComponent(u));
	
	// OTT-TV
	if ( stburl ) {
		r.push(stburl);
	} else {
		var api = 'http://api-dev.vsea.tv/polymer/play/play.php?u='+encodeURIComponent(u)+'&mode=getMergeUrl&quality=2&seek=OTT&r=http://192.168.0.15:8090/ott_main.html';
		r.push('http://api-dev.vsea.tv:8090/need/play/'+stbid+'/'+encodeURIComponent(api));
	}

	return r;
};



function tanPlay(u, iid, title, img){
	var v = getUrls(u, iid);
	
	for(var i=0; i<v.length; i++) {
		$("#p"+i+" a").attr('href',v[i]);
	}

	$(".tanbg").show();
	$(".tan").show();
}


function closePlay(){
	$(".tan").hide();
	$(".tanbg").hide();
}


$(function(){
	var p = ['HLS','OTT-TV'];
	var pstr = '';
	for(var i=0; i<p.length; i++) {
		pstr += '<div id="p'+i+'"><a href="">'+p[i]+'</a></div>';
	}
	var str = '<div class="tanbg" onClick="closePlay();"></div><div class="tan">'+pstr+'<div><a href="javascript:void();" onClick="closePlay();">取消</a></div></div>';
		str = str+'<style type="text/css">';
		str = str+'.tanbg{display:none; width:100%; height:100%; background:#000; position:fixed; left:0; top:0px; z-index:999;filter:Alpha(Opacity=30);opacity:0.3; }';
		str = str+'.tan{width:100%; height:230px; display:none;position:fixed; left:0; bottom:0px; z-index:9999;}';
		str = str+'.tan div{ width:60%; margin:0 auto; text-align:center; margin-top:10px; line-height:40px;}';
		str = str+'.tan div a{background: none repeat scroll 0 0 #EEEEEE;background: none repeat scroll 0 0 #EEEEEE; border: 1px solid #DDDDDD; border-radius: 3px;box-shadow: 0 1px 0 rgba(255, 255, 255, 0.5) inset; color: #AAAAAA;display: block;font-weight: 700;margin:0 4px;overflow: hidden;text-overflow: ellipsis;text-shadow: 0 1px 0 #FFFFFF;white-space: nowrap;text-align:center;}';
		str = str+'.tan div a:hover{background: none repeat scroll 0 0 #C21408;border: 1px solid #9E1007;color:#FFF;}';
		str = str+'</style>';

	$("body").append(str);
	$("#hls").focus();
});

