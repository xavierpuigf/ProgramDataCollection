<?php
function endsWith($haystack, $needle)
{
	    $length = strlen($needle);
		return $length === 0 ||  (substr($haystack, -$length) === $needle);
}
	$final_arr = array();
	$files = scandir('./results_intentions/xml_files/');
	for ($i = 0; $i < count($files); $i++){
		if (endsWith($files[$i], '.xml')){
			array_push($final_arr, $files[$i]);
		}
	}
	echo join('?', $final_arr);
	 

?>
