<?php

function smarty_modifier_urlencode($string)
{
    if(!empty($string)){
		return urlencode($string);	
	}
}