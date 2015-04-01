<?php
require(dirname(__FILE__).'/include/common.inc.php');
require BASE_ROOT.'/smarty/Smarty.class.php';
$smarty = new Smarty();
/*定义各个目录的路径*/
$agent = $_SERVER["HTTP_USER_AGENT"];
$smarty->template_dir=BASE_ROOT.'/templates/'.$cfg_template.'/';//设置模板目录
$smarty->compile_dir=BASE_ROOT."/templates_c/".$cfg_template."/";//设置编译目录
$smarty->config_dir=BASE_ROOT ."/smarty/Config_File.class.php";
$smarty->cache_dir=BASE_ROOT.'/cache/';
//以下设置左右边界符
$smarty->left_delimiter="{[";
$smarty->right_delimiter="]}";
$smarty->assign('cfg_webname',$cfg_webname);
$smarty->assign('cfg_template',$cfg_template);
//收藏及历史记录操作
require(BASE_INC.'/info_save.php');

//开启缓存
if($cfg_huancun == 'Y'){
	define('CACHE',TRUE);
}else{
	define('CACHE',FALSE);
}

define('VALUEPRE','sd_');

//$mem = new Memcache;
//$mem->connect("127.0.0.1", 11211);
//$time = 3600;
//播放类型控制
foreach($cfg_source as $v){
	$zhichi_str[] = '\''.$v.'\'';
}
$cfg_support = implode(',',$zhichi_str);

