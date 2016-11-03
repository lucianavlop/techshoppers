<?php

     require_once 'lib/swift_required.php';
     
	 $data = file_get_contents("php://input");
	 
	 $data_store= getenv('OPENSHIFT_DATA_DIR');
	 $filename=  $data_store.'storage'.time().'.txt';
	 
	 error_log("Filename:".$filename , 0);
	  
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
	 
	
	
	$subject = 'Your tech Shoppers';
	 // make sure you get these SMTP settings right
	 $transport = Swift_SmtpTransport::newInstance('smtp.gmail.com', 465, "ssl") 
	     ->setUsername('lucianavlop@gmail.com')
	     ->setPassword('navaza4622');

	 $mailer = Swift_Mailer::newInstance($transport);
	 // the message itself
	 $message = Swift_Message::newInstance($subject)
	     ->setFrom(array('info@yourtechshoppers.com' => $json['section']))
	     ->setTo(array('lucianavlop@gmail.com'))
	     ->setBody($body);

	 $result = $mailer->send($message);
	 
	 
	 echo 'success'; //So it gets send as data - otherwise goes to the error page
	 
	
   	//     $to      = 'lucianavlop@gmail.com';
  	// $subject = 'Premium Shopping';
  	// $headers = 'From: hello@yourtechshoppers.com' . "\r\n" .
  	//     'Reply-To: hello@yourtechshoppers.com' . "\r\n" .
  	//     'X-Mailer: PHP/' . phpversion();
  	//
  	// mail($to, $subject,  $body  , $headers);

?>