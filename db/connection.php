<?php

    class Connection {
        function createConnection() {
            $servername = "127.0.0.1";
            $username = "root";
            $password = "";
            $dbname = "englishcongress";

            // Create connection
            $conn = new mysqli($servername, $username, $password, $dbname);
            
            // Check connection
            if (!$conn) {
                return false;
            } 
            return $conn;
        }
    }