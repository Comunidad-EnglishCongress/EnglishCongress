<?php

    class Connection {
        function createConnection() {
            $servername = "localhost";
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