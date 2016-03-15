<?php
	
	require '../db/connection.php';

	function insertPerson($conn) {
		$id = $_REQUEST['id'];
		$pass = $_REQUEST['pass'];
		$fullName = utf8_decode($_REQUEST['fullName']);
		$regionGroup = utf8_decode($_REQUEST['regionGroup']);
		$email = $_REQUEST['email'];
		$phone = $_REQUEST['phone'];
		$nationality = $_REQUEST['nationality'];
		$informed = $_REQUEST['informed'];
		$academic = $_REQUEST['academic'];
		$population = $_REQUEST['population'];
		$type = $_REQUEST['type'];

		$query = "INSERT INTO Person (id, pass, fullName, regionGroup, email, phoneNumber, nationality, receipt, informed, academicDegree, teachingPopulation, type)
		                       VALUES('$id','$pass','$fullName','$regionGroup','$email','$phone','$nationality', 0,'$informed',\"$academic\",'$population','$type')";
		$result = $conn->query($query);

		echo true;
	}

	function validateId($conn) {
		$id = $_REQUEST['id'];
		$array_data = array();

		$query = "SELECT id FROM Person WHERE id='$id'";
		$result = $conn->query($query);

		while($row = mysqli_fetch_array($result)) {
	        $array_data[] = $row[0];
	    }

	    echo json_encode($array_data);
	}

	function validateEmail($conn) {
		$email = $_REQUEST['email'];
		$array_data = array();

		$query = "SELECT email FROM Person WHERE email='$email'";
		$result = $conn->query($query);

		while($row = mysqli_fetch_array($result)) {
	        $array_data[] = $row[0];
	    }

	    echo json_encode($array_data);
	}

	function validateGroup($conn) {
		$group = utf8_decode($_REQUEST['group']);
		$array_data = array();

		$query = "SELECT capacity FROM groups WHERE name='$group'";
		$result = $conn->query($query);

		while($row = mysqli_fetch_array($result)) {
	        $array_data[] = $row[0];
	    }

	    echo json_encode($array_data);
	}

	function decrementCapacity($conn) {
		$group = utf8_decode($_REQUEST['group']);

		$query1 = "SELECT capacity FROM groups WHERE name='$group'";
		$result1 = $conn->query($query1);
		$result1 = mysqli_fetch_row($result1);
		$capacity = $result1[0]-1;

		$query2 = "UPDATE groups SET capacity=$capacity WHERE name='$group'";
		$result2 = $conn->query($query2);
	    
		echo true;
	}

	$connection = new Connection();
	$conn = $connection->createConnection();

	if($conn) {
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