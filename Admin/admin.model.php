<?php

	require '../db/connection.php';

	/**
	* Selects all the persons from the database.
	*
	* @param Connection $conn Connection with the database.
	* @return JSON Information of the persons.
	*/
	function loadPersons($conn) {
		$JSON = array();
		$array_data = array();

		$query = "SELECT * FROM person WHERE type='U'";
		$result = $conn->query($query);

	    while($row = mysqli_fetch_array($result)) {
	        $array_data[] = $row;
	    }

	    foreach($array_data as &$row) {
	    	$JSON[] = array(
	    		'id' => $row['id'],
	    		'name' => utf8_encode($row['fullName']),
	    		'email' => $row['email'],
	    		'phoneNumber' => $row['phoneNumber'],
	    		'workplace' => $row['workplace'],
	    		'regionGroup' => utf8_encode($row['regionGroup']),
	    		'receipt' => utf8_encode($row['receipt'])
	    		);
	    }
	    
		echo json_encode($JSON);
	}

	/**
	* Selects all the sessions from the database.
	*
	* @param Connection $conn Connection with the database.
	* @return JSON Information of the sessions.
	*/
	function loadSessions($conn) {
		$JSON = array();
		$array_data = array();

		$query = "SELECT * FROM Session";
		$result = $conn->query($query);

	    while($row = mysqli_fetch_array($result)) {
	        $array_data[] = $row;
	    }

	    foreach($array_data as &$row) {
	    	$JSON[] = array(
	    		'id' => $row['id'],
	    		'name' => $row['name'],
	    		'location' => $row['location'],
	    		'date' => $row['date'],
	    		'hourStart' => $row['hourStart'],
	    		'hourFinish' => $row['hourFinish'],
	    		'capacity' => $row['capacity'],
	    		'maxCapacity' => $row['maxCapacity'],
	    		);
	    }
	    
		echo json_encode($JSON);
	}

	// Try to make the connection with the database.
	$connection = new Connection();
	$conn = $connection->createConnection();

	// Connection successfuly.
	if($conn) {
		// Get the action from the admin factory.
		$action = $_REQUEST['action'];

		if($action === "persons") {
			loadPersons($conn);
		}
		else if($action === 'sessions') {
			loadSessions($conn);
		}
	}
	else {
		echo false;
	}
