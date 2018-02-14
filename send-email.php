<?php

if ($_SERVER['REQUEST_METHOD'] != 'POST') {
	die('Forbidden');
}

$email = '';
$name = '';
$message = '';

$to = 'lestat8828@gmail.com';
$redirectUrl = '#';

if (isset($_POST['email'])) {
	$email = $_POST['email'];
}

if (isset($_POST['name'])) {
	$name = $_POST['name'];
}

if (isset($_POST['message'])) {
	$message = $_POST['message'];
}

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

$body = "

		${name}
		${email}
		${message}

";

mail($to, 'VLAD DEVELOPER' . date('Y-m-d H:m'), $body);

header("Location: ${$redirectUrl}");