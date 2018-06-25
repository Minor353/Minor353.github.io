<?php
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $street = $_POST['street'];
    $house = $_POST['house'];
    $housePart = $_POST['house-part'];
    $flat = $_POST['flat'];
    $floor = $_POST['floor'];
    $message = $_POST['coment'];
    $pay = $_POST['pay'];

    $disturb = $_POST['not-call']; // 1 или null
    $disturb = isset($disturb) ? 'НЕТ' : 'ДА';

    $mail_message = '
    <html>
    <head>
        <title>Заявка</title>
    </head>
    <body>
        <h2>Заказ</h2>
        <ul>
            <li>Имя:' . $name . '</li>
            <li>Телефон: ' . $phone . '</li>
            <li>Улица: ' . $street . '</li>
            <li>Дом: ' . $house . '</li>
            <li>Корпус: ' . $housePart . '</li>
            <li>Этаж: ' . $floor . '</li>
            <li>Способ оплаты: ' . $pay . '</li>
            <li>Комментарий к заказу: ' . $message . '</li>
            <li>Нужно ли перезванивать клиенту: ' . $disturb . '</li>
        </ul>
    </body>
    </html>';

    $headers = "From: Администратор сайта <admin@mrBurger.com>\r\n".
                "MIME-Version: 1.0" . "\r\n" .
                "Content-type: text/html; charset=UTF-8" . "\r\n";

    $mail = mail('vankert353@gmail.com', 'Заказ', $mail_message, $headers);


//    $info = [];
//
//    if ($mail) {
//        $info["status"] = "OK";
//        $info["mes"] = "Письмо успешно отправлено";
//    }else{
//        $info["status"] = "NO";
//        $info["mes"] = "На сервере произошла ошибка";
//    }
//
//    echo json_encode($info);

?>
