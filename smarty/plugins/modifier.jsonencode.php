<?php

function smarty_modifier_jsonencode($array)
{
    if(!empty($array)){
		return json_encode($array);	
	}
}