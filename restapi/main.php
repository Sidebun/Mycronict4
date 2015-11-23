<?php
  header("Content-Type: text/html; charset=UTF-8");
//$password= '686c6d6361324878';
//$password = hex2bin($password);
//echo(bin2hex($password));
//echo(hex2bin($password));

if(isset($_GET['sdf55FF6477dsdjhfb46'])){
    try{


//the password, username and url to rest api page
$password='hlmca2Hx';
$username='SEEDGU0';


$URL='http://confluence.miclaser.net/rest/api/content/30126059?expand=body.storage';
    
        
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL,$URL);
curl_setopt($ch, CURLOPT_TIMEOUT, 30); //timeout after 30 seconds
curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
curl_setopt($ch, CURLOPT_USERPWD, "$username:$password");
$status_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);   //get status code
$result=curl_exec ($ch);
//print the result
echo $result;

if(!curl_exec($ch)){
    die('Error: "' . curl_error($ch) . '" - Code: ' . curl_errno($ch));
}

//close the curl request
curl_close ($ch);
 
    } // catch any errors and print them
    catch (PDOException $e) {
			echo "PDO fel: ".$e->getMessage();      
			exit();
		}
    
}