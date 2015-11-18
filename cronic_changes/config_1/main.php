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
        $url = $_GET['first'];
        
        $sql ="SELECT * FROM list";
        
        $query = $db->prepare($sql);
        //$query->bindValue(':name', $name);
        $query -> execute();
    
        while($r = $query->fetch(PDO::FETCH_ASSOC)){ 
     			$arr[] = $r;
     		}
       
        $text = "";
        $numb = "";
        
        foreach($arr as $row){
          $text .=  $row['url']." ";
            $numb .= $row['dur']." ";    
        }
            echo ($text);echo "~~"; echo $numb;
        
        
        
    }
    catch (PDOException $e) {
			echo "PDO fel: ".$e->getMessage();      
			exit();
		}
    
}