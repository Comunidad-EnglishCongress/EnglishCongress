<?php
	
	require '../db/connection.php';

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

	function addToMySessions($conn) {
		$idPerson = $_REQUEST['idPerson'];
		$idSession = $_REQUEST['idSession'];

		$query1 = "SELECT id FROM personsession WHERE idPerson='$idPerson' AND idSession=$idSession";
		$result1 = $conn->query($query1);
		$result1 = mysqli_fetch_row($result1);

		if($result1) {
			echo "exists";
		}
		else {
			$crash = false;

			$query2 = "SELECT id,name,date,hourStart,hourFinish FROM session WHERE id=$idSession";
			$result2 = $conn->query($query2);
			$result2 = mysqli_fetch_row($result2);
			//echo(json_encode($result2))."<br><br>";

			$query3 = "SELECT s.id,s.name,s.date,s.hourStart,s.hourFinish FROM person p INNER JOIN personsession ps ON p.id=ps.idPerson INNER JOIN session s ON ps.idSession=s.id WHERE ps.idPerson='$idPerson';";
			$result3 = $conn->query($query3);

	    	while($row = mysqli_fetch_array($result3)) {
				//echo $row[0]." - ".$row[1]." - ".$row[2]." - ".$row[3]." - ".$row[4]."<br>";
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

	function loadMySessions($conn) {
		$JSON = array();
		$array_data = array();

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

	function removeFromMySessions($conn) {
		$id = $_REQUEST['id'];

		$query = "DELETE FROM personsession WHERE id=$id";
		$result = $conn->query($query);
	    
		echo true;
	}

	function incrementCapacity($conn) {
		$id = $_REQUEST['id'];
		$query1 = "SELECT capacity FROM session WHERE id=$id";
		$result1 = $conn->query($query1);
		$result1 = mysqli_fetch_row($result1);
		$capacity = $result1[0]+1;

		$query2 = "UPDATE session SET capacity=$capacity WHERE id=$id";
		$result2 = $conn->query($query2);
	    
		echo true;
	}

	function decrementCapacity($conn) {
		$id = $_REQUEST['id'];
		$query1 = "SELECT capacity FROM session WHERE id=$id";
		$result1 = $conn->query($query1);
		$result1 = mysqli_fetch_row($result1);
		$capacity = $result1[0]-1;

		$query2 = "UPDATE session SET capacity=$capacity WHERE id=$id";
		$result2 = $conn->query($query2);
	    
		echo true;
	}

	$connection = new Connection();
	$conn = $connection->createConnection();

	if($conn) {
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
	}
	else {
		echo false;
	}
