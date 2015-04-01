<?php /* Smarty version 2.6.26, created on 2015-03-05 06:42:47
         compiled from music.html */ ?>
<!DOCTYPE html>
<html>
<head>
	<title>音乐</title> 
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />	
	<meta content="telephone=no" name="format-detection" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0" />
	<meta name="title" content="" /> 
	<meta name="description" content="" />
	<meta name="keywords" content="" />
	<meta property="qc:admins" content="25250114746637056375" />
	<meta name="baidu-tc-cerfication" content="4ab4ba8d59e41ee0458a64f3ee41651b" />
	<link rel="apple-touch-icon-precomposed" href="images/icons.png" />
	<link rel="apple-touch-icon-precomposed" sizes="114x114" href="images/iconl.png" />
	<link rel="stylesheet" type="text/css" href="templates/<?php echo $this->_tpl_vars['cfg_template']; ?>
/css/min.tv.20140326.css?2" />
    <script type="text/javascript" src="templates/<?php echo $this->_tpl_vars['cfg_template']; ?>
/js/jquery.js"></script>
    <script src="templates/<?php echo $this->_tpl_vars['cfg_template']; ?>
/alertPlay/alertPlay.js?3"></script>
    <script>
	var totalheight = 0; 
	function loadData(){ 
		totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop()); 
		if ($(document).height() <= (totalheight+20)){ 
		   //alert("到底了");频繁在请求没有事务逻辑
			var url = window.location.href;
			var pageCurrent = $("#pageCurrent").val();
			var loadType = $("#loadType").val();
			if (loadType == "Y") {
			$("#loadType").val('N');
			$.ajax({
				type:"POST", 
				url:url+"?action=more",
				dataType:"String",
				data:{"page":pageCurrent},
				beforeSend:function(){
					$(".loading").remove();
					$(".body_wrap").append('<div class="loading" style=" text-align:center;font-size: 0.9em; width:100%; padding:5px 0; color:#333;">数据加载中...</div>');				
				},
				success: function(str){
					if(str == 0){
						$(".loading").remove();
						$(".body_wrap").append('<div class="loading" style=" text-align:center;font-size: 0.9em; width:100%; padding:5px 0; color:#333;">没有更多了</div>');
					}else{
						$("#loadType").val('Y');
						$("#pageCurrent").val(parseInt(pageCurrent)+1);
						
						$(".item_list").append(str);
					}
				}
			});
			}
		} 
	}
	$(window).scroll( function() { 
		console.log("滚动条到顶部的垂直高度: "+$(document).scrollTop()); 
		console.log("页面的文档高度 ："+$(document).height());
		console.log('浏览器的高度：'+$(window).height());
		loadData();} );
	</script>
</head>
<body class="home">
<div class="body_wrap search_actived">
	<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "header.html", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
	<div class="grid_list">
        <!-- ITEM_DOT_15_hots_热点_122_1 -->
        <h1 class="cate_title">音乐</h1>
        <dl class="item_list channel_122 column_15">
            <?php unset($this->_sections['i']);
$this->_sections['i']['name'] = 'i';
$this->_sections['i']['loop'] = is_array($_loop=$this->_tpl_vars['music']) ? count($_loop) : max(0, (int)$_loop); unset($_loop);
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
            <dd>
            	<div>
                <!-- VID_DOT 15_0 -->
                <a href="javascript:void(0);" onClick="tanPlay('<?php echo $this->_tpl_vars['music'][$this->_sections['i']['index']]['vod_url']; ?>
')" class="cover"><b style="background-image:url(<?php echo $this->_tpl_vars['music'][$this->_sections['i']['index']]['vod_pic']; ?>
)"></b></a>
                <p>
                    <a href="javascript:void(0);" onClick="tanPlay('<?php echo $this->_tpl_vars['music'][$this->_sections['i']['index']]['vod_url']; ?>
')"><?php echo $this->_tpl_vars['music'][$this->_sections['i']['index']]['vod_title']; ?>
</a>
                    <span>演唱：<?php echo $this->_tpl_vars['music'][$this->_sections['i']['index']]['vod_singer']; ?>
</span> 
                </p>
                
                </div>
            </dd>
            <?php endfor; endif; ?>
        </dl> 
	</div>
    <div style="display:none;"><input type="hidden" id="pageCurrent" value=2 /><input type="hidden" id="loadType" value="Y" /></div>
</div>
</body>
</html>