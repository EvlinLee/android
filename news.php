<?php
require dirname(__FILE__).'/config.php';
//初始化参数检测正确性
$action = isset($action)?$action:NULL;

//搜索语句
$sql = "SELECT * FROM `#@__vod` WHERE `vod_class`=6 AND `vod_delstate`=0 AND `vod_enable`=1 order by vod_id desc";

$row = $dosql->Execute($sql);
$nums = $dosql->GetTotalRow();//总条数
$page_size = 36;//每页显示的条数
$sub_pages = 3;//每次显示的页数
$pageNums = ceil($nums/$page_size);//总页数
//当前页数
$pageCurrent = empty($page)?1:intval($page);
//分页类
$subPages=new SubPages();

//获得缓存的剧集
$movies = get_mem('news_'.$pageCurrent);
if(empty($movies)){
	$movies = $dosql->GetPageInfo($sql,$page_size,$pageCurrent);
	if(!empty($movies)){
		set_mem('news_'.$pageCurrent,$movies);
	}
}

//异步翻页
if($action == 'more'){
	if($pageCurrent<=$pageNums){
		$str = '';
		foreach($movies as $v){
			$str .= '
			<dd>
                <div>
                <a href="javascript:void();" onClick="tanPlay(\''.$v['vod_url'].'\')" class="cover">
                    <b style="background-image:url('.$v['vod_pic'].')"></b>
                </a>
                <p>
                    <a href="javascript:void();" onClick="tanPlay(\''.$v['vod_url'].'\')">'.$v['vod_title'].'</a> 
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

	$smarty->assign('news',$movies);
	$smarty->display('news.html');
}