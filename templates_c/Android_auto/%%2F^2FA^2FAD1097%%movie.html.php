<?php /* Smarty version 2.6.26, created on 2015-02-10 11:05:02
         compiled from movie.html */ ?>
<!DOCTYPE html>
<html>
<head>
	<title>首页 搜狐视频</title> 
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
/css/min.tv.20140326.css?3" />
    <script type="text/javascript" src="templates/<?php echo $this->_tpl_vars['cfg_template']; ?>
/js/jquery.js"></script>
    <script src="templates/<?php echo $this->_tpl_vars['cfg_template']; ?>
/alertPlay/alertPlay.js?79"></script>
    <script type="text/javascript" src="templates/<?php echo $this->_tpl_vars['cfg_template']; ?>
/js/base.js"></script>
</head>
<body class="home">
<div class="body_wrap search_actived">
	<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => 'header.html', 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
    <h2 class="cate_title" float_menu="detail">
    	<b class="k_detail" key="detail">
        <?php if ($this->_tpl_vars['info']['playlist_class'] == 1): ?>
        电视剧
        <?php elseif ($this->_tpl_vars['info']['playlist_class'] == 2): ?>
        电影
        <?php elseif ($this->_tpl_vars['info']['playlist_class'] == 3): ?>
        综艺
        <?php elseif ($this->_tpl_vars['info']['playlist_class'] == 4): ?>
        动漫
        <?php else: ?>
        其他
        <?php endif; ?>
        </b>
    </h2>
    <div class="video_detail">
    	<div class="movie_image"><b style="background-image:url(<?php echo $this->_tpl_vars['info']['playlist_pic']; ?>
)"></b></div>   
    </div>
	<div class="video_detail">
        <div class="score" style="display: block;" data-value="num" data-type="attr" data-key="tv_score">
        <b><?php echo $this->_tpl_vars['info']['playlist_grade']; ?>
</b>
        </div>
    <h3 data-key="tv_name"><?php echo $this->_tpl_vars['info']['playlist_title']; ?>
</h3>
    <div data-key="tv_detail">
        <label>主演：</label>
    	<p><?php echo $this->_tpl_vars['info']['playlist_actors']; ?>
</p>
        <label>地区：</label>
    	<p><?php echo $this->_tpl_vars['info']['playlist_country']; ?>
</p>
        <label>导演：</label>
    	<p><?php echo $this->_tpl_vars['info']['playlist_director']; ?>
</p>
        <label>类型：</label>
    	<p><?php echo $this->_tpl_vars['info']['playlist_type']; ?>
</p>
        <label>年代：</label>
    	<p><?php echo $this->_tpl_vars['info']['playlist_year']; ?>
</p>
        <label>上线时间：</label>
    	<p><?php echo $this->_tpl_vars['info']['playlist_created']; ?>
</p>
        
    </div>
    <div class="desc expand">
    <div>
    <span data-key="tv_desc">
    	<?php echo $this->_tpl_vars['desc']['playlist_description']; ?>

    </span>
    </div>
    </div>
    </div>
    <div class="cate_title_wrap" style="display: block;">
    <h2 class="cate_title">
        <b class="c" onclick="">剧集</b>
    </h2>
    </div>
    <?php  $i =0;  ?>
    <?php $_from = $this->_tpl_vars['movies']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['key'] => $this->_tpl_vars['item']):
?>
    <div class="play_list" <?php  if($i != 0){echo 'style="display:none;"';} ?> id="from_content<?php  echo $i;  ?>">
    	<ul>
        	<?php unset($this->_sections['i']);
$this->_sections['i']['name'] = 'i';
$this->_sections['i']['loop'] = is_array($_loop=$this->_tpl_vars['item']) ? count($_loop) : max(0, (int)$_loop); unset($_loop);
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
            <?php if ($this->_tpl_vars['item'][$this->_sections['i']['index']]['vod_file_urls'] == ''): ?>
        	<li><a href="javascript:void(0);" onClick="tanPlay('<?php echo $this->_tpl_vars['item'][$this->_sections['i']['index']]['vod_url']; ?>
')"><?php echo $this->_tpl_vars['item'][$this->_sections['i']['index']]['vod_title']; ?>
</a></li>
            <?php else: ?>
            <li><a href="javascript:void(0);" onClick="tanPlay('<?php echo $this->_tpl_vars['item'][$this->_sections['i']['index']]['vod_file_urls']; ?>
')"><?php echo $this->_tpl_vars['item'][$this->_sections['i']['index']]['vod_title']; ?>
</a></li>
            <?php endif; ?>
            <?php endfor; endif; ?>
        </ul>
    </div>
    
    <?php $i++; ?>
    <?php endforeach; endif; unset($_from); ?>
</div>
<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "footer.html", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
</body>
</html>