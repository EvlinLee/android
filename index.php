<?php
require dirname(__FILE__) . '/config.php';

$channel_array = array(1,2,3,4);
$programs_array = array();
foreach($channel_array as $val){

	//$sql = "SELECT DISTINCT a.playlist_id,a.playlist_title,a.playlist_pic,a.playlist_year,a.playlist_created FROM `#@__playlist` AS a INNER JOIN `#@__vod` AS b ON a.playlist_id=b.vod_playlist AND a.playlist_class={$val} AND a.playlist_delstate=0 AND a.playlist_enable=1 AND b.vod_delstate=0 AND b.vod_enable=1 AND b.vod_site IN ({$cfg_support}) ORDER BY a.playlist_date DESC,a.playlist_order ASC LIMIT 0,6";
	$sql = "SELECT `playlist_id`,`playlist_title`,`playlist_pic`,`playlist_year`,`playlist_created` FROM `#@__playlist` WHERE `playlist_class`={$val} AND `playlist_delstate`=0 AND `playlist_enable`=1 ORDER BY `playlist_date` DESC,`playlist_order` ASC LIMIT 0,6";
	$movies = $dosql->GetAll($sql);
	$programs_array[$val] = $movies;
}

//新闻  音乐
$music_sql = "SELECT * FROM `#@__vod` WHERE `vod_class`=5 AND `vod_delstate`=0 AND `vod_enable`=1 ORDER BY `vod_order` LIMIT 0,6";
$musics = $dosql->GetAll($music_sql);
$new_sql = "SELECT * FROM `#@__vod` WHERE `vod_class`=6 AND `vod_delstate`=0 AND `vod_enable`=1 ORDER BY `vod_order` LIMIT 0,6";
$news = $dosql->GetAll($new_sql);

$smarty->assign('programs_array',$programs_array);
$smarty->assign('news',$news);
$smarty->assign('musics',$musics);

$smarty->display('index.html');
