<?php
  header("Content-Type: text/html; charset=UTF-8");
  try {
    $db = new PDO('sqlite:Pages');		
    $db->setAttribute(PDO::ATTR_ERRMODE,	
		      PDO::ERRMODE_EXCEPTION);  
    
    //echo "Vi lyckades kontakta databas!!!";
  }
  catch (PDOException $e) {
    echo "PDO fel: ".$e->getMessage();       
    exit();
	}


if(isset($_GET['first'])){
    try{



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

//echo json_encode($result);
echo $result;

if(!curl_exec($ch)){
    die('Error: "' . curl_error($ch) . '" - Code: ' . curl_errno($ch));
}


curl_close ($ch);



    
        
        
    }
    catch (PDOException $e) {
			echo "PDO fel: ".$e->getMessage();      
			exit();
		}
    
}


if(isset($_GET['content'])){
    try{
        //  $url = $_GET['sec'];
        
        $sql ="SELECT name FROM sqlite_master WHERE type='table';";
        
        $query = $db->prepare($sql);
        //$query->bindValue(':name', $name);
        $query -> execute();
    
        while($r = $query->fetch(PDO::FETCH_ASSOC)){ 
     			$arr[] = $r;
     		}
       
     
        echo json_encode($arr);
        
    
        
        
    }
    catch (PDOException $e) {
			echo "PDO fel: ".$e->getMessage();      
			exit();
		}
    
}