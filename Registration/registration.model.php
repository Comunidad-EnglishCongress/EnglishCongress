<?php
	
	require '../db/connection.php';

	/**
	* Insert a new person at the database.
	*
	* @param Connection $conn Connection with the database.
	* @return boolean true Added successfuly.
	*/
	function insertPerson($conn) {
		// Gets all information received from the registration factory.
		$id = $_REQUEST['id'];
		$pass = $_REQUEST['pass'];
		$fullName = utf8_decode($_REQUEST['fullName']);
		$regionGroup = utf8_decode($_REQUEST['regionGroup']);
		$email = utf8_decode($_REQUEST['email']);
		$phone = $_REQUEST['phone'];
		$workplace = utf8_decode($_REQUEST['workplace']);
		$informed = utf8_decode($_REQUEST['informed']);
		$academic = utf8_decode($_REQUEST['academic']);
		$population = utf8_decode($_REQUEST['population']);
		$type = $_REQUEST['type'];

		$query = "INSERT INTO person (id, pass, fullName, regionGroup, email, phoneNumber, workplace, receipt, informed, academicDegree, teachingPopulation, type)
		                       VALUES('$id','$pass','$fullName','$regionGroup','$email','$phone','$workplace', 0,'$informed',\"$academic\",'$population','$type')";
		$result = $conn->query($query);

		echo true;
	}

	/**
	* Validates that a ID is unique.
	*
	* @param Connection $conn Connection with the database.
	* @return JSON Object with information.
	*/
	function validateId($conn) {
		// Gets the ID received from the registration factory.
		$id = $_REQUEST['id'];
		$array_data = array();

		$query = "SELECT id FROM person WHERE id='$id'";
		$result = $conn->query($query);

		while($row = mysqli_fetch_array($result)) {
	        $array_data[] = $row[0];
	    }

	    echo json_encode($array_data);
	}

	/**
	* Validates that a e-mail is unique.
	*
	* @param Connection $conn Connection with the database.
	* @return JSON Object with information.
	*/
	function validateEmail($conn) {
		// Gets the e-mail received from the registration factory.
		$email = $_REQUEST['email'];
		$array_data = array();

		$query = "SELECT email FROM person WHERE email='$email'";
		$result = $conn->query($query);

		while($row = mysqli_fetch_array($result)) {
	        $array_data[] = $row[0];
	    }

	    echo json_encode($array_data);
	}

	/**
	* Validates that a group have capacity yet.
	*
	* @param Connection $conn Connection with the database.
	* @return JSON Object with information.
	*/
	function validateGroup($conn) {
		// Gets the group received from the registration factory.
		$group = utf8_decode($_REQUEST['group']);
		$array_data = array();

		$query = "SELECT capacity FROM groups WHERE name='$group'";
		$result = $conn->query($query);

		while($row = mysqli_fetch_array($result)) {
	        $array_data[] = $row[0];
	    }

	    echo json_encode($array_data);
	}

	/**
	* Decrements the capacity of a group.
	*
	* @param Connection $conn Connection with the database.
	* @return boolean true Decremented successfuly.
	*/
	function decrementCapacity($conn) {
		// Gets the group received from the registration factory.
		$group = utf8_decode($_REQUEST['group']);

		$query1 = "SELECT capacity FROM groups WHERE name='$group'";
		$result1 = $conn->query($query1);
		$result1 = mysqli_fetch_row($result1);
		$capacity = $result1[0]-1;

		$query2 = "UPDATE groups SET capacity=$capacity WHERE name='$group'";
		$result2 = $conn->query($query2);
	    
		echo true;
	}

	// Try to make the connection with the database.
	$connection = new Connection();
	$conn = $connection->createConnection();

	if($conn) {
		// Get the action from the registration factory.
		$action = $_REQUEST['action'];

		if($action === 'insert') {
			insertPerson($conn);
		}
		else if($action === 'validateId') {
			validateId($conn);
		}
		else if($action === 'validateEmail') {
			validateEmail($conn);
		}
		else if($action === 'validateGroup') {
			validateGroup($conn);
		}
		else if($action === 'decrement') {
			decrementCapacity($conn);
		}
	}
	else {
		echo false;
	}