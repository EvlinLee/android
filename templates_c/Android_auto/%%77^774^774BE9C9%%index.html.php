<?php /* Smarty version 2.6.26, created on 2015-02-05 10:57:55
         compiled from index.html */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('modifier', 'escape', 'index.html', 33, false),)), $this); ?>
<!DOCTYPE html>
<html>
<head>
	<title>首页</title> 
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />	
	<meta content="telephone=no" name="format-detection" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0" />
	<meta name="title" content="视频" /> 
	<meta name="description" content="视频" />
	<meta name="keywords" content="视频" />
	<meta property="qc:admins" content="25250114746637056375" />
	<meta name="baidu-tc-cerfication" content="4ab4ba8d59e41ee0458a64f3ee41651b" />
	<link rel="apple-touch-icon-precomposed" href="images/icons.png" />
	<link rel="apple-touch-icon-precomposed" sizes="114x114" href="images/iconl.png" />
	<link rel="stylesheet" type="text/css" href="templates/<?php echo $this->_tpl_vars['cfg_template']; ?>
/css/min.tv.20140326.css" />
    <script type="text/javascript" src="templates/<?php echo $this->_tpl_vars['cfg_template']; ?>
/js/jquery.js"></script>
    <script src="templates/<?php echo $this->_tpl_vars['cfg_template']; ?>
/alertPlay/alertPlay.js"></script>
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
			<h1 class="cate_title">
				 <a href="news.php">更多</a>热点
			</h1>
			<dl class="item_list channel_122 column_15">
            	<?php unset($this->_sections['i']);
$this->_sections['i']['name'] = 'i';
$this->_sections['i']['loop'] = is_array($_loop=$this->_tpl_vars['news']) ? count($_loop) : max(0, (int)$_loop); unset($_loop);
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
                    <a href="javascript:void(0);" onClick="tanPlay('<?php echo $this->_tpl_vars['news'][$this->_sections['i']['index']]['vod_url']; ?>
','','<?php echo ((is_array($_tmp=$this->_tpl_vars['news'][$this->_sections['i']['index']]['vod_title'])) ? $this->_run_mod_handler('escape', true, $_tmp, 'html') : smarty_modifier_escape($_tmp, 'html')); ?>
','<?php echo $this->_tpl_vars['news'][$this->_sections['i']['index']]['vod_pic']; ?>
')" class="cover"><b style="background-image:url(<?php echo $this->_tpl_vars['news'][$this->_sections['i']['index']]['vod_pic']; ?>
)"></b></a>
                    <p>
                        <a href="javascript:void(0);" onClick="tanPlay('<?php echo $this->_tpl_vars['news'][$this->_sections['i']['index']]['vod_url']; ?>
','','<?php echo ((is_array($_tmp=$this->_tpl_vars['news'][$this->_sections['i']['index']]['vod_title'])) ? $this->_run_mod_handler('escape', true, $_tmp, 'html') : smarty_modifier_escape($_tmp, 'html')); ?>
','<?php echo $this->_tpl_vars['news'][$this->_sections['i']['index']]['vod_pic']; ?>
')"><?php echo $this->_tpl_vars['news'][$this->_sections['i']['index']]['vod_title']; ?>
</a> 
                    </p>
                    </div>
                </dd>
                
                <?php endfor; endif; ?>
			</dl> 
			<!-- ITEM_DOT_4_drama_电视剧_101_2 -->
            
			<h1 class="cate_title">
				 <a href="channel.php?typeid=1">更多</a>电视剧
			</h1>
            
			<dl class="item_list channel_101 column_4">
            	<?php unset($this->_sections['i']);
$this->_sections['i']['name'] = 'i';
$this->_sections['i']['loop'] = is_array($_loop=$this->_tpl_vars['programs_array']['1']) ? count($_loop) : max(0, (int)$_loop); unset($_loop);
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
                    <!-- VID_DOT 5_0 -->
                    <a href="movie.php?mid=<?php echo $this->_tpl_vars['programs_array']['1'][$this->_sections['i']['index']]['playlist_id']; ?>
