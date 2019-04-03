<?php
error_reporting(E_ALL);
ini_set('display_errors',1);


$action = $_POST['action'];

if ($action == 'retrieve'){
	$userId = $_POST['workerid'];
	$aux =  retrieveTasksUndone($userId);
	$final_str = '';
	for ($i = 0; $i < count($aux); $i++){
		if ($i > 0){
			$final_str = $final_str . '?';
		}
		$final_str = $final_str . $aux[$i];
	}
	echo $final_str;
}

if ($action == 'update'){
	updateDB($_POST['workerid'], $_POST['hitId'], $_POST['title'],
	         $_POST['time'], $_POST['assignmentId']);	
	echo 'Done';
}

function disconnectDB($conn){
	mysqli_close($conn);

}
function connectDB(){
	$servername = 'YOUR_SERVERNAME';
	$username = 'YOUR_USERNAME';
	$pwd = 'YOUR_PASSW';
	$dbname = 'YOUR DB';
	$conn = new mysqli($servername, $username, $pwd, $dbname);
	return $conn; 
}
function retrieveTasksUndone($userId){
	$conn = connectDB();
	// There must be at most 25 for each intention. Let us change this
	/*$stmt = $conn->prepare("SELECT u.action_title from intentions as u 
							where u.action_title not in (SELECT distinct(s.action_title) 
									 from submissions as s where s.worker_id = ?
									 union 
									 select s2.action_title as num_task
									 from submissions as s2
									 group by s2.action_title having count(*) >= 25)");
	 */
	$stmt = $conn->prepare("SELECT u.action_title from intentions as u 
							where u.action_title not in (SELECT distinct(s.action_title) 
									 from submissions as s where s.worker_id = ?)");
	$stmt->bind_param("s", $userId);
	$stmt->execute();
	$stmt->bind_result($action_title);
	$actions = array();
	while ($stmt->fetch()){
		array_push($actions, $action_title);
	}
	disconnectDB($conn);
	return $actions;
	
}
function updateDB($userId, $hitID, $title, $time_ellapsed, $assignmentId ){
	$conn = connectDB();
	$title_res = explode('?', $title);
	for ($i = 0; $i < count($title_res); $i++){
		$curr_title = $title_res[$i];
		$stmt = $conn->prepare("insert into submissions 
								(hit_id, worker_id, action_title, date_submission, time_ellapsed, assignment_id)
								VALUES (?,?,?,now(),?,?)");
		$stmt->bind_param("sssis", $hitID, $userId, $curr_title, $time_ellapsed, $assignmentId);
		$stmt->execute();

	}
	disconnectDB($conn);

}
?>
