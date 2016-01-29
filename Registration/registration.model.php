<?php
	
	require '../db/connection.php';

	function insertPerson($conn) {
		$id = $_REQUEST['id'];
		$pass = $_REQUEST['pass'];
		$fullName = $_REQUEST['fullName'];
		$regionGroup = $_REQUEST['regionGroup'];
		$email = $_REQUEST['email'];
		$phone = $_REQUEST['phone'];
		$nationality = $_REQUEST['nationality'];
		$depositNumber = $_REQUEST['depositNumber'];
		$direccion = $_REQUEST['direccion'];
		$informed = $_REQUEST['informed'];
		$academic = $_REQUEST['academic'];
		$population = $_REQUEST['population'];
		$type = $_REQUEST['type'];

		$query = "INSERT INTO Person VALUES('$id','$pass','$fullName','$regionGroup','$email','$phone','$nationality','$depositNumber','$direccion','$informed','$academic','$population','$type')";
		$result = $conn->query($query);

		echo true;
	}

	$connection = new Connection();
	$conn = $connection->createConnection();

	if($conn) {
		insertPerson($conn);
	}
	else {
		echo false;
	}