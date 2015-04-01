<?php
require dirname(__FILE__).'/config.php';

$sql = "SELECT * FROM `#@__channel`";
$rows = $dosql->GetAll($sql);

$smarty->assign('cfg_tvlive',$cfg_tvlive);
$smarty->assign('channels',$rows);
$smarty->display('tvlive.html');
