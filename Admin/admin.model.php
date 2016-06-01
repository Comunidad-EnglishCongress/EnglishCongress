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
	    		'workplace' => utf8_encode($row['workplace']),
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

		$query = "SELECT * FROM session";
		$result = $conn->query($query);

	    while($row = mysqli_fetch_array($result)) {
	        $array_data[] = $row;
	    }

	    foreach($array_data as &$row) {
	    	$JSON[] = array(
	    		'id' => $row['id'],
	    		'name' => utf8_encode($row['name']),
	    		'speaker' => utf8_encode($row['speaker']),
	    		'location' => utf8_encode($row['location']),
	    		'date' => $row['date'],
	    		'hourStart' => $row['hourStart'],
	    		'hourFinish' => $row['hourFinish'],
	    		'capacity' => $row['capacity'],
	    		'maxCapacity' => $row['maxCapacity'],
	    		);
	    }
	    
		echo json_encode($JSON);
	}

	/**
	* Removes a user from the database.
	*
	* @param Connection $conn Connection with the database.
	* @return boolean Result of the removes.
	*/
	function removePerson($conn) {
		// Gets the user's ID received from the admin factory.
		$id = $_REQUEST['id'];

		$query = "DELETE FROM person WHERE id='$id'";
		$result = $conn->query($query);
	    
		echo true;
	}

	/**
	* Increments the capacity of a group.
	*
	* @param Connection $conn Connection with the database.
	* @return boolean true Decremented successfuly.
	*/
	function incrementCapacity($conn) {
		// Gets the group received from the registration factory.
		$group = utf8_decode($_REQUEST['group']);

		$query1 = "SELECT capacity FROM groups WHERE name='$group'";
		$result1 = $conn->query($query1);
		$result1 = mysqli_fetch_row($result1);
		$capacity = $result1[0]+1;

		$query2 = "UPDATE groups SET capacity=$capacity WHERE name='$group'";
		$result2 = $conn->query($query2);
	    
		echo true;
	}

	/**
	* Changes the receipt state of a user in the database.
	*
	* @param Connection $conn Connection with the database.
	* @return boolean true Decremented successfuly.
	*/
	function changeReceiptState($conn) {
		// Gets the person ID received from the user factory.
		$id = $_REQUEST['id'];
		$receipt = $_REQUEST['receipt'];

		$query = "UPDATE person SET receipt=$receipt WHERE id='$id'";
		$result = $conn->query($query);
	    
		echo true;
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
		else if($action === 'remove') {
			removePerson($conn);
		}
		else if($action === 'increment') {
			incrementCapacity($conn);
		}
		else if($action === "changeReceiptState") {
			changeReceiptState($conn);
		}
	}
	else {
		echo false;
	}
