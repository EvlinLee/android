<?php
require dirname(__FILE__).'/config.php';
//mid为传过来的电影剧集的id
if(isset($mid)){
	$mid = (int)$mid;
	
	$sql = 'SELECT * FROM `#@__playlist` WHERE `playlist_id`='.$mid.'';
	$info = $dosql->GetOne($sql);
	if(isset($info['id']))
		$info = htmlencode($info);
	
	$mv_sql = 'SELECT `vod_id`,`vod_title`,`vod_file_urls`,`vod_url`,`vod_site` FROM `#@__vod` WHERE `vod_playlist`='.$mid.' AND `vod_delstate`=0 ORDER BY vod_id';
	
	$v_list = $dosql->GetAll($mv_sql);
	
	
	$v_list = ($info['playlist_class'] == 3)?$v_list:array_reverse($v_list);
	
	foreach($v_list as $v){
		$v['vod_playlist_title'] = $info['playlist_title'];
		$movies[$v['vod_site']][] = $v;
	}
	
	$movies = source_order($movies);
	
	$movies = array_slice($movies,0,1,true);
	
	$movies = htmlencode($movies);
	
	/*$movies = array();
	$movies['cmos'] = $v_list;
	print_r($movies);exit;*/
	$smarty->assign('info',$info);
	
	$smarty->assign('movies',$movies);
}

$smarty->display('movie.html');