" class="cover"><b style="background-image:url(<?php echo $this->_tpl_vars['programs_array']['1'][$this->_sections['i']['index']]['playlist_pic']; ?>
)"></b>
                    <span class="sign">
                    <span class="bg"></span>
                        <span class="i"><?php echo $this->_tpl_vars['programs_array']['1'][$this->_sections['i']['index']]['playlist_year']; ?>
</span>
                    </span></a>
                    <p>
                        <a href="movie.php?mid=<?php echo $this->_tpl_vars['programs_array']['1'][$this->_sections['i']['index']]['playlist_id']; ?>
"><?php echo $this->_tpl_vars['programs_array']['1'][$this->_sections['i']['index']]['playlist_title']; ?>
</a> 
                    </p>
                    </div>
                </dd>
                <?php endfor; endif; ?>
			 	
			</dl> 
		 <div class='ad_banner'></div>
			<!-- ITEM_DOT_34_usdrama_美剧_0_3 -->
			<h1 class="cate_title">
				 <a href="channel.php?typeid=2">更多</a>电影
			</h1>
			<dl class="item_list channel_102 column_34">
            	<?php unset($this->_sections['i']);
$this->_sections['i']['name'] = 'i';
$this->_sections['i']['loop'] = is_array($_loop=$this->_tpl_vars['programs_array']['2']) ? count($_loop) : max(0, (int)$_loop); unset($_loop);
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
                    <!-- VID_DOT 5_0 -->
                    <a href="movie.php?mid=<?php echo $this->_tpl_vars['programs_array']['2'][$this->_sections['i']['index']]['playlist_id']; ?>
" class="cover"><b style="background-image:url(<?php echo $this->_tpl_vars['programs_array']['2'][$this->_sections['i']['index']]['playlist_pic']; ?>
)"></b>
                    <span class="sign">
                    <span class="bg"></span>
                        <span class="i"><?php echo $this->_tpl_vars['programs_array']['2'][$this->_sections['i']['index']]['playlist_year']; ?>
</span>
                    </span></a>
                    <p>
                        <a href="movie.php?mid=<?php echo $this->_tpl_vars['programs_array']['2'][$this->_sections['i']['index']]['playlist_id']; ?>
"><?php echo $this->_tpl_vars['programs_array']['2'][$this->_sections['i']['index']]['playlist_title']; ?>
</a> 
                    </p>
                    </div>
                </dd>
                <?php endfor; endif; ?>
			</dl> 
			<!-- ITEM_DOT_143_krdrama_韩剧_0_4 -->
			<h1 class="cate_title">
				 <a href="channel.php?typeid=4">更多</a>综艺
			</h1>
			<dl class="item_list channel_104 column_143">
            	<?php unset($this->_sections['i']);
$this->_sections['i']['name'] = 'i';
$this->_sections['i']['loop'] = is_array($_loop=$this->_tpl_vars['programs_array']['3']) ? count($_loop) : max(0, (int)$_loop); unset($_loop);
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
                    <!-- VID_DOT 5_0 -->
                    <a href="movie.php?mid=<?php echo $this->_tpl_vars['programs_array']['3'][$this->_sections['i']['index']]['playlist_id']; ?>
" class="cover"><b style="background-image:url(<?php echo $this->_tpl_vars['programs_array']['3'][$this->_sections['i']['index']]['playlist_pic']; ?>
)"></b>
                    <span class="sign">
                    <span class="bg"></span>
                        <span class="i"><?php echo $this->_tpl_vars['programs_array']['3'][$this->_sections['i']['index']]['playlist_year']; ?>
</span>
                    </span></a>
                    <p>
                        <a href="movie.php?mid=<?php echo $this->_tpl_vars['programs_array']['3'][$this->_sections['i']['index']]['playlist_id']; ?>
