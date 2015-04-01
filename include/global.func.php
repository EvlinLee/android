<?php

//正则匹配函数
if(!function_exists('preg'))
{
	function preg($rs,$preg,$all=0,$p=0){
		if($all == 0){
			preg_match($preg,$rs,$title);
		}else if($all == 1){
			preg_match_all($preg,$rs,$title,PREG_SET_ORDER);
		}else{
			preg_match_all($preg,$rs,$title);
		}
		return $title;
	}
}

//裁剪字符串
if(!function_exists('cut'))
{
	function cut($string,$start,$end){
		$message = explode($start,$string);
		if(is_array($message) && count($message)>=2){
			$message = explode($end,$message[1]);
			return $message[0];
		}else{
			return false;	
		}
	}
}

//正则
if(!function_exists('cut_preg'))
{
	function cut_preg($str,$start,$end,$preg){
		$title_str = cut($str,$start,$end);
		if(!empty($title_str)){
			$title_arr = preg($title_str,$preg);
			$title = empty($title_arr[1])?'':strip_tags($title_arr[1]);
			return $title;
		}else{
			return false;	
		}
	}
}
//时间
function dayin($str,$ti){
	echo date('Y/m/d H:i:s').'--'.$str."--".$ti."\n";
}
//过滤字符串
if(!function_exists('_mysql_string'))
{
	function _mysql_string($_string){
		//判断get_magic_quotes_gpc()是否开启
		if (is_array($_string)) {
			foreach ($_string as $_key => $_value) {
				$_string[$_key] = _mysql_string($_value);   
			}
		} else {
				$_string = mysql_real_escape_string($_string);
		}
		return $_string;
	}
}

//检查外部传递的值并转义
if(!function_exists('_RunMagicQuotes'))
{
	function _RunMagicQuotes(&$svar)
	{
		//PHP5.4已经将此函数移除
		if(@!get_magic_quotes_gpc())
		{
			if(is_array($svar))
			{
				foreach($svar as $_k => $_v) $svar[$_k] = _RunMagicQuotes($_v);
			}
			else
			{
				if(strlen($svar)>0 &&
				   preg_match('#^(cfg_|GLOBALS|_GET|_POST|_SESSION|_COOKIE)#',$svar))
				{
					exit('不允许请求的变量值!');
				}
				$svar = addslashes($svar);
			}
		}
		return $svar;
	}
}


//mysql输出html转义
if(!function_exists('htmlencode'))
{
	function htmlencode($svar){
		 if(is_array($svar))
			{
				foreach($svar as $_k => $_v) $svar[$_k] = htmlencode($_v);
			}
			else
			{
				$svar = htmlspecialchars($svar, ENT_QUOTES);
			}
			return $svar;
	}
}


//转成中文
if(!function_exists('mvfrom'))
{
	function mvfrom($str){
		switch($str){
			case 'youku':
			return '优酷';
		break;
			case 'tudou':
			return '土豆';
		break;
			case 'sohu':
			return '搜狐';
		break;
			case 'youku':
			return '优酷';
		break;
			case 'iqiyi':
			return '爱奇艺';
		break;
			case 'sina':
			return '新浪';
		break;
			case 'yinyuetai':
			return '音悦台';
		break;
			case '56':
			return '56';
		break;
			case 'ku6':
			return '酷6';
		break;
			case 'ifeng':
			return '凤凰';
		break;
			case 'pptv':
			return 'PPTV聚力';
		break;
			case 'pps':
			return 'PPS';
		break;
			case 'letv':
			return '乐视';
		break;
			case 'qq':
			return '腾讯';
		break;
			default:
			return '未知';
		break;
		}
	}
}

//判断是否为整数
if(!function_exists('is_really_int'))
{
	function is_really_int(&$val) {
		$num = (int)$val;    
		if ($val==$num) {
		 $val=$num;
		 return true;
		}
		return false;
	}
}

