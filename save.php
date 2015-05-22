<?php
     
	 $data = file_get_contents("php://input");
	 
	 
	 $filename= "storage".time().".txt";
	 
     $myfile = fopen($filename, "a+") or die("Unable to open file!");
     $json = json_decode($data, true) ;
	 
	
	 $need=implode("|",$json['listNeed']);
	 $noneed=implode("|",$json['listNoNeed']);
	
	

	 $body  = 
		 "Section: ".$json['section']
		  ."\rType: ".((!empty($json['gadget'])) ? $json['gadget'] : '').((!empty($json['other'])) ? ("|".$json['other']) : '')
			  
	 		 ."\rNeed: ".$need
				."\rNo Need: ".$noneed
		 ."\rName: ".$json['name']."\r\nCity: ".$json['city'] ."\r\nEmail: ". $json['email']
		 ."\rProfession: ".
		 		  ((!empty($json['prof'])) ? $json['prof'] : '')
			 		 ."\rHobbies: ".
			 		 		  ((!empty($json['hobbie'])) ? $json['hobbie'] : '')
		 
		 ."\rAge: ".((!empty($json['age'])) ? $json['age'] : '')
		 ."\rBudget: ".((!empty($json['budget'])) ? $json['budget'] : '')
								  
		 . "\rMessage:".$json['message'];
	 
	 // if(empty($body))
	 //  {
	 //     $data['success'] = false;
	 //  }
	 
	 fwrite($myfile, $body);
     fclose($myfile);
	 
	 echo 'success'; //So it gets send as data - otherwise goes to the error page
	 
	 
	
    // $to      = 'lucianavlop@gmail.com';
 // 	$subject = 'Premium Shopping';
 // 	$headers = 'From: technologyshoppers@example.com' . "\r\n" .
 // 	    'Reply-To: technologyshoppers@example.com' . "\r\n" .
 // 	    'X-Mailer: PHP/' . phpversion();
 //
 // 	mail($to, $subject,  $body  , $headers);

?>