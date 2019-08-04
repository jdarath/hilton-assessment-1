<?php
/************************************
*									*
*         Class :: Hermes			*
*   Creation date:	2010-01-09		*
*   Last update:	2018-08-19		*
*	Dev.:	Antonio Salinas			*
*									*
************************************/
//Generation email class

class hermes {
	private $headers; 		//email headers
	private $content; 		//email body
	private $mime_boundary; //MIME Boundary
	var $to;
	var $from;
	var $cc;
	var $cco;
	var $reply_to;
	var $subject;
	var $source;			//original form
	var $html_content;
	var $text_content;
  	var $attachments;     	//Attachments array
	var $error_info;

	//Class constructor
	function __construct() {
		global $sys;
		//Default params:
		$this->from['name'] = 'Contacto web';
		$this->from['email'] = 'contacto@brukimedia.com';
	}
	
	//Build the message:
	private function MkMsg(){
		//MIME Boundary
		$this->mime_boundary = "----HH-HERMES----" . md5(time());
		//Headers
		$this->headers = "";
		$this->headers .= "From: " . $this->from['name'] . " < " . $this->from['email'] . " >\r\n";
		$this->headers .= "Return-path: " . $this->from['name'] . " < " . $this->from['email'] . " >\r\n";
		if($this->reply_to != "") { $this->headers .= "Reply-to: " . $this->reply_to['email'] . "\r\n"; }
		if($this->cc != "") { $this->headers .= "CC: " . $this->cc . "\r\n"; }
		if($this->cco != "") { $this->headers .= "CCO: " . $this->cco . "\r\n"; }
		$this->headers .= "MIME-Version: 1.0\n" .
						  "Content-Type: multipart/alternative; -boundary=\"" . $this->mime_boundary . "\"\r\n";
		//Content
		//if($this->source == '') $this->source = 'Formulario de contacto - Sitio web';
		$this->content = "";
		if($this->text_content != "") {
			$this->content .= "--" . $this->mime_boundary . "\n" . 
							  "Content-Type: text/plain; charset=\"utf-8\"\r\n" .
							  "Content-Transfer-Encoding: 7bit\n\n" .
							  $this->text_content . "\n\n";
		}
		if($this->html_content != "") {
			$this->html_full = 
					"<html>\n<body>\n" . 
						"<div style=\"position: relative; width: 100%;\">" .
							"<div style=\"background-color: #FC0639; display: flex; display-wrap: wrap; min-height: 80px; margin: 0px auto; width: 100%;\">" . 
								"<a href=\"bruki.com\" style=\"display: inline-block; max-width: 100%; width: 40%;\" target=\"_blank\" title=\"Bruki\">" . 
									"<img src=\"http://brukimedia.com/assets/logo_w.png\" alt=\"logo\" style=\"border: none; height: auto; margin: 9px; max-width: 100%; width: auto;\">" .
								"</a>";
			if($this->source != '')
				$this->html_full .= "<div style=\"display: inline-block; max-width: 100%; width: 60%;\">" . 
										"<span style=\"color: #e5e5e5; float: right; margin: 30px 15px 0;\">" . $this->source . "</span>" . 
									"</div>";
			$this->html_full .=	
							"</div>\n" . 
							"<div style=\"background-color: #ffffff; color: #3B3B3B; font-family: Lucida Sans Unicode, Lucida Grande, sans-serif; font-size: 14px; margin: 0px auto; overflow: auto; padding: 20px 5%; max-width: 90%; width: 90%;\">" . 
								$this->html_content . "\n" .
							"</div>" . 
							"<div style=\"background-color: #FC0639; min-height: 28px; margin: 0px auto; max-width: 100%; text-align: center; width: 100%;\">" . 
								"<a href=\"http://bruki.com\" style=\"color: #e5e5e5; display: block; font-family: sans-serif; font-size: 11px; font-weight: bold; margin: 0 auto; max-width: 80%; padding-top: 8px; text-decoration: none;\" target=\"_blank\" title=\"Ekiria\">" . 
									"&copy; Bruki " . date('Y') .
								"</a>" .
							"</div>" . 
						"</div>" .
					"</body>\n</html>\n\n";
			$this->content .= "--" . $this->mime_boundary . "\r\n" . 
					"Content-Type: text/html; charset=\"utf-8\"\r\n" .
					"Content-Transfer-Encoding: 7bit\r\n\n" . 
					$this->html_full;
		}
		$this->content .= "--" . $this->mime_boundary . "\n";
		$this->content = wordwrap($this->content, 70);
	}
  
  public function addAttachment($name, $file) {
    $this->attachments[] = array('name' => $name, 'file' => $file);
  }
	
	//Simple standard sending.
	//NOT RECOMMENDED :: GMail and several other spam filters may have trouble with this one.
	public function send(){
		$this->MkMsg();
		$mail_sent = mail($this->to['name'] . ' ' . $this->to['email'], $this->subject, $this->content, $this->headers);
	}	
	
	//SMTP sending
	public function SMTP_send() {
		//Call PHPMailer Class
		require_once('class.phpmailer.php');
		//Generate message
		$this->MkMsg();
		//Build PHP Mailer structure for SMTP sending
		$mailer = new PHPMailer();
		$mailer->CharSet = 'utf-8';
		$mailer->IsSMTP();
		$mailer->Host = 'chi-node59.websitehostserver.net';
		$mailer->SMTPDebug = false;
		$mailer->SMTPAuth = true;
		$mailer->Username = 'contacto@brukimedia.com';
		$mailer->Password = 'C0nt4ctBruk!';
		$mailer->Port = 465;
		$mailer->SMTPSecure = 'ssl';
		$mailer->SetFrom($this->from['email'], $this->from['name']);
		$mailer->AddAddress($this->to['email'], $this->to['name']);
		if($this->reply_to != '') $mailer->AddReplyTo($this->reply_to['email'], $this->reply_to['name']);
		$mailer->Subject = $this->subject;
		$mailer->AltBody = $this->text_content;
		$mailer->MsgHTML($this->html_full);
		//Are there attachments?
		if(isset($this->attachments)) {
			foreach($this->attachments as $file) {
				$mailer->AddAttachment($file['file'], $file['name']);
			}
		}
		//Send the email:
		$mail_sent = $mailer->Send();
		if(!$mail_sent) $this->error_info = $mailer->ErrorInfo;
		return $mail_sent;
	}
}
?>