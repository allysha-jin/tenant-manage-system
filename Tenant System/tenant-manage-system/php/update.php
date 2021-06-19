<?php
require 'database.php';
$postdata = file_get_contents('php://input');

if(isset($postdata) && !empty($postdata))
{
	$request = json_decode($postdata);
	
	if ((int)$request->id < 1 || trim($request->password) == '' || (float)$request->amount < 0) {
		return http_response_code(400);
	}
	$tenant_id = mysqli_real_escape_string($db, (int)$request['id']);
	$tenant_username = mysqli_real_escape_string($db, trim($request['username']));
	$tenant_password = mysqli_real_escape_string($db, trim($request['password']);
	$tenant_name = mysqli_real_escape_string($db, trim($request['fullName']));
	$tenant_email = mysqli_real_escape_string($db, trim($request['email']));
	$tenant_address = mysqli_real_escape_string($db, trim($request['address']));
	$tenant_phonenum = mysqli_real_escape_string($db, trim($request['phonenum']));
	$sql = "UPDATE tenant SET tenant_username='$username',tenant_password='$password',tenant_name='$fullName',tenant_email='$email',tenant_address='$address',tenant_phonenum='$phonenum' WHERE tenant_id = $id";


	if($db->query($sql))
	{
		http_response_code(204);
	}
	else
	{
		return http_response_code(422);
	}
}
?>