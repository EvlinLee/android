<?php


// Access denied
//isset($GLOBALS['HAVE_PC']) or die('Access denied');

/**
 * Net
 * 
 * net lib
 *
 * @author beShy <i@beshy.net>
 * @created 
 */
Class Net
{ // BEGIN class Net
	
	/**
	 * getRequestHeaders
	 *
	 * @return	void
	 */
	public static function getRequestHeaders( $relate=false )
	{ // BEGIN getRequestHeaders
		static $headers = array(array(),array());
		if (empty($headers[0]))
			foreach($_SERVER as $key => $value) {
				if(strpos($key, 'HTTP_') === 0) {
					$headerkey = str_replace(' ', '-', ucwords(str_replace('_', ' ', strtolower(substr($key, 5)))));
					$headers[0][] = "$headerkey: $value";
					$headers[1][$headerkey] = $value;
				}
			}
		return $relate ? $headers[1] : $headers[0];

	} // END getRequestHeaders


	/**
	 * redirectAndContinue
	 *
	 * @return	void
	 */
	public static function redirectAndContinue( $url )
	{ // BEGIN redirectAndContinue
		header( "Location: ".$url) ; 
		ob_end_clean();
		header("Connection: close"); 
		ignore_user_abort();
		ob_start(); 
		header("Content-Length: 0"); 
		ob_end_flush(); 
		flush();
		session_write_close();
	} // END redirectAndContinue


	/**
	 * location
	 *
	 * @return	void
	 */
	public static function location( $url )
	{ // BEGIN location
		header('Location: '.$url);
	} // END location

	/**
	 * get
	 *
	 * @return	void
	 */
	public static function get( $url, $o=array() )
	{ // BEGIN get
		$mk = 'Net::get_'.$url;
		// if ( is_numeric($e) && $e>0  && ($c=Cache::get($mk)) && !empty($c))
		// {
		// 	return $c;
		// }

		if (empty($o))
			$c = file_get_contents($url);
		else
		{
			$ctx = stream_context_create($o);
			$c = file_get_contents($url, 0, $ctx);
		}

		if (empty($c))
			return false;

		// if (is_numeric($e) && $e>0)
		// {
		// 	Cache::set($mk, $c, $e);
		// }

		return $c;
	} // END get


	/**
	 * curl
	 *
	 * @return	void
	 */
	public static function curl( $url, $o=array(), $retryCount=0 )
	{ // BEGIN curl
		// check cache
		$mk = 'Net::curl_'.$url;
		//if ( is_numeric($e) && $e>0  && ($c=Cache::get($mk)) && !empty($c))
		//{
		//	return $c;
		//}

		if (!is_array($o))
			$o = array();

		$options = array(
					CURLOPT_RETURNTRANSFER => true,     // return web page        
					CURLOPT_HEADER         => false,    // don't return headers        
					//CURLOPT_FOLLOWLOCATION => true,     // follow redirects        
					CURLOPT_ENCODING       => "",       // handle all encodings        
					CURLOPT_USERAGENT      => 'gnome-vfs/2.24.2 Firefox/3.5.2', // who am i        
					CURLOPT_AUTOREFERER    => true,     // set referer on redirect        
					CURLOPT_CONNECTTIMEOUT => 60,      // timeout on connect        
					CURLOPT_TIMEOUT        => 60,      // timeout on response        
					CURLOPT_MAXREDIRS      => 10,       // stop after 10 redirects    
				) + $o;

		$retryCount++;
		$retry=0;
		$c='';
		while( empty($c) && $retry < $retryCount ){	

			$ch = curl_init( $url );

			curl_setopt_array( $ch, $options );

			$c = curl_exec( $ch );    

			$errno = curl_errno( $ch );    
			//$errmsg = curl_error( $ch );    
			$header = curl_getinfo( $ch );  

			curl_close( $ch );
	
			//error: bad url, timeout, redirect loop ...  
			if ( $errno != 0 )
				return FALSE;

			$retry++;  
		}  

		//error: no page, no permissions, no service ...
		if ( $header['http_code'] != 200 && $header['http_code'] != 302)
			return FALSE;

		// set cache
		//if (is_numeric($e) && $e>0)
		//{
		//	Cache::set($mk, $c, $e);
		//}

		return $c;
	} // END curl









} // END class Net


