<?php
require dirname(__FILE__).'/config.php';
$sql = "SELECT * FROM #@__camera WHERE enable=1";
$rows = $dosql->GetAll($sql);

$smarty->assign('comera',$rows);
$smarty->display('monitor.html');
?>