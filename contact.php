<?php
    $name = $_Post['name'];
    $visitor_email = $['message'];
    $message = $_POST['message'];

    $email_from = 'creedcaoimhe@gmail.com';

    $email_subject = 'New Form Submission'

    $email_body = "User Name: $name.\n".
                    "User Email: $visitor_email.\n".
                        "Uer Message: $message.\n";
                    
    $to = "caoimhe172@gmail.com";

    $headers = 'From: $email_from \r\n";

    $headers .= "Reply-To: $visitor_email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("Location: contact.html");

?>