<?php

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__.'./../');
$dotenv->load();

return [
    'db' => [
        'host' => $_ENV['DB_HOST'],
        'dbname' => $_ENV['DB_NAME'],
        'user' => $_ENV['DB_USER'],
        'password' => ''
    ],
];