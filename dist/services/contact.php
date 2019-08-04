<?php
//display errors:
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

//Libraries:
include_once('class.phpmailer.php');
include_once('class.smtp.php');
include_once('hermes.php');

//endpoint data:
$budget = $_POST;

//build the email:
$tmsg = "Se ha solicitado una cotización a través de la página web de Bruki:\r\n";
$hmsg = '<p>Se ha solicitado una cotización a través de la página web de Bruki</p><p>';
foreach($budget as $key => $value) {
    $tmsg .= $key . ': ' . $value . "\r\n";
    $hmsg .= '<strong>' . $key . ':</strong> ' . $value . '<br />';
}
//send the email:
$cmail = new hermes();
$cmail->to['email'] = 'darath@gmail.com';
$cmail->to['name'] = 'PpToño';
$cmail->subject = 'Solicitud de cotización';
$cmail->text_content = $tmsg;	    
$cmail->html_content = $hmsg;
$mail_sent = $cmail->SMTP_send();

//return response
if($mail_sent) {
    $response['result'] = 'success';
} else {
    $response['result'] = 'error';
    $response['errmsg'] = $cmail->error_info;
}
echo json_encode($response);
?>