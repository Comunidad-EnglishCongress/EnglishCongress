<?php
	
	require '../db/connection.php';
	
	function login($conn) {
		$JSON = array();
		$array_data = array();

		$email = $_REQUEST['email'];
		$pass = $_REQUEST['pass'];

		$query = "SELECT id, fullName, email, receipt, type FROM Person WHERE email='$email' AND pass='$pass'";
		$result = $conn->query($query);

	    while($row = mysqli_fetch_array($result)) {
	        $array_data[] = $row;
	    }

	    foreach($array_data as &$row) {
	    	$JSON[] = array(
	    		'id' => $row['id'],
	    		'fullName' => $row['fullName'],
	    		'email' => $row['email'],
	    		'receipt' => $row['receipt'],
	    		'type' => $row['type']
	    		);
	    }
	    
	    if($JSON == [])
	    	echo false;
	    else
			echo json_encode($JSON);
	}

	$connection = new Connection();
	$conn = $connection->createConnection();

	if($conn) {
		login($conn);
	}
	else {
		echo false;
	}
