<?php

$fio = $_POST['fio'];
$tel = $_POST['tel'];

$fio = htmlspecialchars($fio);
$fio = urldecode($fio);
$fio = trim($fio);
$tel = htmlspecialchars($tel);
$tel = urldecode($tel);
$tel = trim($tel);

mail("example@email.com", "Заявка с сайта", "ФИО:".$fio.". Телефон: ".$tel);