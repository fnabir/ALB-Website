<?php
	$name=$_POST["name"];
	$mail=$_POST["email"];
	$phone=$_POST["phone"];
	$message=$_POST["message"];
	
	$email_from='farhan_bd9@yahoo.com';
	$email_subject='New Contact Form';
	
	$email_body= "Name    : $name    .\n".
				 "Email   : $mail    .\n".
				 "Phone   : $phone   .\n".
				 "Message : $message .\n";
				 
	$to="fnoor.abir@gmail.com";
	$headers = "From    : $email-from \r\n";
	$headers .="Reply-To: $mail \r\n";

	mail($to,$email_subject,$email_body,$headers);
	header("Location: index.html");
?>