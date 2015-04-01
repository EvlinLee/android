
function getUrls(u,iid) {
    var api = (window.PLAY_URL && window.PLAY_URL != '') ? window.PLAY_URL : 'http://172.30.67.114:8080/app/reveal/?u=' ;
    var mapi = (window.MERGE_URL && window.MERGE_URL != '') ? window.MERGE_URL : 'http://172.30.67.114:8080/app/reveal/?u=' ;
    var ottApi = (window.OTT_API && window.OTT_API != '') ? window.OTT_API : false ;
    var hls,ottn,otth;
    var params = encodeURIComponent(u)+'&iid='+iid+'&quality=1&m3u8_location=http%3A%2F%2Frt.vsea.tv%2F%7Cflags%7C%2F%7Cid%7C.m3u8';
    hls = api+params;
	
    var ott = mapi + params;
    ott1 = ott+'&mode=getMergeUrl&seek=OTT&quality=1';
    ott2 = ott+'&mode=getMergeUrl&seek=OTT&quality=2';
	
    if (ottApi === false) {
        ottn = ott1;
        otth = ott2;
    } else {
        if (window.stbid && window.stbid != '') {
        	var _ott_api = ottApi + '?' + window.stbid + '&playurl=';
            ottn = _ott_api + encodeURIComponent(ott1);
            otth = _ott_api + encodeURIComponent(ott2);
        } else {
            otth = ottn = 'api://getStbid:' + window.location.href;
        }
    }
	
	return [hls,ottn,otth];
};

function alertPlay(u, iid, title, img){
	/*if (!window.PLAY_URL) {
		alert('页面数据未准备好, 请重试.');
		return;
	}*/
	
	var v = getUrls(u, iid);
	var hls = v[0];
	var ottn = v[1];
	var otth = v[2];
	if (window.sendOTTData) {
		var jsons = {
	        title: title,
	        img: img,
	        m_url: hls,
	        ottsd_url: ottn,
	        otthd_url: otth
	    };
	    var s = JSON.stringify(jsons);
	    console.log(s);
	    sendOTTData.send(s);
	}

	if (!window.SHOW_TAB || window.SHOW_TAB == 'yes') {
		//alert(ottn+"\n"+otth+"\n");
		var bendi = hls+'&playstyle=1';
		var ott = otth+'&playstyle=2';
		var dnla = otth+'&playstyle=3';
		
		$(".hls a").attr('href',bendi);
		$(".ottn a").attr('href',ott);
		$(".otth a").attr('href',dnla);
		
		$(".tanbg").show();
		$(".tan").show();
	}
}

	
function closePlay(){
	$(".tan").hide();
	$(".tanbg").hide();
}


(function(){
	if (window.sendOTTData)
		return;
	window.OTT_JSON_DATA = '';
	window.sendOTTData = {};
	window.sendOTTData.send = function (s) {
		window.OTT_JSON_DATA = s;
		var f = document.createElement('iframe');
		f.style.display = 'none';
		document.documentElement.appendChild(f);
		f.src = "cmd://SEND_OTT_DATA";
	};

})();

$(function(){
	var str = '<div class="tanbg" onClick="closePlay();"></div><div class="tan"><div class="hls"><a id="hls" href="">本地</a></div><div class="ottn"><a href="">机顶盒</a></div><div class="otth"><a href="">安卓盒子</a></div><div><a href="javascript:void();" onClick="closePlay();">取消</a></div></div>';
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

