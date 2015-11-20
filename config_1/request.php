<?php
/*
// Get cURL resource
$curl = curl_init();
// Set some options - we are passing in a useragent too here
curl_setopt_array($curl, array(
    CURLOPT_RETURNTRANSFER => 1,
    CURLOPT_URL => 'http://confluence.miclaser.net/rest/api/content/30125745?expand=body.storage',
    CURLOPT_USERAGENT => 'Codular Sample cURL Request'
));
// Send the request & save response to $resp
$resp = curl_exec($curl);
$pages = http://confluence.miclaser.net/rest/api/content/30125745?expand=body.storage;
$username='SEBAER0';
$password='LkNQf5DV';
echo $resp;
*/


$username='SEEDGU0';
$password='hlmca2Hx';
$URL='http://confluence.miclaser.net/rest/api/content/30126059?expand=body.storage';

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL,$URL);
curl_setopt($ch, CURLOPT_TIMEOUT, 30); //timeout after 30 seconds
curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
curl_setopt($ch, CURLOPT_USERPWD, "$username:$password");
$status_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);   //get status code
$result=curl_exec ($ch);

echo $result;

if(!curl_exec($ch)){
    die('Error: "' . curl_error($ch) . '" - Code: ' . curl_errno($ch));
}


curl_close ($ch);



/*


if(!curl_exec($curl)){
    die('Error: "' . curl_error($curl) . '" - Code: ' . curl_errno($curl));
}
// Close request to clear up some resources
curl_close($curl);
*/