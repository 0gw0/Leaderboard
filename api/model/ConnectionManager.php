<?php

class ConnectionManager{

    public function getConnection() {
        $servername = 'localhost';
        $username = 'root';
        $password = 'root';
        $dbname = 'leaderboard';
        $port = 8889;
        
        // Create connection
        $conn = new PDO("mysql:host=$servername;dbname=$dbname;port=$port", $username, $password);     
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); // if fail, exception will be thrown

        // Return connection object
        return $conn;
    }
}

?>