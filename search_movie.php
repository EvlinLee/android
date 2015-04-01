<?php
require dirname(__FILE__).'/config.php';

$url = isset($url)?$url:'';
if(empty($url)) ShowMsg();
$_url = 'http://www.soku.com'.$url;
$rs = Net::curl($_url);
//基础字段
$basicinfo = array();
//存入infos字段内
$instr = array();
//对应SOKU的地址
//标题
$basicinfo['title'] = cut_preg($rs,'<li class="base_name">','</li>','/<h1>\s*([\w\W]*?)\s*<\/h1\>/six');
if(empty($basicinfo['title'])) return;
//年份
$basicinfo['year'] = cut_preg($rs,'<li class="base_pub">','</li>','/(\d+)/six');
//50集电视剧
$basicinfo['what'] = cut_preg($rs,'<li class="base_what">','</li>','/(\S+)/six');
//图片
$basicinfo['image'] = cut_preg($rs,'<li class="p_thumb">','</li>','/src=\"([\w\W]*?)\"/six');
//内容
$content = cut($rs,'<ul class="params">','</ul>');
$star = preg($content,'/<label>\s*([\w\W]*?)\s*<\/label>\s*<span>\s*([\w\W]*?)\s*<\/span>/six',1);
foreach($star as $v){
	$k = str_ireplace(':','',$v[1]);
	$instr[$k] = strip_tags($v[2]);
}
//剧情简介
$desc = preg($rs,'/<div\s+class=\"intro\">\s*([\w\W]*?)\s*<\/div>/six');
$desc = empty($desc[1])?'':strip_tags($desc[1]);
$desc = str_ireplace('剧情简介:','',$desc);
$desc = str_ireplace('...','',$desc);
$desc = str_ireplace('显示详情','',$desc);
$instr['剧情简介'] = $desc;
//优酷评分
$pinfen = cut($rs,'<div class="rating">','</div>');
$pinfen = preg($pinfen,'/<em\s+class=\'num\'>([\d\.]*)<\/em>/six');
$instr['优酷评分'] = empty($pinfen[1])?'暂无':$pinfen[1];
$basicinfo['infos'] = $instr;
//采集播放地址
$juji_wrap = preg($rs,'/<ul\s+class=[\"\']linkpanel\s*[\w\W]*?\s*<\/ul>/six',2);
$juji_str = '';
foreach($juji_wrap[0] as $val){
	$juji_str .= $val;
}

$juji = preg($juji_str,'/<a\s+href=[\"\'](?P<url>\S+?)[\"\']\s*[\w\W]*?\s*>\s*(?P<benji>[\w\W]*?)\s*<\/a>/six',1);
//添加预告片
$herald = preg($rs,'/<a\s+class="btn_herald"\s+target="\_blank"\s+href=[\"\'](?P<url>\S+?)[\"\']\s*[\w\W]*?\s*>\s*(?P<benji>[\w\W]*?)\s*<\/a>/six');
if(!empty($herald))
	$juji[] = $herald;

if(!empty($juji)){
	//倒转array
	$movies_play = array();
	foreach($juji as $k=>$v){
	  	if (strstr($v['url'],'http')){		
			unset($v[0]);
			unset($v[1]);
			unset($v[2]);
			$play_url = $v['url'];
			if(strstr($play_url,'youku.com')){
				$v['site']='youku';
			}else if(strstr($play_url,'tudou.com')){
				$v['site']='tudou';
			}
			else if(strstr($play_url,'qq.com')){
				$v['site']='qq';
			}
			else if(strstr($play_url,'sohu.com')){
				$v['site']='sohu';
			}
			else if(strstr($play_url,'letv.com')){
				$v['site']='letv';
			}
			else if(strstr($play_url,'iqiyi.com')){
				$v['site']='iqiyi';
			}
			else if(strstr($play_url,'cntv.')){
				$v['site']='cntv';
			}
			else if(strstr($play_url,'funshion.com')){
				$v['site']='funshion';
			}
			else if(strstr($play_url,'sina.com')){
				$v['site']='sina';
			}
			else if(strstr($play_url,'m1905.com')){
				$v['site']='m1905';
			}
			else if(strstr($play_url,'56.com')){
				$v['site']='56';
			}
			else if(strstr($play_url,'ifeng.com')){
				$v['site']='ifeng';
			}
			else if(strstr($play_url,'wasu.cn')){
				$v['site']='wasu';
			}
			else if(strstr($play_url,'joy.cn')){
				$v['site']='joy';
			}
			else if(strstr($play_url,'ku6.com')){
				$v['site']='ku6';
			}
			else{
				$v['site']='未知';
			}
			$v['title'] = $basicinfo['title'];
			if(empty($v['benji'])){
				$v['benji'] = '播放';
			}
			$site = $v['site'];
			if(in_array($site,$cfg_source)){
				$movies_play[$site][] = $v;
			}
		}
	}
}
	
if(empty($movies_play)){
	$smarty->assign('tishi','很抱歉！无可播放的源，请收看其他节目。');
}else{
	foreach($movies_play as $k=>$v){
	$from[] = mvfrom($k);
	}
	//$from = array_pad($from,10,'false');
	$smarty->assign('from',$from);
	//var_dump($from);exit;
	$smarty->assign('movies',$movies_play);
	
	//返回播放列表的第一个剧集用于播放
	$first_movie = array_shift($movies_play);
	$first_movie = array_shift($first_movie);
	$smarty->assign('first_movie',$first_movie);
}
//传入当前地址以供收藏
$now_url = "search_movie.php?url=".$url;
$smarty->assign("now_url",$now_url);

//列表展示模式
if(strstr($basicinfo['what'],'资讯') || strstr($basicinfo['what'],'综艺') || strstr($basicinfo['what'],'记录片')){
	$smarty->assign('show_style','loog');
}else{
	$smarty->assign('show_style','short');
}
$smarty->assign('desc',$basicinfo);
$smarty->display('search_movie.html');