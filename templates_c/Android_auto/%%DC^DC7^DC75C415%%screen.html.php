<?php /* Smarty version 2.6.26, created on 2015-02-05 10:57:20
         compiled from screen.html */ ?>
<!DOCTYPE html>
<html>
<head>
	<title>多屏</title> 
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
	.screen_list {
	margin:0 3px;
	font-size:0;
	position:relative;
	padding-bottom:12px;
	padding-top:8px;
	overflow:hidden;
	text-align:left;
	}
	
	.screen_list:before {
		content:"";
		display:block;
		height:8px;
		position:absolute;
		bottom:0;
		left:-8px;
		right:-8px;
		border-bottom:1px solid #fff;
		background:-webkit-gradient(linear,left top,left bottom,color-stop(0,#fcfcfc),color-stop(1,#f3f3f3));
		-webkit-mask-box-image:-webkit-gradient(linear,left top,right top,color-stop(0,rgba(0,0,0,.1)),color-stop(0.3,#000),color-stop(0.7,#000),color-stop(1,rgba(0,0,0,.1)));
		box-shadow:inset 0 -1px 0 #ddd;
	}
	.screen_list:after {
		content:".";
		height:0;
		overflow:hidden;
		display:inline-block;
		width:100%
	}
	.screen_list dd {
		text-align:center;
		font-size:12pt;
		display:inline-block;
		vertical-align:top;
		padding: 5px 3px 0 4px;
		width: 33%;
	}
	.screen_list div {
	/*background: none repeat scroll 0 0 #FFFFFF;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);*/
	padding: 2px 2px 0;
	}
	.screen_list .cover {
		display:block;
		/*background-color:#eee;*/
		background-repeat:no-repeat;
		position:relative;
		background-size:cover;
		
	}
	.screen_list .cover b {
	display: block;
	width: 80px;
	height: 80px;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 50% 50%;
	margin:0 auto;
	}
	.screen_list p {
	line-height: 1.4;
	font-size: .9em;
	text-align: center;
	margin: 0 auto;
	padding: 5px;
	}
	
	.screen_list p span {
	color: #999;
	font-size: 12px;
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
	<div class="grid_list">
        <dl class="screen_list">
            <dd>
            	<div>
                <a href="http://www.youku.com" class="cover"><b style="background-image:url(./app/logos/youku.png)"></b></a>
                <p>
                    <span>优酷</span>
                </p>
                
                </div>
            </dd>
            <dd>
            	<div>
                <a href="http://www.tudou.com" class="cover"><b style="background-image:url(./app/logos/tudou.png)"></b></a>
                <p>
                    <span>土豆</span>
                </p>
                
                </div>
            </dd>
            <dd>
            	<div>
                <a href="http://m.letv.com" class="cover"><b style="background-image:url(./app/logos/letv.png)"></b></a>
                <p>
                    <span>乐视</span>
                </p>
                
                </div>
            </dd>
            <dd>
            	<div>
                <a href="http://m.tv.sohu.com" class="cover"><b style="background-image:url(./app/logos/sohu.png)"></b></a>
                <p>
                    <span>搜狐</span>
                </p>
                
                </div>
            </dd>
            <dd>
            	<div>
                <a href="http://m.yinyuetai.com" class="cover"><b style="background-image:url(./app/logos/yinyuetai.png)"></b></a>
                <p>
                    <span>音悦台</span>
                </p>
                
                </div>
            </dd>
            <dd>
            	<div>
                <a href="http://m.pps.tv" class="cover"><b style="background-image:url(./app/logos/pps.png)"></b></a>
                <p>
                    <span>PPS</span>
                </p>
                
                </div>
            </dd>
            <dd>
            	<div>
                <a href="http://m.iqiyi.com" class="cover"><b style="background-image:url(./app/logos/aiqiyi.png)"></b></a>
                <p>
                    <span>爱奇艺</span>
                </p>
                
                </div>
            </dd>
        </dl>
	</div>
</div>
<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "footer.html", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
</body>
</html>