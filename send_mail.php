<?php
/*
This first bit sets the email address that you want the form to be submitted to.
You will need to change this value to a valid email address that you can access.
*/
$webmaster_email = "info@emdixonroche.com";


/*
This bit sets the URLs of the supporting pages.
If you change the names of any of the pages, you will need to change the values here.
*/
$hireme_page = "hireme.html";

// TODO: update these
$feedback_page = "hireme.html";
$error_page = "hireme.html";
$thankyou_page = "hireme.html";


/*
This next bit loads the form field data into variables.
If you add a form field, you will need to add it here.
*/
$yourNameFirst = $_REQUEST['yourNameFirst'] ;
$yourNameLast = $_REQUEST['yourNameLast'] ;
$yourEmail = $_REQUEST['yourEmail'] ;
$industry = $_REQUEST['industry'] ;
$duration = $_REQUEST['duration'] ;
$price = $_REQUEST['price'] ;
$illustration = $_REQUEST['Illustration'];
$ui = $_REQUEST['UI'];
$webtemplate = $_REQUEST['WebTemplate'];
$comments = $_REQUEST['comments'] ;


$msg = 
"First Name: " . $yourNameFirst . "\r\n" . 
"Last Name: " . $yourNameLast . "\r\n" .
"Email: " . $yourEmail . "\r\n" .
"Industry: " . $industry . "\r\n" .
"Project Duration: " . $duration . "\r\n" .
"Budget: " . $price . "\r\n" .
"Type of work" . "\r\n" .
"Illustration: " . $illustration . "\r\n" .
"UI: " . $ui . "\r\n" .
"WebTemplate: " . $webtemplate . "\r\n" .
"Comments: " . $comments ;








/*
The following function checks for email injection.
Specifically, it checks for carriage returns - typically used by spammers to inject a CC list.
*/
function isInjected($str) {
	$injections = array('(\n+)',
	'(\r+)',
	'(\t+)',
	'(%0A+)',
	'(%0D+)',
	'(%08+)',
	'(%09+)'
	);
	$inject = join('|', $injections);
	$inject = "/$inject/i";
	if(preg_match($inject,$str)) {
		return true;
	}
	else {
		return false;
	}
}

// // If the user tries to access this script directly, redirect them to the feedback form,
// if (!isset($_REQUEST['email_address'])) {
// header( "Location: $feedback_page" );
// }

// echo $_REQUEST['email_address']
// echo !isset($_REQUEST['email_address'])

// // If the form fields are empty, redirect to the error page.
// elseif (empty($first_name) || empty($email_address)) {
// header( "Location: $error_page" );
// }


// /* 
// If email injection is detected, redirect to the error page.
// If you add a form field, you should add it here.
// */
// elseif ( isInjected($email_address) || isInjected($first_name)  || isInjected($comments) ) {
// header( "Location: $error_page" );
// }

// // If we passed all previous tests, send the email then redirect to the thank you page.
// else {


	mail( "$webmaster_email", "Feedback Form Results", $msg );

	header( "Location: $thankyou_page" );
// }

?>
