<?php
require dirname(__FILE__).'/config.php';

//初始化参数检测正确性
$action = isset($action)?$action:NULL;
$class = empty($class)?1:intval($class);

//1：电视剧  2：电影  3：综艺  4：动漫

	//$sql = "SELECT DISTINCT a.playlist_id,a.playlist_title,a.playlist_pic,a.playlist_year,a.playlist_created FROM `#@__playlist` AS a INNER JOIN `#@__vod` AS b ON a.playlist_id=b.vod_playlist AND a.playlist_class={$class} AND a.playlist_delstate=0 AND a.playlist_enable=1 AND b.vod_delstate=0 AND b.vod_enable=1 AND b.vod_site IN ({$cfg_support}) ORDER BY a.playlist_date DESC,a.playlist_order ASC";
	$sql = "SELECT `playlist_id`,`playlist_title`,`playlist_pic`,`playlist_year`,`playlist_created` FROM `#@__playlist` WHERE `playlist_class`={$class} AND `playlist_delstate`=0 AND `playlist_enable`=1";
	
$row = $dosql->Execute($sql,$class);
$nums = $dosql->GetTotalRow($class);//总条数
$page_size = 36;//每页显示的条数
$sub_pages = 3;//每次显示的页数
$pageNums = ceil($nums/$page_size);//总页数

//当前页数
$pageCurrent = empty($page)?1:intval($page);

//分页类
$subPages=new SubPages();

//获得缓存的剧集
$movies = get_mem('movies_'.$class.'_'.$pageCurrent);
if(empty($movies)){
	$movies = $dosql->GetPageInfo($sql,$page_size,$pageCurrent);
	
	if(!empty($movies)){
		set_mem('movies_'.$class.'_'.$pageCurrent,$movies);
	}
}

//异步翻页
if($action=='more'){
	if($pageCurrent<=$pageNums){
		$str = '';
		foreach($movies as $v){
			$str .= '
			<dd>
				<div>
				<a href="movie.php?mid='.$v['playlist_id'].'" class="cover"><b style="background-image:url('.$v['playlist_pic'].')"></b>
				<span class="sign">
				<span class="bg"></span>
				<span class="i">'.$v['playlist_year'].'</span>
				';
				
			$str .= '
				</span></a>
				<p>
					<a href="movie.php?mid='.$v['playlist_id'].'">'.$v['playlist_title'].'</a> 
				</p>
				</div>
			</dd>
			';
		}
		
		echo $str;
	}else{
		echo 0;
	}
	
}else{
	$smarty->assign('movies',$movies);
	$smarty->assign('typeid',$class);
	$smarty->display('channel.html');
}
