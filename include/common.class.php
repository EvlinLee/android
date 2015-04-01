<?php
if(!defined('SHIHAI')) exit('Request Error!');

class Common{	
	//判断是否能连接网络
	function varify_url($url){  
		$check = @fopen($url,"r");  
		if($check){
		 $status = true;  
		}else{
		 $status = false;  
		}
		return $status;
	}
	
	//正则匹配
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
	
	//切割字符串
	function cut($string,$start,$end){
		$message = explode($start,$string);
		if(is_array($message) && count($message)>=2){
			$message = explode($end,$message[1]);
			return $message[0];
		}else{
			return false;	
		}
	}
	
	//切割后再匹配
	function cut_preg($str,$start,$end,$preg){
		$title_str = $this->cut($str,$start,$end);
		if(!empty($title_str)){
			$title_arr = $this->preg($title_str,$preg);
			$title = empty($title_arr[1])?'':strip_tags($title_arr[1]);
			return $title;
		}else{
			return false;
		}
	}
	//打印
	function dayin($str,$ti){
		echo date('Y/m/d H:i:s').'--'.$str."--".$ti."<br/>\n";
	}
	
	//过滤
	function mysql_string($_string){
		
		//判断get_magic_quotes_gpc()是否开启
		//if(!get_magic_quotes_gpc()){
			if (is_array($_string)) {
				foreach ($_string as $_key => $_value) {
					$_string[$_key] = $this->mysql_string($_value);   
					
				}
			} else {
				$_string = mysql_escape_string($_string);
				//$_string = addslashes($_string);
			}
		//}
		return $_string;
	}
	
	//下载图片
	function GrabImage($url) {
		global $imgfile,$returnfile;
		if($url==""):return false;endif;
		$filename=$imgfile.basename($url);
		$con = Net::curl($url);
		if (!empty($con)) {
			file_put_contents($filename, $con);
			return $returnfile.strrchr($url,"/");
		}else{
			$con = Net::curl($url);
			if(!empty($con)){
				file_put_contents($filename, $con);
				return $returnfile.strrchr($url,"/");	
			}else{
				return $returnfile.strrchr($url,"/");	
			}
		}
	}
	
	//时间转换成秒数
	function trans_second($time){
		$arr = explode(":",$time);
		$s = 0;
		if(count($arr) == 2){
			$s += (int)$arr[0]*60;
			$s += (int)$arr[1];
		}else if(count($arr) == 3){
			$s += (int)$arr[0]*60*60;
			$s += (int)$arr[1]*60;
			$s += (int)$arr[2];	
		}
		return $s;
	}
}