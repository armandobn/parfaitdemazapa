<?php

require '../vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createImmutable('../');
$dotenv->load();
echo $_ENV['ACTIVE_KEY'];

?>