"><?php echo $this->_tpl_vars['programs_array']['3'][$this->_sections['i']['index']]['playlist_title']; ?>
</a> 
                    </p>
                    </div>
                </dd>
                <?php endfor; endif; ?>
			</dl> 
		
			<!-- ITEM_DOT_144_jpdrama_日剧_0_5 -->
			<h1 class="cate_title">
			
				 <a href="channel.php?typeid=5">更多</a>动漫
			</h1>
			<dl class="item_list channel_105 column_144">
            	<?php unset($this->_sections['i']);
$this->_sections['i']['name'] = 'i';
$this->_sections['i']['loop'] = is_array($_loop=$this->_tpl_vars['programs_array']['4']) ? count($_loop) : max(0, (int)$_loop); unset($_loop);
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
                    <!-- VID_DOT 5_0 -->
                    <a href="movie.php?mid=<?php echo $this->_tpl_vars['programs_array']['4'][$this->_sections['i']['index']]['playlist_id']; ?>
" class="cover"><b style="background-image:url(<?php echo $this->_tpl_vars['programs_array']['4'][$this->_sections['i']['index']]['playlist_pic']; ?>
)"></b>
                    <span class="sign">
                    <span class="bg"></span>
                        <span class="i"><?php echo $this->_tpl_vars['programs_array']['4'][$this->_sections['i']['index']]['playlist_year']; ?>
</span>
                    </span></a>
                    <p>
                        <a href="movie.php?mid=<?php echo $this->_tpl_vars['programs_array']['4'][$this->_sections['i']['index']]['playlist_id']; ?>
"><?php echo $this->_tpl_vars['programs_array']['4'][$this->_sections['i']['index']]['playlist_title']; ?>
</a> 
                    </p>
                    </div>
                </dd>
                <?php endfor; endif; ?>
			</dl> 
            		
			<!-- ITEM_DOT_33_music_音乐_121_13 -->
			<h1 class="cate_title">
			<a href="musics.php">更多</a>音乐
			</h1>
			<dl class="item_list channel_121 column_33">
                <?php unset($this->_sections['i']);
$this->_sections['i']['name'] = 'i';
$this->_sections['i']['loop'] = is_array($_loop=$this->_tpl_vars['musics']) ? count($_loop) : max(0, (int)$_loop); unset($_loop);
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
                    <!-- VID_DOT 5_0 -->
                    <a href="javascript:void(0);" onClick="tanPlay('<?php echo $this->_tpl_vars['musics'][$this->_sections['i']['index']]['vod_url']; ?>
','','<?php echo ((is_array($_tmp=$this->_tpl_vars['musics'][$this->_sections['i']['index']]['vod_title'])) ? $this->_run_mod_handler('escape', true, $_tmp, 'html') : smarty_modifier_escape($_tmp, 'html')); ?>
','<?php echo $this->_tpl_vars['musics'][$this->_sections['i']['index']]['vod_pic']; ?>
')" class="cover">
                        <b style="background-image:url(<?php echo $this->_tpl_vars['musics'][$this->_sections['i']['index']]['vod_pic']; ?>
)"></b>
                        <span class="sign">
                        <span class="bg"></span>
                        <span class="i"><?php echo $this->_tpl_vars['musics'][$this->_sections['i']['index']]['length']; ?>
</span>
                        </span>
                    </a>
                    <p>
                        <a href="javascript:void(0);" onClick="tanPlay('<?php echo $this->_tpl_vars['musics'][$this->_sections['i']['index']]['vod_url']; ?>
','','<?php echo ((is_array($_tmp=$this->_tpl_vars['musics'][$this->_sections['i']['index']]['vod_title'])) ? $this->_run_mod_handler('escape', true, $_tmp, 'html') : smarty_modifier_escape($_tmp, 'html')); ?>
','<?php echo $this->_tpl_vars['musics'][$this->_sections['i']['index']]['vod_pic']; ?>
')"><?php echo $this->_tpl_vars['musics'][$this->_sections['i']['index']]['vod_title']; ?>
</a> 
                        <span>演唱：<?php echo $this->_tpl_vars['musics'][$this->_sections['i']['index']]['vod_singer']; ?>
</span>
                    </p>
                    </div>
                </dd>
                <?php endfor; endif; ?>
			</dl> 
	</div>
</div>

</body>
</html>