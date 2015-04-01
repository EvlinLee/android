<?php
require dirname(__FILE__).'/config.php';
$action = isset($action)?$action:'';
//将编译后的代码转成原型
function chrhexdec($a){
	return htmlencode(chr(hexdec($a[1])));
}
//联想功能
if($action == 'think'){
	$key = isset($key)?$key:NULL;
	if(empty($key)) exit;
	//api接口
	$api_url = 'http://tip.soku.com/search_keys?jsoncallback=XBox.kUpdate&query='.$key.'&rm=C5F8C914BF0000014D6E1248E12F1EE2-4&h=17';
	$think_json = $NET->curl($api_url);
	//$think_json = mb_convert_encoding($think_json, "utf-8", 'auto');
	$think_json = ltrim($think_json,'XBox.kUpdate(');
	$think_json = rtrim($think_json,')');
	//$think_json = str_replace('\\','\\\\',$think_json);	
	$think_json = preg_replace_callback(
	  "(\\\\x([0-9a-f]{2}))i",
	  'chrhexdec',
	  $think_json
	);
	$think_arr = json_decode($think_json,TRUE);
	$think_arr = $think_arr['r'];
	//$think_arr[]['c'] = $key;
	$httpxml = '';
	foreach($think_arr as $v){
		$httpxml .= '<a href="search.php?wd='.$v['c'].'">'.$v['c'].'</a>';
	}
	echo $httpxml;
	exit;
}

//历史记录
if(isset($userid)){
	$hostory = get_hostory($userid);
	$smarty->assign('hostory',$hostory);
}
$smarty->display('search_from.html');

?>