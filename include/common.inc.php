<?php
header("Content-Type:text/html;charset=utf-8");
define('BASE_INC', preg_replace("/[\/\\\\]{1,}/", '/', dirname(__FILE__)));
define('BASE_ROOT', preg_replace("/[\/\\\\]{1,}/", '/', substr(BASE_INC, 0, -8)));
define('BASE_DATA', BASE_ROOT.'/data');
define('BASE_BACKUP', BASE_DATA.'/backup');
define('DOCUMENT_ROOT',preg_replace("/[\/\\\\]{1,}/", '/', $_SERVER['DOCUMENT_ROOT']));

define('SHIHAI', TRUE);
require(DOCUMENT_ROOT.'/config/config.php'); //全局配置文件
require(BASE_INC.'/config.cache.php'); //全局配置文件
require(BASE_INC.'/Net.php');//采集类
require(BASE_INC.'/global.func.php'); //全局方法
require(BASE_INC.'/mysql.class.php'); //数据库类
require(BASE_INC.'/common.func.php'); //公共函数
require(BASE_INC.'/subpage.class.php'); //分页类
require(BASE_INC.'/common.class.php'); //分页类
//实例化采集类
$NET = new Net();
//直接应用变量名称替代
foreach(array('_GET','_POST') as $_request)
{
	foreach($$_request as $_k => $_v)
	{
		if(strlen($_k)>0 &&
		   	preg_match('#^(GLOBALS|_GET|_POST|_SESSION|_COOKIE)#',$_k))
		{
			exit('不允许请求的变量名!');
		}

		${$_k} = _RunMagicQuotes($_v);
	}
}

