<?php /* Smarty version 2.6.26, created on 2015-04-01 02:11:00
         compiled from monitor.html */ ?>
<!DOCTYPE html>
<html>
<head>
	<title>监控</title> 
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />	
	<meta content="telephone=no" name="format-detection" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0" />
	<meta name="title" content="" /> 
	<meta name="description" content="" />
	<meta name="keywords" content="" />
    <link rel="stylesheet" type="text/css" href="templates/<?php echo $this->_tpl_vars['cfg_template']; ?>
/css/min.tv.20140326.css" />
    <script type="text/javascript" src="templates/<?php echo $this->_tpl_vars['cfg_template']; ?>
/js/jquery.js"></script>
    
    <style type="text/css">
	
.play_list{ padding-top:0px;}
.play_list li{
	height:40px;
	display:inline;
	float:left;
	width:70%;
}
.play_list li.play{ width:30%;}

.play_list li a{
	background: none repeat scroll 0 0 #EEEEEE;
    border: 1px solid #DDDDDD;
    border-radius: 3px;
    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.5) inset;
    color: #AAAAAA;
    display: block;
    font-weight: 700;
    margin:0 4px;
    overflow: hidden;
    padding: 0.5em 0.8em;
    text-overflow: ellipsis;
    text-shadow: 0 1px 0 #FFFFFF;
    white-space: nowrap;
	text-align:center;
	
}
.play_list li a:hover{
	background: none repeat scroll 0 0 #C21408;
	border: 1px solid #9E1007;
	color:#FFF;
}


	</style>
</head>
<body class="home">

<div class="body_wrap search_actived">
<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "header.html", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
	 <div class="play_list"  id="from_content0">
     	<h1 class="cate_title">
				 <a href="map.php">地图</a>监控列表
			</h1>
    	<ul>
        	<?php unset($this->_sections['i']);
$this->_sections['i']['name'] = 'i';
$this->_sections['i']['loop'] = is_array($_loop=$this->_tpl_vars['comera']) ? count($_loop) : max(0, (int)$_loop); unset($_loop);
$this->_sections['i']['show'] = true;
$this->_sections['i']['max'] = $this->_sections['i']['loop'];
$this->_sections['i']['step'] = 1;
$this->_sections['i']['start'] = $this->_sections['i']['step'] > 0 ? 0 : $this->_sections['i']['loop']-1;
if ($this->_sections['i']['show']) {
    $this->_sections['i']['total'] = $this->_sections['i']['loop'];
    if ($this->_sections['i']['total'] == 0)
        $this->_sections['i']['show'] = false;
} else
    $this->_sections['i']['total'] = 0;
if ($this->_sections['i']['show']):

            for ($this->_sections['i']['index'] = $this->_sections['i']['start'], $this->_sections['i']['iteration'] = 1;
                 $this->_sections['i']['iteration'] <= $this->_sections['i']['total'];
                 $this->_sections['i']['index'] += $this->_sections['i']['step'], $this->_sections['i']['iteration']++):
$this->_sections['i']['rownum'] = $this->_sections['i']['iteration'];
$this->_sections['i']['index_prev'] = $this->_sections['i']['index'] - $this->_sections['i']['step'];
$this->_sections['i']['index_next'] = $this->_sections['i']['index'] + $this->_sections['i']['step'];
$this->_sections['i']['first']      = ($this->_sections['i']['iteration'] == 1);
$this->_sections['i']['last']       = ($this->_sections['i']['iteration'] == $this->_sections['i']['total']);
?>
            <li><a href="map.php?lng=<?php echo $this->_tpl_vars['comera'][$this->_sections['i']['index']]['lng']; ?>
&lat=<?php echo $this->_tpl_vars['comera'][$this->_sections['i']['index']]['lat']; ?>
"><?php echo $this->_tpl_vars['comera'][$this->_sections['i']['index']]['address']; ?>
</a></li>
            <li class="play"><a href="http://218.94.4.146:19000/RESTfull/cc_api.php?req=hlsdemoex">播放监控</a></li>
            <?php endfor; endif; ?>
        </ul>
    </div>
</div>
<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "footer.html", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
</body>
</html>