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
        $name = $_GET['first'];
        
        $sql ="SELECT page, dur FROM ".$name;
        
        
        $query = $db->prepare($sql);
        
       // $query->bindValue(':name', $name);
        
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