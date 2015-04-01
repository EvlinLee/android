<?php
function smarty_modifier_mvfrom($string)
{
    switch($string){
			case 'youku':
			return '优酷';
		break;
			case 'tudou':
			return '土豆';
		break;
			case 'sohu':
			return '搜狐';
		break;
			case 'youku':
			return '优酷';
		break;
			case 'iqiyi':
			return '爱奇艺';
		break;
			case 'sina':
			return '新浪';
		break;
			case 'yinyuetai':
			return '音悦台';
		break;
			case '56':
			return '56';
		break;
			case 'ku6':
			return '酷6';
		break;
			case 'ifeng':
			return '凤凰';
		break;
			case 'pptv':
			return 'PPTV聚力';
		break;
			case 'pps':
			return 'PPS';
		break;
			case 'letv':
			return '乐视';
		break;
			case 'qq':
			return '腾讯';
		break;
			default:
			return '未知';
		break;
		}
}