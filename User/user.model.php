<?php
	
	require '../db/connection.php';

	/**
	* Selects all the sessions from the database that have capacity more than 0.
	*
	* @param Connection $conn Connection with the database.
	* @return JSON Information of the sessions.
	*/
	function loadAllSessions($conn) {
		$JSON = array();
		$array_data = array();

		$query = "SELECT * FROM Session WHERE capacity>0";
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

	/**
	* Insert in the database a session to the sessions of a user.
	*
	* @param Connection $conn Connection with the database.
	* @return boolean true Inserted successfuly.
	*         string The session crashed with another session of the user.
	*         string The session exists in the sessions of the user.
	*/
	function addToMySessions($conn) {
		// Gets the person ID and session ID received from the user factory.
		$idPerson = $_REQUEST['idPerson'];
		$idSession = $_REQUEST['idSession'];

		// Verifies the person don't have the session
		$query1 = "SELECT id FROM personsession WHERE idPerson='$idPerson' AND idSession=$idSession";
		$result1 = $conn->query($query1);
		$result1 = mysqli_fetch_row($result1);

		// Verifies that the select query returns anything.
		if($result1) {
			echo "exists";
		}
		else { // If the select query returns nothing.
			$crash = false;

			// Get the session with the session ID received from the user factory.
			$query2 = "SELECT id,name,date,hourStart,hourFinish FROM session WHERE id=$idSession";
			$result2 = $conn->query($query2);
			$result2 = mysqli_fetch_row($result2);

			$query3 = "SELECT s.id,s.name,s.date,s.hourStart,s.hourFinish FROM person p INNER JOIN personsession ps ON p.id=ps.idPerson INNER JOIN session s ON ps.idSession=s.id WHERE ps.idPerson='$idPerson';";
			$result3 = $conn->query($query3);

	    	while($row = mysqli_fetch_array($result3)) {
	        	if($result2[2] == $row[2]) {
			        if(strtotime($result2[4]) <= strtotime($row[3]) || strtotime($result2[3]) >= strtotime($row[4])) {
			        	
			        }
			        else {
			        	$crash = true;
			        	break;
			        }
			    }
		    }
		    
			if($crash) {
			    echo 'crash';
			}
			else {
			    $query4 = "INSERT INTO personsession(idPerson, idSession) VALUES('$idPerson', $idSession)";
				$result4 = $conn->query($query4);
		    
				echo true;
			}
		}
	}

	/**
	* Selects all the sessions of a user from the database.
	*
	* @param Connection $conn Connection with the database.
	* @return JSON Information of the sessions.
	*/
	function loadMySessions($conn) {
		$JSON = array();
		$array_data = array();

		// Gets the person ID received from the user factory.
		$idPerson = $_REQUEST['idPerson'];

		$query = "SELECT S.id, S.name, S.location, S.date, S.hourStart, S.hourFinish, PC.id as idPersonSession FROM session as S INNER JOIN personsession as PC ON PC.idSession=S.id WHERE PC.idPerson='$idPerson'";
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
	    		'idPersonSession' => $row['idPersonSession']
	    		);
	    }
	    
		echo json_encode($JSON);
	}

	/**
	* Removes a session of the sessions of a user from the database.
	*
	* @param Connection $conn Connection with the database.
	* @return boolean true Removed successfuly.
	*/
	function removeFromMySessions($conn) {
		// Gets the session ID received from the user factory.
		$id = $_REQUEST['id'];

		$query = "DELETE FROM personsession WHERE id=$id";
		$result = $conn->query($query);
	    
		echo true;
	}

	/**
	* Increments the capacity of a session.
	*
	* @param Connection $conn Connection with the database.
	* @return boolean true Incremented successfuly.
	*/
	function incrementCapacity($conn) {
		// Gets the session ID received from the user factory.
		$id = $_REQUEST['id'];
		$query1 = "SELECT capacity FROM session WHERE id=$id";
		$result1 = $conn->query($query1);
		$result1 = mysqli_fetch_row($result1);
		$capacity = $result1[0]+1;

		$query2 = "UPDATE session SET capacity=$capacity WHERE id=$id";
		$result2 = $conn->query($query2);
	    
		echo true;
	}

	/**
	* Decrements the capacity of a session.
	*
	* @param Connection $conn Connection with the database.
	* @return boolean true Decremented successfuly.
	*/
	function decrementCapacity($conn) {
		// Gets the session ID received from the user factory.
		$id = $_REQUEST['id'];
		$query1 = "SELECT capacity FROM session WHERE id=$id";
		$result1 = $conn->query($query1);
		$result1 = mysqli_fetch_row($result1);
		$capacity = $result1[0]-1;

		$query2 = "UPDATE session SET capacity=$capacity WHERE id=$id";
		$result2 = $conn->query($query2);
	    
		echo true;
	}

	/**
	* Changes the receipt state of a user.
	*
	* @param Connection $conn Connection with the database.
	* @return boolean true Decremented successfuly.
	*/
	function changeReceiptState($conn) {
		// Gets the person ID received from the user factory.
		$id = $_REQUEST['id'];

		$query = "UPDATE person SET receipt=1 WHERE id='$id'";
		$result = $conn->query($query);
	    
		echo true;
	}

	// Try to make the connection with the database.
	$connection = new Connection();
	$conn = $connection->createConnection();

	if($conn) {
		// Get the action from the user factory.
		$action = $_REQUEST['action'];

		if($action === "allSessions") {
			loadAllSessions($conn);
		}
		else if($action === "add") {
			addToMySessions($conn);
		}
		else if($action === "mySessions") {
			loadMySessions($conn);
		}
		else if($action === "remove") {
			removeFromMySessions($conn);
		}
		else if($action === "increment") {
			incrementCapacity($conn);
		}
		else if($action === "decrement") {
			decrementCapacity($conn);
		}
		else if($action === "changeReceipt") {
			changeReceiptState($conn);
		}
	}
	else {
		echo false;
	}
