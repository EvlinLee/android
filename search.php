<?php
require dirname(__FILE__).'/config.php';
$action = isset($action)?$action:NULL;
$q = isset($wd)?trim($wd):'';
$page = empty($page)?1:intval($page);
$short_movies = array();
if(empty($wd)) header('Location:index.php');
//保存搜索的历史记录
/*if(isset($userid)){
	sethostory($q,$userid);
}*/

//搜索路径
$single_url = 'http://www.soku.com/v?keyword='.$q.'&curpage='.$page;
//采集HTML
$single_html = Net::curl($single_url);
$movies = array();
$main_str = preg($single_html,'/<li\s+class=\"p_link\">\s*[\w\W]*?\s*<\/li>\s+<li\s+class=\"p_thumb\">\s*[\w\W]*?\s*<\/li>/six',2);
$_str = $main_str[0];
if(is_array($_str) && count($_str)>0){
	foreach($_str as $v){
		$v_url = preg($v,'/href=\"([\w\W]*?)\"/');
		$v_url = $v_url[1];
		$v_title = preg($v,'/\s+title=\"([\w\W]*?)\"/');
		$v_title = $v_title[1];
		$v_img = preg($v,'/src=\"([\w\W]*?)\"/');
		$v_img = $v_img[1];
		if(strstr($v_url,'/detail/show/')){
			$singe = array();
			$singe['playlist_url'] = $v_url;
			$singe['playlist_title'] = $v_title;
			$singe['playlist_pic'] = $v_img;
			$movies[$v_url] = $singe;
		}
	}
}

//更多相关栏目采集
$other_str = preg($single_html,'/<div\s+class=\"sk-exp-three\">\s*[\w\W]*?\s*<\/ul>\s*<\/div>/six',2);
if(is_array($other_str) && count($other_str)>0){
	$other_str = isset($other_str[0][0])?$other_str[0][0]:'';
	if(!empty($other_str)){
		$other_str = preg($other_str,'/<li>\s*[\w\W]*?\s*<\/li>/six',2);
		$other_str= $other_str[0];
		foreach($other_str as $v){
			$v_url = preg($v,'/href=\"([\w\W]*?)\"/');
			$v_url = $v_url[1];
			$v_title = preg($v,'/\s+_log_title=\"([\w\W]*?)\"/');
			$v_title = $v_title[1];
			$v_img = preg($v,'/src=\"([\w\W]*?)\"/');
			$v_img = $v_img[1];
			if(strstr($v_url,'/detail/show/')){
				$singe = array();
				$singe['playlist_url'] = $v_url;
				$singe['playlist_title'] = $v_title;
				$singe['playlist_pic'] = $v_img;
				$movies[$v_url] = $singe;
			}
		}
	}
}


//短视频采集
$short_wrap = preg($single_html,'/<div\s+class=[\'\"]v[\'\"]>\s*[\w\W]*?\s*<\/div>\s*<\/div>\s*<\/div>/six',2);
$short_str = $short_wrap[0];

//var_dump($short_wrap);exit;
if(is_array($short_str) && count($short_str)>0){
	foreach($short_str as $v){
		$short_movie = array();
		$v_img = preg($v,'/src=\"(?<image>\s*[\w\W]*?\s*)\"/six');
		$short_movie['vod_pic'] = $v_img['image'];
		$v_title = preg($v,'/alt=\"(?<title>\s*[\w\W]*?\s*)\"/six');
		$short_movie['vod_title'] = $v_title['title'];
		$v_url = preg($v,'/href=\"http\:\/\/www\.soku\.com\/u\?url\=(?<url>\s*[\w\W]*?\s*)\"/six');
		$short_movie['vod_url'] = $v_url[1];
		$play_url = $short_movie['vod_url'];
		
		if(strstr($play_url,'v.youku.com')){
			$short_movie['vod_site']='youku';
			
		}else if(strstr($play_url,'www.tudou.com')){
			$short_movie['vod_site']='tudou';
		}
		
		else if(strstr($play_url,'tv.sohu.com')){
			$short_movie['vod_site']='sohu';
		}
		
		else if(strstr($play_url,'v.pptv.com')){
			$short_movie['vod_site']='pptv';
		}
		
		else if(strstr($play_url,'www.letv.com')){
			$short_movie['vod_site']='letv';
		}
		
		else{
			$short_movie['vod_site']='unknow';
		}
		
		if(in_array($short_movie['vod_site'],$cfg_source)){
			$short_movies[$v_url[1]] = $short_movie;
		}
		
	}
}

if($action == 'more'){
	if(isset($short_movies)){
		$str = '<h1 class="cate_title">第'.$page.'页</h1><dl class="item_list channel_122 column_15">';
		foreach($short_movies as $v){
			$str .= '
			<dd>
                <div>
                <a onclick="tanPlay(\''.$v['vod_url'].'\')" class="cover">
                    <b style="background-image:url('.$v['vod_pic'].')"></b>
                </a>
                <p>
                    <a onclick="tanPlay(\''.$v['vod_url'].'\')">'.$v['vod_title'].'</a>
                </p>
                </div>
            </dd>
			';		
		}
		$str .= '</dl>';
		echo $str;
	}
	
}else{
	$short_movies = array_values($short_movies);
	$smarty->assign('short_movies',$short_movies);
	
	$smarty->assign('keyword',urlencode($q));
	$smarty->assign('keyword_cn',$q);
	
	$movies = array_values($movies);
	$smarty->assign('movies',$movies);
	
	$smarty->display('searchResult.html');	
}

?>