//截取字符串
if(!function_exists('truncate_cn'))
{
	function truncate_cn($string, $length = 80, $etc = '', $code = 'UTF-8')
	{
		if ($length == 0)
			return '';
		if ($code == 'UTF-8') {
			$pa = "/[\x01-\x7f]|[\xc2-\xdf][\x80-\xbf]|\xe0[\xa0-\xbf][\x80-\xbf]|[\xe1-\xef][\x80-\xbf][\x80-\xbf]|\xf0[\x90-\xbf][\x80-\xbf][\x80-\xbf]|[\xf1-\xf7][\x80-\xbf][\x80-\xbf][\x80-\xbf]/";
		}
		else {
			$pa = "/[\x01-\x7f]|[\xa1-\xff][\xa1-\xff]/";
		}
		preg_match_all($pa, $string, $t_string);
		if (count($t_string[0]) > $length){
			return join('', array_slice($t_string[0], 0, $length)) . $etc;
		}
		return join('', array_slice($t_string[0], 0, $length));
	}
}

//显示信息
if(!function_exists('ShowMsg'))
{
	function ShowMsg($msg='', $gourl='-1')
	{
		if($msg == ''){
			if($gourl == '-1')
				echo '<script>history.go(-1);</script>';
			else if($gourl == '0')
				echo '<script>location.reload();</script>';
			else
				echo '<script>location.href="'.$gourl.'";</script>';
		}else{
			if($gourl == '-1')
				echo '<script>alert("'.$msg.'");history.go(-1);</script>';
			else if($gourl == '0')
				echo '<script>alert("'.$msg.'");location.reload();</script>';
			else
				echo '<script>alert("'.$msg.'");location.href="'.$gourl.'";</script>';
		}
		
	}
}

//得到缓存数据
if(!function_exists('get_mem'))
{
	function get_mem($name){
		global $mem,$cfg_cachepre;
		if(CACHE){
			$val = $mem->get($cfg_cachepre.$name);
			return $val;
		}else{
			return false;	
		}
	}
}

//设置缓存数据
if(!function_exists('set_mem'))
{
	function set_mem($name,$source){
		global $mem,$cfg_cachepre,$time;
		if(CACHE){
			$mem->set($cfg_cachepre.$name,$source,0,$time);
		}else{
			return false;
		}
	}
}

//得到接口数据
if(!function_exists('get_json'))
{
	function get_json($link)
	{
		global $NET;
		if(empty($link)) return;
		$con = $NET->curl($link);
		$Obj = json_decode($con,TRUE);
		if(!empty($Obj)){
			return $Obj;
		}else{
			ShowMsg("index.php",0);	
		}
	}
}

//参数过滤
if(!function_exists('_check_id'))
{
	function _check_id($v){
		if(!isset($v)){
			$v = 1;
		}else{
			$v = intval($v);
			$v = ($v<=0)?1:$v;
		}
		return $v;	
	}
}

//优先级选择源
//
if(!function_exists('check_source')){
	$source_order = $cfg_source;
	function check_source($arr){
		global $source_order;
		foreach($source_order as $v){
			if(in_array($v,$arr)){
				return $v;
			}
		}
		/*if(is_array($arr)){
			if(in_array("youku",$arr)){
				$source = "youku";	
			}else if(in_array("sohu",$arr)){
				$source = "sohu";
			}else if(in_array("letv",$arr)){
				$source = "letv";
			}else if(in_array("yinyuetai",$arr)){
				$source = "yinyuetai";
			}else if(in_array("pptv",$arr)){
				$source = "pptv";
			}else if(in_array("pps",$arr)){
				$source = "pps";
			}else if(in_array("tudou",$arr)){
				$source = "tudou";
			}else if(in_array("56",$arr)){
				$source = "56";
			}else if(in_array("ku6",$arr)){
				$source = "ku6";
			}else if(in_array("ifeng",$arr)){
				$source = "ifeng";
			}else if(in_array("sina",$arr)){
				$source = "sina";
			}else{
				$source = 'underfand';	
			}
			return $source;
		}*/
	}	
}

//按照指定顺序排列剧集
if(!function_exists('source_order')){
	
	function source_order($arr){
		$order = array('youku','tudou','sohu','iqiyi','yinyuetai','56','ku6','ifeng','pptv','pps','letv','sina');
		$return_arr = array();
		foreach($order as $v){
			if(isset($arr[$v]))
				$return_arr[$v] = $arr[$v];
		}
		return $return_arr;
	}

}
