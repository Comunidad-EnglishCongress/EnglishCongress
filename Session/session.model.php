<?php

    require '../db/connection.php';
    
    function store($conn) {
        // Gets all information received from the session factory.
		$name = utf8_decode($_REQUEST['name']);
		$location = utf8_decode($_REQUEST['location']);
		$date = $_REQUEST['date'];
		$hourStart = $_REQUEST['hourStart'];
		$hourFinish = $_REQUEST['hourFinish'];
		$capacity = $_REQUEST['capacity'];

		$query = "INSERT INTO session (name, location, date, hourStart, hourFinish, capacity, maxCapacity)
		                       VALUES('$name', '$location', '$date', '$hourStart', '$hourFinish', $capacity, $capacity)";
		$result = $conn->query($query);

		echo true;
    }   
     
    // Try to make the connection with the database.
	$connection = new Connection();
	$conn = $connection->createConnection();

	if($conn) {
		// Get the action from the user factory.
		$action = $_REQUEST['action'];
        
		if($action === "store") {
			store($conn);
		}
	}
	else {
		echo false;
	}