<?php
if(!defined('SHIHAI')) exit('Request Error!');
function sethostory($q,$userid){
global $dosql;
if(!empty($q) && !empty($userid)){
	//本次搜索的信息
	$demo = array();
	$demo['keyword'] = $q;
	$demo['datetime'] = time();
	$hostory = array();
	$sql = "SELECT * FROM `#@__userinfo` WHERE `userid`='{$userid}'";
	//修改数据array
	$soku_info = array();
	//是否存在记录
	if($result = $dosql->GetOne($sql)){
		//历史记录是否为空
		$hostory_json = isset($result['hostory'])?$result['hostory']:'';
		if(!empty($hostory_json)){
			//解析历史记录
			$hostory = json_decode($hostory_json,true);
		}
		//判断json是否正常解析
		if(is_array($hostory)){
			foreach($hostory as $k=>$v){
				//删除原来的存在的记录
				if($v['keyword'] == $demo['keyword']){
					unset($hostory[$k]);	
				}	
			}
			$hostory = array_slice($hostory,-9,9);
			//加入本次搜索记录
			$hostory[] = $demo;	
			$soku_info['hostory'] = is_array($hostory)?json_encode($hostory):'';
			$soku_info = _mysql_string($soku_info);
			$dosql->Update('#@__userinfo',$soku_info,"userid='{$userid}'");
		}
	}else{
		$hostory[] = $demo;
		$hostory_json = is_array($hostory)?json_encode($hostory):'';
		$soku_info['userid'] = $userid;
		$soku_info['hostory'] = $hostory_json;
		$soku_info = _mysql_string($soku_info);
		if($dosql->Insert('#@__userinfo',$soku_info)){
			$id = $dosql->GetLastID();
		}
	}
}
}
//返回历史记录数组
function get_hostory($userid){
global $dosql;
if(!empty($userid)){
	$hostory = array();
	$sql = "SELECT * FROM `#@__userinfo` WHERE `userid`='{$userid}'";
	if($result = $dosql->GetOne($sql)){
		//历史记录是否为空
		$hostory_json = isset($result['hostory'])?$result['hostory']:'';
		if(!empty($hostory_json)){
			//解析历史记录
			$hostory = json_decode($hostory_json,true);
		}
		$hostory = array_reverse($hostory);
		return $hostory;
	}
}
}

//添加收藏
function setCollect($title,$img,$url,$userid){
global $dosql;
if(!empty($userid)){
	$collect = array();
	$demo['title'] = $title;
	$demo['image'] = $img;
	$demo['url'] = $url;
	
	$sql = "SELECT * FROM `#@__userinfo` WHERE `userid`='{$userid}'";
	if($result = $dosql->GetOne($sql)){
		//历史记录是否为空
		$collect_json = isset($result['collect'])?$result['collect']:'';
		if(!empty($collect_json)){
			//解析历史记录
			$collect = json_decode($collect_json,true);
		}
		//判断json是否正常解析
		if(is_array($collect)){
			foreach($collect as $k=>$v){
				//删除原来的存在的记录
				//echo $v['url'].'---'.$demo['url'];exit;
				if($v['url'] == _mysql_string($demo['url'])){
					unset($collect[$k]);
				}
			}
			$collect = array_slice($collect,-99,99);
			//加入本次搜索记录
			$collect[] = $demo;
			$soku_info['collect'] = is_array($collect)?json_encode($collect):'';
			$soku_info = _mysql_string($soku_info);
			if($dosql->Update('#@__userinfo',$soku_info,"userid='{$userid}'")){
				return TRUE;
			}
		}
		
	}else{
		$collect[] = $demo;
		$collect_json = is_array($collect)?json_encode($collect):'';
		$soku_info['userid'] = $userid;
		$soku_info['collect'] = $collect_json;
		$soku_info = _mysql_string($soku_info);
		if($dosql->Insert('#@__userinfo',$soku_info)){
			return TRUE;
		}
	}
}
}

//删除收藏
function removeCollect($url,$userid){
global $dosql;
if(!empty($userid)){
	$sql = "SELECT * FROM `#@__userinfo` WHERE `userid`='{$userid}'";
	if($result = $dosql->GetOne($sql)){
		//历史记录是否为空
		$collect_json = isset($result['collect'])?$result['collect']:'';
		if(!empty($collect_json)){
			//解析历史记录
			$collect = json_decode($collect_json,true);
		}
		//判断json是否正常解析
		if(is_array($collect)){
			foreach($collect as $k=>$v){
				//删除原来的存在的记录
				//echo $v['url'].'---'.$demo['url'];exit;
				if($v['url'] == _mysql_string($url)){
					unset($collect[$k]);
				}
			}
			$soku_info['collect'] = is_array($collect)?json_encode($collect):'';
			$soku_info = _mysql_string($soku_info);
			
			if($dosql->Update('#@__userinfo',$soku_info,"userid='{$userid}'")){
				return TRUE;
			}
		}
	}
}
}
//返回收藏记录

//返回历史记录数组
function get_collect($userid){
	global $dosql;
	if(!empty($userid)){
		$collect = array();
		$sql = "SELECT * FROM `#@__userinfo` WHERE `userid`='{$userid}'";
		if($result = $dosql->GetOne($sql)){
			//历史记录是否为空
			$collect_json = isset($result['collect'])?$result['collect']:'';
			if(!empty($collect_json)){
				//解析历史记录
				$collect = json_decode($collect_json,true);
			}
			$collect =array_reverse($collect);
			return $collect;
		}
	}
}
 
