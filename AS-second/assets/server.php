<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $text = $_POST['text'];
    
    $mail_message = '
    <html>
    <head>
        <title>Заявка на проект</title>
    </head>
    <body>
        <h2>Хочу сайт</h2>
        <ul>
            <li>Имя:' . $name . '</li>
            <li>Почта: ' . $email . '</li>
            <li>Телефон: ' . $phone . '</li>
            <li>Сообщение: ' . $text . '</li>
        </ul>
    </body>
    </html>';
    $headers = "From: Администратор сайта <admin@front-dev.com>\r\n".
                "MIME-Version: 1.0" . "\r\n" .
                "Content-type: text/html; charset=UTF-8" . "\r\n";
    $mail = mail('vankert353@gmail.com', 'Заявка', $mail_message, $headers);
?>