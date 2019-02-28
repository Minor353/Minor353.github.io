<?php
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    
    $mail_message = '
    <html>
    <head>
        <title>Обратный звонок</title>
    </head>
    <body>
        <h2>Обращение</h2>
        <ul>
            <li>Имя:' . $name . '</li>
            <li>Телефон: ' . $phone . '</li>
        </ul>
    </body>
    </html>';
    $headers = "From: Администратор сайта <admin@front-dev.com>\r\n".
                "MIME-Version: 1.0" . "\r\n" .
                "Content-type: text/html; charset=UTF-8" . "\r\n";
    $mail = mail('vankert353@gmail.com', 'Заявка', $mail_message, $headers);

?>