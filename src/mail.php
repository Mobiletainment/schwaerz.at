<?php

// configure
$from = 'Schwärz.at [Website] <kontakt@schwaerz.at>';
$sendTo = 'David Pertiller <david@pertiller.net>';
$subject = 'Kontaktformular';
$fields = array('name' => 'Von', 'email' => 'Email', 'message' => 'Nachricht');
$okMessage = 'submitted';
$errorMessage = 'error';

$data = json_decode(file_get_contents('php://input'), true);

$replyTo = $data['email'];


// let's do the sending
try
{
    $emailText = "";

    foreach ($data as $key => $value) {
        if (isset($fields[$key])) {
            $emailText .= "$fields[$key]: $value <br>";
        }
    }

    if (strlen($replyTo) == 0 || strlen($emailText) === 0) {
        throw new Exception('Missing contact information');
    }

    $emailText = 'Es wurde eine neue Nachricht gesendet:<br>' . nl2br($emailText);

    $headers = array('Content-Type: text/html; charset="UTF-8";',
        'From: ' . $from,
        'Reply-To: ' . $replyTo
    );


    mail($sendTo, $subject, $emailText, implode("\r\n", $headers));

    $responseArray = array('type' => 'success', 'message' => $okMessage);
}
catch (\Exception $e)
{
    $responseArray = array('type' => 'danger', 'message' => $errorMessage);
}

if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    $encoded = json_encode($responseArray);

    header('Content-Type: application/json');

    echo $encoded;
}
else {
    echo $responseArray['message'];
}
