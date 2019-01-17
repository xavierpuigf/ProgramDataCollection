<?php
ini_set('display_errors',1);
error_reporting(E_ALL);

$doc = new DOMDocument('1.0');
// we want a nice output
 $doc->formatOutput = true;

 $root = $doc->createElement('book');
 $root = $doc->appendChild($root);

 $title = $doc->createElement('title');
 $title = $root->appendChild($title);

 $text = $doc->createTextNode('This is the title');
 $text = $title->appendChild($text);

$folder = $_POST['folder'];
$action = $_POST['action'];
$xml_name = $_POST['xml_name'];
# echo 'Wrote: ' . $doc->save("./programs/test.xml") . ' bytes'; // Wrote: 72 bytes
if ($action === 'save'){
   $domtree = new DOMDocument('1.0','UTF-8');
   $domtree->formatOutput = true;
   $domtree->preserveWhiteSpace = false;
    $domtree->loadXML($_POST['xml_data']);
    $domtree->save($folder.$xml_name); 	

	echo 'Saved';
}
if ($action === 'load'){
    $domtree = new DOMDocument('1.0','UTF-8');
    $domtree->formatOutput = true;
    $domtree->preserveWhiteSpace = false;
    $domtree->load('../'.$xml_name);
    echo $domtree->saveXML(); 	
}
?>
