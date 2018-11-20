<?php

$conn = new mysqli("localhost", "root", "", "crud_");
if ($conn->connect_error) {
	die("Database connection established Failed..");
}
$res = array('error' => false);



$action = 'read';
$obj = 'users';
if (isset($_GET['action'])) {
	$action = $_GET['action'];
}
if (isset($_GET['obj'])) {
	$obj = $_GET['obj'];
}


if ($action == 'read' && $obj == 'users') {
	$result = $conn->query("SELECT * FROM `users`");
	$users = array();

	while ($row = $result->fetch_assoc()){
		array_push($users, $row);
	}
	$res['users'] = $users;
}

if ($action == 'create' && $obj == 'users') {

	$nickName = $_POST['nickName'];
	$email = $_POST['email'];
	$password = $_POST['password'];
	$statusOnline = $_POST['statusOnline'];

	$result = $conn->query("INSERT INTO `users`(`nickName`, `email`, `password`, `statusOnline`) VALUES ('$nickName', '$email', '$password','$statusOnline') ");
	if ($result) {
		$res['message'] = "User Added successfully";
	} else{
		$res['error'] = true;
		$res['message'] = "Insert User fail";
	}
}


if ($action == 'update' && $obj == 'users') {
	$id = $_POST['id'];
	$nickName = $_POST['nickName'];
	$email = $_POST['email'];
	$password = $_POST['password'];
    $statusOnline = $_POST['statusOnline'];

	$result = $conn->query("UPDATE `users` SET `nickName` = '$nickName', `email` = '$email', `password` = '$password', `statusOnline` = '$statusOnline' WHERE `id` = '$id'");
	if ($result) {
		$res['message'] = "User Updated successfully";
	} else{
		$res['error'] = true;
		$res['message'] = "User Update failed";
	}
}

if ($action == 'search' && $obj == 'users') {
	$id = $_POST['id'];
	$nickName = $_POST['nickName'];
	$email = $_POST['email'];
	$password = $_POST['password'];
    $statusOnline = $_POST['statusOnline'];

	$result = $conn->query("SELECT * FROM users WHERE email = '$email'");
	if ($result) {

		$res['message'] =  "User Search success";
		$res_int = mysql_numrows($result);
	} else{
		$res['error'] = true;
		$res['message'] = "User Search failed";
	}
}

if ($action == 'delete' && $obj == 'users') {
	$id = $_POST['id'];
	$nickName = $_POST['nickName'];
	$email = $_POST['email'];
	$password = $_POST['password'];
    $statusOnline = $_POST['statusOnline'];

	$result = $conn->query("DELETE FROM `users` WHERE `id` = '$id'");
	if ($result) {
		$res['message'] = "User deleted successfully";
	} else{
		$res['error'] = true;
		$res['message'] = "User delete failed";
	}
}


$conn -> close();
//header("Content-type: application/json");
header("Access-Control-Allow-Origin:*");
echo json_encode($res);
die();

 ?>